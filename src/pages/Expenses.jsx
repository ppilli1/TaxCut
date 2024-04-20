//import { MapPinIcon } from '@heroicons/react/24/solid';
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Expenses = () => {
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
    <div className="bg-[#fff8e7] min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <h3 className="uppercase tracking-[20px] text-black text-2xl">
        Additional Information Form
      </h3>
      <div className="flex w-full h-full">
        {/* Left Half */}
        <div className="w-1/2 flex flex-col justify-center items-center">
          {/* Top Half */}
          <div className="flex items-center justify-center">
            <button className="text-black text-2xl font-bold">BRO</button>
          </div>
          {/* Bottom Half */}
          <div className="w-full">
            <h4 className="text-4xl text-black font-semibold text-center">
              Add any additional information you want <br /> your financial advisor to know...{" "}
              <span className="decoration-[#f7ab0a]/50 underline">legally</span>{" "}
            </h4>
            <div dir="ltr">
              <form
                className="flex flex-col space-y-2 w-fit mx-auto"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex space-x-2">
                  <input
                    className="contactInput bg-black placeholder-white"
                    type="text"
                    {...register("name")}
                    placeholder="Name of Expense"
                  />
                  <input
                    className="contactInput bg-black placeholder-white"
                    type="text"
                    {...register("price")}
                    placeholder="$ Price of Expense"
                  />
                  <select
                    className="contactInput bg-black placeholder-white"
                    {...register("location")}
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Select Location
                    </option>
                    {/* Options for location */}
                  </select>
                </div>
                <div className="flex space-x-2">
                  {/* Other form inputs */}
                </div>
                <button
                  className={`bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:opacity-80"
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
        {/* Right Half */}
        <div className="w-1/2 items-center justify-center">
          <div className = "flex space-x-2">
            <input className="text-black text-center">Sample Text</input>
          </div>
        </div>
      </div>
    </div>
  );
  
  
};

export default Expenses;
