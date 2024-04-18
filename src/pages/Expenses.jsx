//import { MapPinIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Expenses = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = async (formData) => {
    console.log(formData); // Log the form data
    setSubmitting(true);

    try {
      const response = await axios.post('http://127.0.0.1:8000/customer/', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        occupation: formData.occupation,
        feedback: formData.feedback,
      });

      if (response.status === 201) {
        console.log('Form submitted successfully:', response.data);
        // Reset the form after successful submission
        reset();
      } else {
        console.error('Form submission failed:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-black text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl text-black font-semibold text-center">
          So... what do you think?{' '}
          <span className="decoration-[#f7ab0a]/50 underline">Let us know</span> down below!
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            {/* <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" /> */}
            <p className="text-2xl text-black">New Brunswick, NJ</p>
          </div>
        </div>
        <form className="flex flex-col space-y-2 w-fit mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex space-x-2">
            <input
              className="contactInput bg-black placeholder-white"
              type="text"
              {...register('firstName')}
              placeholder="First Name"
            />
            <input
              className="contactInput bg-black placeholder-white"
              type="text"
              {...register('lastName')}
              placeholder="Last Name"
            />
            <input
              className="contactInput bg-black placeholder-white"
              type="text"
              {...register('email')}
              placeholder="Email"
            />
          </div>
          <input
            className="contactInput bg-black placeholder-white"
            type="text"
            {...register('occupation')}
            placeholder="Occupation"
          />
          <textarea
            className="contactInput bg-black placeholder-white"
            {...register('feedback')}
            placeholder="Feedback"
          />
          <button
            className={`bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'
            }`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Expenses;
