//import { MapPinIcon } from '@heroicons/react/24/solid';
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import monopolyMan from "../assets/monopolyMan.png";
import monoMan from "../assets/monoMan.png";


const Customer = () => {
 const { register, handleSubmit, reset, formState: { errors } } = useForm();
 const [isSubmitting, setSubmitting] = useState(false);


 const onSubmit = async (formData) => {
   setSubmitting(true); // Start 'submitting' state
    let data = JSON.stringify({
     "firstName": formData.firstName,
     "lastName": formData.lastName,
     "state": formData.location,
     "starting_balance": formData.bankBalance,
   });
    let config = {
     method: 'post',
     maxBodyLength: Infinity,
     url: 'http://127.0.0.1:8000/api/customers/',
     headers: {
       'Content-Type': 'application/json'
     },
     data : data
   };
    axios.request(config)
   .then((response) => {
     if (response.status === 201) {
       console.log("Customer created:", response.data);
       reset(); // Reset form on success
     } else {
       console.error("Failed to create customer:", response.data);
     }
   })
   .catch((error) => {
     console.log(error);
   })
   .finally(() => {
     setSubmitting(false); // End 'submitting' state
   });
 };
 // Loans
 const onSubmit1 = async (formData) => {
   setSubmitting(true); // Start 'submitting' state
    let data = JSON.stringify({
     "type": formData.type,
     "creation_year": formData.creation_year,
     "creation_month": formData.creation_month,
     "creation_day": formData.day,
     "monthly_payment": formData.monthly_payment,
     "amount": formData.amount,
     "name": formData.name,
     "interest": formData.interest,
   });
    let config = {
     method: 'post',
     maxBodyLength: Infinity,
     url: 'http://127.0.0.1:8000/api/loans/',
     headers: {
       'Content-Type': 'application/json'
     },
     data : data
   };
  axios.request(config)
 .then((response) => {
   if (response.status === 201) {
     console.log("Loan created:", response.data);
     reset(); // Reset form on success
   } else {
     console.error("Failed to create loan:", response.data);
   }
 })
 .catch((error) => {
   if (error.response) {
     // The request was made and the server responded with a status code
     // that falls out of the range of 2xx
     console.log(error.response.data);
     console.log(error.response.status);
     console.log(error.response.headers);
   } else if (error.request) {
     // The request was made but no response was received
     console.log(error.request);
   } else {
     // Something happened in setting up the request that triggered an Error
     console.log('Error', error.message);
   }
   console.log(error.config);
 })
 .finally(() => {
   setSubmitting(false); // End 'submitting' state
 });
 };
// bills
 const onSubmit2 = async (formData) => {
   setSubmitting(true); // Start 'submitting' state
    let data = JSON.stringify({
     "creation_year": formData.creation_year,
     "creation_month": formData.creation_month,
     "creation_day": formData.creation_day,
     "payment_year": formData.payment_year,
     "payment_month": formData.payment_month,
     "payment_day": formData.payment_day,
     "name": formData.name,
     "amount": formData.amount,
   });
    axios.post('http://127.0.0.1:8000/api/bills/', data)
   .then((response) => {
     if (response.status === 201) {
       console.log("Customer created:", response.data);
       reset(); // Reset form on success
     } else {
       console.error("Failed to create customer:", response.data);
     }
   })
   .catch((error) => {
     if (error.response) {
       // The request was made and the server responded with a status code
       // that falls out of the range of 2xx
       console.log(error.response.data);
       console.log(error.response.status);
       console.log(error.response.headers);
     } else if (error.request) {
       // The request was made but no response was received
       console.log(error.request);
     } else {
       // Something happened in setting up the request that triggered an Error
       console.log('Error', error.message);
     }
     console.log(error.config);
   })
   .finally(() => {
     setSubmitting(false); // End 'submitting' state
   });
 };


 const onSubmit3 = async (formData) => {
   setSubmitting(true); // Start 'submitting' state
    let data = JSON.stringify({
     "firstName": formData.firstName,
     "lastName": formData.lastName,
     "state": formData.location,
     "starting_balance": formData.bankBalance,
   });
    let config = {
     method: 'post',
     maxBodyLength: Infinity,
     url: 'http://127.0.0.1:8000/api/customers/',
     headers: {
       'Content-Type': 'application/json'
     },
     data : data
   };
    axios.request(config)
   .then((response) => {
     if (response.status === 201) {
       console.log("Customer created:", response.data);
       reset(); // Reset form on success
     } else {
       console.error("Failed to create customer:", response.data);
     }
   })
   .catch((error) => {
     console.log(error);
   })
   .finally(() => {
     setSubmitting(false); // End 'submitting' state
   });
 };


 const onSubmit4 = async (formData) => {
   setSubmitting(true); // Start 'submitting' state
    let data = JSON.stringify({
     "firstName": formData.firstName,
     "lastName": formData.lastName,
     "state": formData.location,
     "starting_balance": formData.bankBalance,
   });
    let config = {
     method: 'post',
     maxBodyLength: Infinity,
     url: 'http://127.0.0.1:8000/api/customers/',
     headers: {
       'Content-Type': 'application/json'
     },
     data : data
   };
    axios.request(config)
   .then((response) => {
     if (response.status === 201) {
       console.log("Customer created:", response.data);
       reset(); // Reset form on success
     } else {
       console.error("Failed to create customer:", response.data);
     }
   })
   .catch((error) => {
     console.log(error);
   })
   .finally(() => {
     setSubmitting(false); // End 'submitting' state
   });
 };


 return (
   <div className="bg-[#cff3ff] min-h-screen flex flex-col items-center justify-center overflow-hidden">
     <h3 className="absolute top-36 uppercase tracking-[20px] text-black text-2xl">
       Customer Profile Creator
     </h3>
     <div>
       <img
         className="absolute left-[16rem] bottom-[8rem]"
         src={monopolyMan}
         alt="mic button"
         width={400}
         height={400}
       />
     </div>
     <div className="absolute top-[3rem] right-[3rem]">
     <div className="absolute right-[27rem] top-[20rem] w-[19rem] p-6 bg-black rounded-lg shadow flex flex-col items-center justify-center">
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
         Create Account
       </h5>
       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
         Create Your New Profile!
       </p>
       <button
         //make sure to add an onClick function for each of these buttons to open up modals
         onClick={() => document.getElementById("create_modal").showModal()}
         className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#cff3ff] rounded-lg hover:bg-[#a6d4e3]"
       >
         Click Here
         <svg
           className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
           aria-hidden="true"
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 14 10"
         >
           <path
             stroke="currentColor"
             stroke-linecap="round"
             stroke-linejoin="round"
             stroke-width="2"
             d="M1 5h12m0 0L9 1m4 4L9 9"
           />
         </svg>
       </button>
     </div>
     {/* Put a backdrop called backdrop-blur-sm/md backdrop-filter, change the opacity if you want, most likely won't help though */}
     <dialog
       id="create_modal"
       className="p-10 rounded-lg border border-dashed bg-black-200"
     >
       <div className="m-4">
         <div className="flex flex-row mb-10">
           <h3 className="font-bold text-lg">Create New User</h3>
           <button
             type="button"
             onClick={() => {
               document.getElementById("create_modal").close();
             }}
             className="absolute top-[1rem] right-[1rem]"
           >
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6"
             >
               <path
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
               />
             </svg>
           </button>
         </div>
         <div className="modal-action">
           <form
             method="dialog"
             className="flex flex-col space-y-2 w-fit mx-auto"
             onSubmit={handleSubmit(onSubmit)}
           >
             <div className="flex space-x-2">
               <input
                 className="contactInput bg-black placeholder-gray-500 rounded-xl w-1/2"
                 type="text"
                 {...register("firstName")}
                 placeholder="First Name"
               />
               <input
                 className="contactInput bg-black placeholder-gray-500 rounded-xl w-1/2"
                 type="text"
                 {...register("lastName")}
                 placeholder="Last Name"
               />
             </div>
             <div className="flex space-x-2">
               <select
                 className="contactInput bg-black placeholder-white rounded-xl w-1/2"
                 {...register("location")}
                 defaultValue=""
               >
                 <option value="" disabled hidden>
                   Select Location
                 </option>
                 <option value="AL">Alabama</option>
                 <option value="AK">Alaska</option>
                 <option value="AZ">Arizona</option>
                 <option value="AR">Arkansas</option>
                 <option value="CA">California</option>
                 <option value="CO">Colorado</option>
                 <option value="CT">Connecticut</option>
                 <option value="DE">Delaware</option>
                 <option value="FL">Florida</option>
                 <option value="GA">Georgia</option>
                 <option value="HI">Hawaii</option>
                 <option value="ID">Idaho</option>
                 <option value="IL">Illinois</option>
                 <option value="IN">Indiana</option>
                 <option value="IA">Iowa</option>
                 <option value="KS">Kansas</option>
                 <option value="KY">Kentucky</option>
                 <option value="LA">Louisiana</option>
                 <option value="ME">Maine</option>
                 <option value="MD">Maryland</option>
                 <option value="MA">Massachusetts</option>
                 <option value="MI">Michigan</option>
                 <option value="MN">Minnesota</option>
                 <option value="MS">Mississippi</option>
                 <option value="MO">Missouri</option>
                 <option value="MT">Montana</option>
                 <option value="NE">Nebraska</option>
                 <option value="NV">Nevada</option>
                 <option value="NH">New Hampshire</option>
                 <option value="NJ">New Jersey</option>
                 <option value="NM">New Mexico</option>
                 <option value="NY">New York</option>
                 <option value="NC">North Carolina</option>
                 <option value="ND">North Dakota</option>
                 <option value="OH">Ohio</option>
                 <option value="OK">Oklahoma</option>
                 <option value="OR">Oregon</option>
                 <option value="PA">Pennsylvania</option>
                 <option value="RI">Rhode Island</option>
                 <option value="SC">South Carolina</option>
                 <option value="SD">South Dakota</option>
                 <option value="TN">Tennessee</option>
                 <option value="TX">Texas</option>
                 <option value="UT">Utah</option>
                 <option value="VT">Vermont</option>
                 <option value="VA">Virginia</option>
                 <option value="WA">Washington</option>
                 <option value="DC">Washington, D.C.</option>
                 <option value="WV">West Virginia</option>
                 <option value="WI">Wisconsin</option>
                 <option value="WY">Wyoming</option>
               </select>
               <input
                 className="contactInput bg-black placeholder-gray-500 rounded-xl w-1/2"
                 type="number"
                 {...register("bankBalance")}
                 placeholder="Bank Balance"
               />
             </div>
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
     </dialog>


     <div className="absolute right-[5rem] top-[20rem] w-[19rem] p-6 bg-black rounded-lg shadow flex flex-col items-center justify-center">
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
         Loans
       </h5>
       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
         Make or Track Existing Loans
       </p>
       <button
         //make sure to add an onClick function for each of these buttons to open up modals
         onClick={() => document.getElementById("loans_modal").showModal()}
         className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#cff3ff] rounded-lg hover:bg-[#a6d4e3]"
       >
         Click Here
         <svg
           className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
           aria-hidden="true"
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 14 10"
         >
           <path
             stroke="currentColor"
             stroke-linecap="round"
             stroke-linejoin="round"
             stroke-width="2"
             d="M1 5h12m0 0L9 1m4 4L9 9"
           />
         </svg>
       </button>
     </div>


     <dialog
       id="loans_modal"
       className="p-10 rounded-lg border border-dashed bg-black-200"
     >
       <div className="m-4">
         <div className="flex flex-row mb-10">
           <h3 className="font-bold text-lg">Create New Loan</h3>
           <button
             type="button"
             onClick={() => {
               document.getElementById("loans_modal").close();
             }}
             className="absolute top-[1rem] right-[1rem]"
           >
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6"
             >
               <path
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
               />
             </svg>
           </button>
         </div>
         <div className="modal-action">
           <form
             method="dialog"
             className="flex flex-col space-y-2 w-fit mx-auto"
             onSubmit={handleSubmit(onSubmit1)}
           >
             <div className="flex flex-row space-x-2">
               <input
                 className="contactInput bg-black placeholder-gray-500 rounded-xl"
                 type="text"
                 {...register("type")}
                 placeholder="Type of Loan"
               />
               <input
                 className="contactInput bg-black placeholder-gray-500 rounded-xl"
                 type="number"
                 {...register("amount")}
                 placeholder="$ Loan Amount"
               />
             </div>
             <div className="flex flex-row w-full space-x-2">
               <select
                 className="contactInput bg-black placeholder-white rounded-xl w-1/3"
                 {...register("month")}
                 defaultValue=""
               >
                 <option value="" disabled hidden>
                   Month
                 </option>
                 <option>Jan</option>
                 <option>Feb</option>
                 <option>Mar</option>
                 <option>Apr</option>
                 <option>May</option>
                 <option>Jun</option>
                 <option>Jul</option>
                 <option>Aug</option>
                 <option>Sep</option>
                 <option>Oct</option>
                 <option>Nov</option>
                 <option>Dec</option>
               </select>
               <select
                 className="contactInput bg-black placeholder-white rounded-xl w-1/3"
                 {...register("day")}
                 defaultValue=""
               >
                 <option value="" disabled hidden>
                   Day
                 </option>
                 <option>1</option>
                 <option>2</option>
                 <option>3</option>
                 <option>4</option>
                 <option>5</option>
                 <option>6</option>
                 <option>7</option>
                 <option>8</option>
                 <option>9</option>
                 <option>10</option>
                 <option>11</option>
                 <option>12</option>
                 <option>13</option>
                 <option>14</option>
                 <option>15</option>
                 <option>16</option>
                 <option>17</option>
                 <option>18</option>
                 <option>19</option>
                 <option>20</option>
                 <option>21</option>
                 <option>22</option>
                 <option>23</option>
                 <option>24</option>
                 <option>25</option>
                 <option>26</option>
                 <option>27</option>
                 <option>28</option>
                 <option>29</option>
                 <option>30</option>
                 <option>31</option>
               </select>
               <select
                 className="contactInput bg-black placeholder-white rounded-xl w-1/3"
                 {...register("creation_year")}
                 defaultValue=""
               >
                 <option value="" disabled hidden>
                   Year
                 </option>
                 <option>2025</option>
                 <option>2024</option>
                 <option>2023</option>
                 <option>2022</option>
                 <option>2021</option>
                 <option>2020</option>
                 <option>2019</option>
                 <option>2018</option>
                 <option>2017</option>
                 <option>2016</option>
                 <option>2015</option>
                 <option>2014</option>
                 <option>2013</option>
                 <option>2012</option>
                 <option>2011</option>
                 <option>2010</option>
                 <option>2009</option>
                 <option>2008</option>
                 <option>2007</option>
                 <option>2006</option>
                 <option>2005</option>
                 <option>2004</option>
                 <option>2003</option>
                 <option>2002</option>
                 <option>2001</option>
                 <option>2000</option>
                 <option>1999</option>
                 <option>1998</option>
                 <option>1997</option>
                 <option>1996</option>
                 <option>1995</option>
                 <option>1994</option>
                 <option>1993</option>
                 <option>1992</option>
                 <option>1991</option>
                 <option>1990</option>
                 <option>1989</option>
                 <option>1988</option>
                 <option>1987</option>
                 <option>1986</option>
                 <option>1985</option>
                 <option>1984</option>
                 <option>1983</option>
                 <option>1982</option>
                 <option>1981</option>
                 <option>1980</option>
               </select>
             </div>
             <div className="flex flex-row space-x-2">
               <input
                 className="contactInput bg-black placeholder-gray-500 rounded-xl"
                 type="number"
                 {...register("monthly_payment")}
                 placeholder="$ Monthly Payment"
               />
               <input
                 className="contactInput bg-black placeholder-gray-500 rounded-xl"
                 type="number"
                 {...register("interest")}
                 placeholder="$ Loan Interest"
               />
             </div>
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
     </dialog>


     <div className="absolute right-[16rem] top-[32rem] w-[19rem] p-6 border border-red-200 rounded-lg shadow bg-black flex flex-col items-center justify-center">
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
         Bills
       </h5>
       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
         Be on top of your payments
       </p>
       <button
         //make sure to add an onClick function for each of these buttons to open up modals
         onClick={() => document.getElementById("bills_modal").showModal()}
         className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#cff3ff] rounded-lg hover:bg-[#a6d4e3]"
       >
         Click Here
         <svg
           className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
           aria-hidden="true"
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 14 10"
         >
           <path
             stroke="currentColor"
             stroke-linecap="round"
             stroke-linejoin="round"
             stroke-width="2"
             d="M1 5h12m0 0L9 1m4 4L9 9"
           />
         </svg>
       </button>
     </div>


     <dialog
       id="bills_modal"
       className="p-10 rounded-lg border border-dashed bg-black-200"
     >
       <div className="m-4">
         <div className="flex flex-row mb-10">
           <h3 className="font-bold text-lg">Create New Bills</h3>
           <button
             type="button"
             onClick={() => {
               document.getElementById("bills_modal").close();
             }}
             className="absolute top-[1rem] right-[1rem]"
           >
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="currentColor"
               class="w-6 h-6"
             >
               <path
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
               />
             </svg>
           </button>
         </div>
         <div className="modal-action">
           <form
             method="dialog"
             className="flex flex-col space-y-2 w-fit mx-auto"
             onSubmit={handleSubmit(onSubmit2)}
           >
             <div className="flex space-x-2">
               <input
                 className="contactInput bg-black placeholder-gray-500 rounded-xl"
                 type="text"
                 {...register("name")}
                 placeholder="Name of Bill"
               />
               <input
                 className="contactInput bg-black placeholder-gray-500 rounded-xl"
                 type="number"
                 {...register("amount")}
                 placeholder="$ Price of Bill"
               />
             </div>
             <p className="text-md bold text-white">Bill Creation Date</p>
             <div className="flex flex-row w-full space-x-2">
                 <select
                   className="contactInput bg-black placeholder-white rounded-xl w-1/3"
                   {...register("creation_month")}
                   defaultValue=""
                 >
                   <option value="" disabled hidden>
                     Month
                   </option>
                   <option>Jan</option>
                   <option>Feb</option>
                   <option>Mar</option>
                   <option>Apr</option>
                   <option>May</option>
                   <option>Jun</option>
                   <option>Jul</option>
                   <option>Aug</option>
                   <option>Sep</option>
                   <option>Oct</option>
                   <option>Nov</option>
                   <option>Dec</option>
                 </select>
                 <select
                   className="contactInput bg-black placeholder-white rounded-xl w-1/3"
                   {...register("creation_day")}
                   defaultValue=""
                 >
                   <option value="" disabled hidden>
                     Day
                   </option>
                   <option>1</option>
                   <option>2</option>
                   <option>3</option>
                   <option>4</option>
                   <option>5</option>
                   <option>6</option>
                   <option>7</option>
                   <option>8</option>
                   <option>9</option>
                   <option>10</option>
                   <option>11</option>
                   <option>12</option>
                   <option>13</option>
                   <option>14</option>
                   <option>15</option>
                   <option>16</option>
                   <option>17</option>
                   <option>18</option>
                   <option>19</option>
                   <option>20</option>
                   <option>21</option>
                   <option>22</option>
                   <option>23</option>
                   <option>24</option>
                   <option>25</option>
                   <option>26</option>
                   <option>27</option>
                   <option>28</option>
                   <option>29</option>
                   <option>30</option>
                   <option>31</option>
                 </select>
                 <select
                   className="contactInput bg-black placeholder-white rounded-xl w-1/3"
                   {...register("creation_year")}
                   defaultValue=""
                 >
                   <option value="" disabled hidden>
                     Year
                   </option>
                   <option>2025</option>
                   <option>2024</option>
                   <option>2023</option>
                   <option>2022</option>
                   <option>2021</option>
                   <option>2020</option>
                   <option>2019</option>
                   <option>2018</option>
                   <option>2017</option>
                   <option>2016</option>
                   <option>2015</option>
                   <option>2014</option>
                   <option>2013</option>
                   <option>2012</option>
                   <option>2011</option>
                   <option>2010</option>
                   <option>2009</option>
                   <option>2008</option>
                   <option>2007</option>
                   <option>2006</option>
                   <option>2005</option>
                   <option>2004</option>
                   <option>2003</option>
                   <option>2002</option>
                   <option>2001</option>
                   <option>2000</option>
                   <option>1999</option>
                   <option>1998</option>
                   <option>1997</option>
                   <option>1996</option>
                   <option>1995</option>
                   <option>1994</option>
                   <option>1993</option>
                   <option>1992</option>
                   <option>1991</option>
                   <option>1990</option>
                   <option>1989</option>
                   <option>1988</option>
                   <option>1987</option>
                   <option>1986</option>
                   <option>1985</option>
                   <option>1984</option>
                   <option>1983</option>
                   <option>1982</option>
                   <option>1981</option>
                   <option>1980</option>
                 </select>
               </div>
               <p className="text-md bold text-white">Bill Payment Date</p>
             <div className="flex flex-row w-full space-x-2">
                 <select
                   className="contactInput bg-black placeholder-white rounded-xl w-1/3"
                   {...register("payment_month")}
                   defaultValue=""
                 >
                   <option value="" disabled hidden>
                     Month
                   </option>
                   <option>Jan</option>
                   <option>Feb</option>
                   <option>Mar</option>
                   <option>Apr</option>
                   <option>May</option>
                   <option>Jun</option>
                   <option>Jul</option>
                   <option>Aug</option>
                   <option>Sep</option>
                   <option>Oct</option>
                   <option>Nov</option>
                   <option>Dec</option>
                 </select>
                 <select
                   className="contactInput bg-black placeholder-white rounded-xl w-1/3"
                   {...register("payment_day")}
                   defaultValue=""
                 >
                   <option value="" disabled hidden>
                     Day
                   </option>
                   <option>1</option>
                   <option>2</option>
                   <option>3</option>
                   <option>4</option>
                   <option>5</option>
                   <option>6</option>
                   <option>7</option>
                   <option>8</option>
                   <option>9</option>
                   <option>10</option>
                   <option>11</option>
                   <option>12</option>
                   <option>13</option>
                   <option>14</option>
                   <option>15</option>
                   <option>16</option>
                   <option>17</option>
                   <option>18</option>
                   <option>19</option>
                   <option>20</option>
                   <option>21</option>
                   <option>22</option>
                   <option>23</option>
                   <option>24</option>
                   <option>25</option>
                   <option>26</option>
                   <option>27</option>
                   <option>28</option>
                   <option>29</option>
                   <option>30</option>
                   <option>31</option>
                 </select>
                 <select
                   className="contactInput bg-black placeholder-white rounded-xl w-1/3"
                   {...register("payement_year")}
                   defaultValue=""
                 >
                   <option value="" disabled hidden>
                     Year
                   </option>
                   <option>2025</option>
                   <option>2024</option>
                   <option>2023</option>
                   <option>2022</option>
                   <option>2021</option>
                   <option>2020</option>
                   <option>2019</option>
                   <option>2018</option>
                   <option>2017</option>
                   <option>2016</option>
                   <option>2015</option>
                   <option>2014</option>
                   <option>2013</option>
                   <option>2012</option>
                   <option>2011</option>
                   <option>2010</option>
                   <option>2009</option>
                   <option>2008</option>
                   <option>2007</option>
                   <option>2006</option>
                   <option>2005</option>
                   <option>2004</option>
                   <option>2003</option>
                   <option>2002</option>
                   <option>2001</option>
                   <option>2000</option>
                   <option>1999</option>
                   <option>1998</option>
                   <option>1997</option>
                   <option>1996</option>
                   <option>1995</option>
                   <option>1994</option>
                   <option>1993</option>
                   <option>1992</option>
                   <option>1991</option>
                   <option>1990</option>
                   <option>1989</option>
                   <option>1988</option>
                   <option>1987</option>
                   <option>1986</option>
                   <option>1985</option>
                   <option>1984</option>
                   <option>1983</option>
                   <option>1982</option>
                   <option>1981</option>
                   <option>1980</option>
                 </select>
               </div>


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
     </dialog>
     </div>
   </div>
 );
};


export default Customer;





