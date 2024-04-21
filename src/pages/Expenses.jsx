//import { MapPinIcon } from '@heroicons/react/24/solid';
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import micButton from "../assets/mic.webp"
import { ChatOpenAI } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";
import {ChatPromptTemplate} from '@langchain/core/prompts';








import { OpenAIEmbeddings } from "@langchain/openai";




import { MessagesPlaceholder } from "@langchain/core/prompts";
import { HumanMessage, AIMessage } from "@langchain/core/messages";



import {
  AudioConfig,
  Diagnostics,
  LogLevel,
  SpeechConfig,
  SpeechSynthesisOutputFormat,
  SpeechSynthesisVisemeEventArgs,
  SpeechSynthesizer,
  SpeechRecognizer
} from 'microsoft-cognitiveservices-speech-sdk'
import { getTokenOrRefresh } from './token_util';
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';

const subscriptionKey = "c91eff3d67fe4d0ea58798eaafd25aa6";
const serviceRegion = "eastus";
const speech_config = SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
const audio_config = AudioConfig.fromDefaultSpeakerOutput();
const s_synth = new SpeechSynthesizer(speech_config, audio_config);

//const key = "sk-proj-2ee4FDzZ1BwgtmATcG1aT3BlbkFJsp6nOCkjP7v3xHHYzkBq";


const Expenses = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setSubmitting] = useState(false);
  const [inputString, setInputString] = useState('');
  const [aiString, setAiString] = useState('');
  const [displayText, setDisplayText] = useState('INITIALIZED: ready to test speech...');
  const [messages, setMessages] = useState([
    {
      message: inputString
    }
  ])
  const handleChange = (event) => {
    setInputString(event.target.value);
  }
  const not = () => {
    
  }
  const onSubmit = () => {

    chatCompletion(inputString);
    console.log(inputString);


    // Bottom 2 lines are for the test to speech
    


  };

  async function sttFromMic() {
    const tokenObj = await getTokenOrRefresh();
    const speechConfig = SpeechConfig.fromSubscription("c91eff3d67fe4d0ea58798eaafd25aa6", 'eastus');
    speechConfig.speechRecognitionLanguage = 'en-US';
    
    const audioConfig = AudioConfig.fromDefaultMicrophoneInput();
    const recognizer = new SpeechRecognizer(speechConfig, audioConfig);

    setDisplayText('speak into your microphone...');

    recognizer.recognizeOnceAsync(result => {
        if (result.reason === ResultReason.RecognizedSpeech) {
            // setDisplayText(`You: ${result.text}`);
            setInputString(`You: ${result.text}`);
            chatCompletion(result.text);

        } else {
            setDisplayText('There was an error, please try again!');
        }
    });
}


  async function chatCompletion(text) {
    console.log("YYYY")
    const model = new ChatOpenAI({
      openAIApiKey: key,
    });
  

  

    // await fetch("./disasterDataSets.pdf")
    //   .then(response => response.blob())
    //   .then(blob => {
    //     const loader = new WebPDFLoader(blob, {
    //       type: "application/pdf",
    //     });

    //   });





    
    // fake
    const chatHistory = [
      new HumanMessage(text),
      new HumanMessage("My last name is Patel")

    ];


    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are going to act as a financial advisor for the user that asks you questions. In this case, using ALL of the context given to you, you will give general advice to the user in 2 sentences only and 2 pieces of specific advice regarding their financial situation using the context of the conversation. MAKE SURE YOUR ANSWER CONTAINS ONLY 2 SENTENCES OF GENERAL ADVICE AND 2 SMALL PIECES OF SPECIFIC ADVICE!!!!! YOUR SPECIFIC ADVICE SHOULD GIVE MANY NUMBERS AND A BREAKDOWN OF COSTS AND HOW MUCH TO SAVE FOR THEIR GOALS, ETC. REMEMBER YOU ARE THE FINANCIAL ADVISOR ROLE. DO NOT TELL THE USER TO CONSIDER SPEAKING TO A FINANCIAL ADVISOR NO MATTER WHAT.",
      ],
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
    ]);
    
    const parser = new StringOutputParser();
    const chain = await prompt.pipe(model).pipe(parser);




    
    

    const response = await chain.invoke({
      chat_history: chatHistory,
      input: text,
    });
    
    console.log(response);
    
    setAiString("AI: " + response);
    const resp = s_synth.speakTextAsync(response);
    return resp;

    


    


  }

  return (
    <div className = "bg-[#cff3ff] min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <h3 className="absolute top-36 uppercase tracking-[20px] text-black text-2xl">
        Expenses Advisor Form
      </h3>
    <div className="w-1/2">
      <button className="text-black text-2xl text-bold items-center justify-center absolute left-[23rem] bottom-[31rem] hover:opacity-70 ease-in-out duration-300" onClick={sttFromMic}>
        <img 
          src = {micButton}
          alt = "mic button"
          width = {100}
          height = {100}
        />
      </button>
      <div className="absolute bottom-[5rem] left-[4rem] flex flex-col space-y-10">
        <h4 className="text-4xl text-black font-semibold text-center">
          Add any additional information you want <br/> your{" "}
          <span className="decoration-[#f7ab0a]/50 underline">financial</span>{" "}
          advisor to know...
        </h4>
        {/*<div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl text-black">New Brunswick, NJ</p>
          </div>
        </div>*/}
        <div dir="ltr">
        <div
          className="flex flex-col space-y-2 w-fit mx-auto"
          
        >
          <textarea
            className="contactInput bg-black placeholder-gray-500 rounded-xl w-[45rem] h-[10rem] text-white"
            onChange={handleChange}
            value={inputString}
            placeholder="Before your conversation with your financial advisor begins, submit any additional information you think is important to your financial situation."
          />
          

          <button
            className={`bg-[#f7ab0a] py-5 px-10 rounded-xl text-black font-bold text-lg `}
            onClick={onSubmit}
            
            
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
    <h4 className="text-lg text-black font-semibold text-center absolute bottom-[40rem] right-[19.5rem] decoration-[#f7ab0a]/50 underline">
          Your AI Transcript
        </h4>
    <div
      className="contactInput bg-white z-02 placeholder-white absolute right-[12rem] bottom-[4rem] w-[28rem] h-[35rem] rounded-3xl"
      {...register('feedback')}
      // Make sure to change the ...register to what seems to become a get request from the AI API so that the AI transcript/output can be rendered
      // placeholder={displayText}
      
    >
      
      <textarea className="relative contactInput h-1/4 bg-black z-03 placeholder-white w-[25rem] rounded-3xl" value={inputString}></textarea>
      <textarea className="relative contactInput h-3/4 bg-black z-03 placeholder-white w-[25rem] rounded-3xl" value={aiString}></textarea>
    </div>

    </div>
  );
};

export default Expenses;