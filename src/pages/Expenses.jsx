//import { MapPinIcon } from '@heroicons/react/24/solid';
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import micButton from "../assets/mic.webp";
import {
  AudioConfig,
  Diagnostics,
  LogLevel,
  SpeechConfig,
  SpeechSynthesisOutputFormat,
  SpeechSynthesisVisemeEventArgs,
  SpeechSynthesizer,
  SpeechRecognizer,
} from "microsoft-cognitiveservices-speech-sdk";
import { getTokenOrRefresh } from "./token_util";
import { ResultReason } from "microsoft-cognitiveservices-speech-sdk";

const subscriptionKey = "c91eff3d67fe4d0ea58798eaafd25aa6";
const serviceRegion = "eastus";
const speech_config = SpeechConfig.fromSubscription(
  subscriptionKey,
  serviceRegion
);
const audio_config = AudioConfig.fromDefaultSpeakerOutput();
const s_synth = new SpeechSynthesizer(speech_config, audio_config);

const Expenses = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setSubmitting] = useState(false);
  const [displayText, setDisplayText] = useState(
    "INITIALIZED: ready to test speech..."
  );
  const onSubmit = async (formData) => {
    console.log(formData); // Log the form data
    // setSubmitting(true);

    // try {
    //   const response = await axios.post("http://172.23.27.21:8000/item/", {
    //     name: formData.name,
    //     price: formData.price,
    //     location: formData.location,
    //     type: formData.type,
    //     month: formData.month,
    //     day: formData.day,
    //     year: formData.year,
    //   });

    //   if (response.status === 201) {
    //     console.log("Form submitted successfully:", response.data);
    //     // Reset the form after successful submission
    //     reset();
    //   } else {
    //     console.error("Form submission failed:", response.data);
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // } finally {
    //   setSubmitting(false);
    // }
    const resp = s_synth.speakTextAsync("Hello Bobby");
    return resp;
  };

  async function sttFromMic() {
    const tokenObj = await getTokenOrRefresh();
    const speechConfig = SpeechConfig.fromSubscription(
      "c91eff3d67fe4d0ea58798eaafd25aa6",
      "eastus"
    );
    speechConfig.speechRecognitionLanguage = "en-US";

    const audioConfig = AudioConfig.fromDefaultMicrophoneInput();
    const recognizer = new SpeechRecognizer(speechConfig, audioConfig);

    setDisplayText("speak into your microphone...");

    recognizer.recognizeOnceAsync((result) => {
      if (result.reason === ResultReason.RecognizedSpeech) {
        setDisplayText(`RECOGNIZED: Text=${result.text}`);
      } else {
        setDisplayText(
          "ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly."
        );
      }
    });
  }

  const startListening = () => {};

  const stopListening = () => {};

  return (
    <div className="bg-[#cff3ff] min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <h3 className="absolute top-36 uppercase tracking-[20px] text-black text-2xl">
        Expenses Advisor Form
      </h3>
      <div className="w-1/2">
        <button
          className="text-black text-2xl text-bold items-center justify-center absolute left-[23rem] bottom-[31rem] hover:opacity-70 ease-in-out duration-300"
          onClick={sttFromMic}
          onMouseUp={stopListening}
        >
          <img src={micButton} alt="mic button" width={100} height={100} />
        </button>
        <div className="absolute bottom-[5rem] left-[4rem] flex flex-col space-y-10">
          <h4 className="text-4xl text-black font-semibold text-center">
            Add any additional information you want <br /> your{" "}
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
            <form
              className="flex flex-col space-y-2 w-fit mx-auto"
              onSubmit={handleSubmit(onSubmit)}
            >
              <textarea
                className="contactInput bg-black placeholder-gray-500 rounded-xl w-[45rem] h-[10rem]"
                {...register("inputString")}
                placeholder="Your Comments"
              />

              <button
                className={`bg-[#f7ab0a] py-5 px-10 rounded-xl text-black font-bold text-lg ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-70 ease-in-out duration-300"
                }`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <h4 className="text-lg text-black font-semibold text-center absolute bottom-[40rem] right-[19.5rem] decoration-[#f7ab0a]/50 underline">
        Your AI Transcript
      </h4>
      <textarea
        className="contactInput bg-black placeholder-white absolute right-[12rem] bottom-[4rem] w-[25rem] h-[35rem] rounded-3xl"
        {...register("feedback")}
        // Make sure to change the ...register to what seems to become a get request from the AI API so that the AI transcript/output can be rendered
        placeholder={displayText}
      />
    </div>
  );
};

export default Expenses;
