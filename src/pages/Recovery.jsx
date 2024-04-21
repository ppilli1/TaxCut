//import { MapPinIcon } from '@heroicons/react/24/solid';
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import micButton from "../assets/mic.webp";

const Recovery = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = async (formData) => {
    console.log(formData); // Log the form data
    setSubmitting(true);

    try {
      const response = await axios.post("http://172.23.27.21:8000/item/", {
        name: formData.name,
        price: formData.price,
        location: formData.location,
        type: formData.type,
        month: formData.month,
        day: formData.day,
        year: formData.year,
      });

      if (response.status === 201) {
        console.log("Form submitted successfully:", response.data);
        // Reset the form after successful submission
        reset();
      } else {
        console.error("Form submission failed:", response.data);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

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
            placeholder="Bro"
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
        </div>
      </div>
      <div className="flex flex-col">
        <button className="absolute top-[15rem] right-[20rem] rounded-full bg-black text-[#cff3ff] h-36 w-36 text-center flex items-center justify-center">Circle</button>
        <button className="absolute top-[28rem] right-[20rem] rounded-full bg-black text-[#cff3ff] h-36 w-36 text-center flex items-center justify-center">Circle</button>
        <button className="absolute top-[41rem] right-[20rem] rounded-full bg-black text-[#cff3ff] h-36 w-36 text-center flex items-center justify-center">Circle</button>
      </div>
    </div>
  );
};

export default Recovery;
