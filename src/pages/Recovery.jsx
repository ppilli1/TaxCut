//import { MapPinIcon } from '@heroicons/react/24/solid';
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import micButton from "../assets/mic.webp";


import { ChatOpenAI } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";
import {ChatPromptTemplate} from '@langchain/core/prompts';













import { MessagesPlaceholder } from "@langchain/core/prompts";
import { HumanMessage, AIMessage } from "@langchain/core/messages";



//const key = "";

const Recovery = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setSubmitting] = useState(false);
  const [inputStr, setInputStr] = useState('');
  const [td1, setTd1] = useState('');
  const [td2, setTd2] = useState('');
  const [td3, setTd3] = useState('');
  const [tt, setTt] = useState('');
  const [tt2, setTt2] = useState('');
  const handleChange = (event) => {
    setInputStr(event.target.value);
  }
  const onSubmit = async () => {
    
    const bx1 = await chatc1(inputStr);
    setTd1(bx1);
    const bx2 = await chatc2();
    setTd2(bx2);
    const bx3 = await chatc3();
    setTd3(bx3);

  };

  const chatc1 = async(text) => {
    const model = new ChatOpenAI({
      openAIApiKey: key,
    });
    
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
  

    await fetch("http://127.0.0.1:8000/api/customers/", requestOptions)
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
      const jsonString = JSON.stringify(data); // Convert JSON data to string
      // Now you can store `jsonString` in a state variable or do whatever you want with it

      setTt(jsonString); // Just to demonstrate, you can replace this with your desired action
    })
  
  

    
    .catch((error) => console.error(error));



  console.log(tt);


  await fetch("http://127.0.0.1:8000/api/bills/", requestOptions)
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
      const jsonString = JSON.stringify(data); // Convert JSON data to string
      // Now you can store `jsonString` in a state variable or do whatever you want with it

      setTt2(jsonString); // Just to demonstrate, you can replace this with your desired action
    })
  
  

    
    .catch((error) => console.error(error));



  console.log(tt2);


  // fake
  const chatHistory = [
    new HumanMessage(tt),
    new HumanMessage(tt2),

    ];


    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are acting like a financial adviser. PROVIDE 1 TO-DO LIST ITEM FOR THE USER BASED ON THEIR SITUATION. MAKE SURE IT IS ONLY 1 SENTENCE!!! No Matter what, there has to be 1 sentence. IT CANNOT BE A REPEAT OF A PREVIOUS TO DO LIST ITEM. NO MATTER WHAT MAKSE SURE THE TO DO LIST SENTENCE OF ADVICE YOU PROVIDE IS QUANTITATIVE AND NOT ANYTHING ABOUT BOOTING PEOPLES MOODS OR EMOTIONAL HELP! ACT LIKE A FINANCIAL ADVISER!!!!"
      ],
      new MessagesPlaceholder("chat_history"),
      ["user", "{input} Make sure to give me a different piece of advice on what to do now than u gave last time."],
    ]);
    
    const parser = new StringOutputParser();
    const chain = await prompt.pipe(model).pipe(parser);




    
    

    const response = await chain.invoke({
      chat_history: chatHistory,
      input: text,
    });
    console.log(response);
    return response.toString();



  };


  const chatc2 = async() => {
    const model = new ChatOpenAI({
      openAIApiKey: key,
    });
    
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
  
    await fetch("http://127.0.0.1:8000/api/customers/", requestOptions)
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
      const jsonString = JSON.stringify(data); // Convert JSON data to string
      // Now you can store `jsonString` in a state variable or do whatever you want with it

      setTt(jsonString); // Just to demonstrate, you can replace this with your desired action
    })
  
  

    
    .catch((error) => console.error(error));



  console.log(tt);


  await fetch("http://127.0.0.1:8000/api/bills/", requestOptions)
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
      const jsonString = JSON.stringify(data); // Convert JSON data to string
      // Now you can store `jsonString` in a state variable or do whatever you want with it

      setTt2(jsonString); // Just to demonstrate, you can replace this with your desired action
    })
  
  

    
    .catch((error) => console.error(error));



  console.log(tt2);


  // fake
  const chatHistory = [
    new HumanMessage(tt),
    new HumanMessage(tt2),
    new AIMessage(td1)

    ];


    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are acting like a financial adviser. PROVIDE 1 TO-DO LIST ITEM FOR THE USER BASED ON THEIR SITUATION. MAKE SURE IT IS ONLY 1 SENTENCE!!! No Matter what, there has to be 1 sentence. IT CANNOT BE A REPEAT OF A PREVIOUS TO DO LIST ITEM. NO MATTER WHAT MAKSE SURE THE TO DO LIST SENTENCE OF ADVICE YOU PROVIDE IS QUANTITATIVE AND NOT ANYTHING ABOUT BOOTING PEOPLES MOODS OR EMOTIONAL HELP! ACT LIKE A FINANCIAL ADVISER!!!!"
      ],
      new MessagesPlaceholder("chat_history"),
      ["user", "This is the advice you gave me last time {input} Make sure to give me a different piece of advice on what to do now than u gave last time."],
    ]);
    
    const parser = new StringOutputParser();
    const chain = prompt.pipe(model).pipe(parser);


    

    const response = await chain.invoke({
      chat_history: chatHistory,
      input: td1,
    });
    console.log(response);
    return response.toString();



  };

  const chatc3 = async() => {
    const model = new ChatOpenAI({
      openAIApiKey: key,
    });
  
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    await fetch("http://127.0.0.1:8000/api/customers/", requestOptions)
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
      const jsonString = JSON.stringify(data); // Convert JSON data to string
      // Now you can store `jsonString` in a state variable or do whatever you want with it

      setTt(jsonString); // Just to demonstrate, you can replace this with your desired action
    })
  
  

    
    .catch((error) => console.error(error));



  console.log(tt);


  await fetch("http://127.0.0.1:8000/api/bills/", requestOptions)
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
      const jsonString = JSON.stringify(data); // Convert JSON data to string
      // Now you can store `jsonString` in a state variable or do whatever you want with it

      setTt2(jsonString); // Just to demonstrate, you can replace this with your desired action
    })
  
  

    
    .catch((error) => console.error(error));



  console.log(tt2);


  // fake
  const chatHistory = [
    new HumanMessage(tt),
    new HumanMessage(tt2),
      new AIMessage(td1),
      new AIMessage(td2)

    ];


    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are acting like a financial adviser. PROVIDE 1 TO-DO LIST ITEM FOR THE USER BASED ON THEIR SITUATION. MAKE SURE IT IS ONLY 1 SENTENCE!!! No Matter what, there has to be 1 sentence. IT CANNOT BE A REPEAT OF A PREVIOUS TO DO LIST ITEM. NO MATTER WHAT MAKSE SURE THE TO DO LIST SENTENCE OF ADVICE YOU PROVIDE IS QUANTITATIVE AND NOT ANYTHING ABOUT BOOTING PEOPLES MOODS OR EMOTIONAL HELP! ACT LIKE A FINANCIAL ADVISER!!!! Do not say anything about diversifying my investments."
      ],
      new MessagesPlaceholder("chat_history"),
      ["user", "These are the pieces of advice you gave me last time {input} and {inp2} Make sure to give me a different piece of advice on what to do now than u gave last time."],
    ]);
    
    const parser = new StringOutputParser();
    const chain = prompt.pipe(model).pipe(parser);


    

    const response = await chain.invoke({
      chat_history: chatHistory,
      input: td1,
      inp2: td2,
    });
    console.log(response);
    return response.toString();



  }

  return (
    <div className="bg-[#cff3ff] min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <h3 className="absolute top-36 uppercase tracking-[20px] text-black text-2xl">
        Recovery Claim Form
      </h3>
      <div className="w-1/2">
        <div className="absolute top-[13rem] left-[10rem] flex flex-col space-y-8">
          <h4 className="text-3xl text-black font-semibold text-center">
            Tell Us About{" "}
            <span className="decoration-[#f7ab0a]/50 underline">Your</span>{" "}
            Experience:
          </h4>
          <textarea
            className="contactInput bg-black placeholder-white w-[32rem] h-[30rem] rounded-3xl border-2"
            {...register("feedback")}
            // Make sure to change the ...register to what seems to become a get request from the AI API so that the AI transcript/output can be rendered
            
            value={inputStr}
            onChange={handleChange}
          />
          <button
            className={`bg-[#f7ab0a] py-5 px-10 rounded-xl text-black font-bold text-lg`}
            onClick={onSubmit}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
      <div className="flex flex-col w-144">
        <h4 className="text-3xl text-black font-semibold text-center absolute top-[13rem] right-[22.5rem]">
          To Do List:
        </h4>
        <textarea className="px-8 py-14 absolute top-[17.2rem] right-[8rem] rounded-3xl bg-black text-[#cff3ff] h-[10rem] w-2/5 text-center inline-flex items-center justify-center" value={td1}></textarea>
        <textarea className="px-8 py-14 absolute top-[30.2rem] right-[8rem] rounded-3xl bg-black text-[#cff3ff] h-[10rem] w-2/5 text-center flex items-center justify-center" value={td2}></textarea>
        <textarea className="px-8 py-14 absolute top-[43.2rem] right-[8rem] rounded-3xl bg-black text-[#cff3ff] h-[10rem] w-2/5 text-center flex items-center justify-center" value={td3}></textarea>
      </div>
    </div>
  );
};

export default Recovery;