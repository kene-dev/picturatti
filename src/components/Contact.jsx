import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xovjwvop");
  if (state.succeeded) {
    return <p className="w-full h-max gap-10 mb-20 px-5 lg:px-20 text-3xl text-white text-center">Thanks for joining!</p>;
}
  return (
    <div id="contact" className="w-full h-max gap-10 mb-20 px-5 lg:px-20">
      <h1 className="text-white lg:text-4xl text-3xl">Get in Touch with me</h1>

      <div className="w-full flex  items-center lg:flex-row-reverse flex-col-reverse gap-10 my-10">
        <form method="POST" onSubmit={handleSubmit} className="w-full flex flex-col gap-4 h-max">
          <Input
            type="text"
            name='full-name'
            placeholder="Full Name"
            className="bg-transparent h-[50px] border-[1px] border-[#303342] p-2 !focus-visible:border-none !focus-visible:outline-none !focus-visible:ring-0 !active:ring-0 !active:outline-none !ring-offset-0 !active:border-none text-white"
          />
          <Input
            type="number"
            name='phone-number'
            placeholder="Phone number"
            className="bg-transparent h-[50px] border-[1px] border-[#303342] p-2 !focus-visible:border-none !focus-visible:outline-none !focus-visible:ring-0 !active:ring-0 !active:outline-none !ring-offset-0 !active:border-none text-white appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-non"
          />
          <Input
            type="email"
            name='email'
            placeholder="Email Address"
            className="bg-transparent h-[50px] border-[1px] border-[#303342] p-2 !focus-visible:border-none !focus-visible:outline-none !focus-visible:ring-0 !active:ring-0 !active:outline-none !ring-offset-0 !active:border-none text-white"
          />
           <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />

          <Textarea
            placeholder="Talk to me!"
            name='message'
            className="h-[200px] bg-transparent border-[1px] border-[#303342] p-2 !focus-visible:border-none !focus-visible:outline-none !focus-visible:ring-0 !active:ring-0 !active:outline-none !ring-offset-0 !active:border-none text-white"
          />

          <button type="submit" disabled={state.submitting} className="text-white bg-red-400/90 p-4 w-full lg:w-1/3 self-end ">
            Send message
          </button>
        </form>

        <div className="w-full h-max flex flex-col gap-3 text-white">
          <h1>INFO</h1>
          <div className="w-full flex flex-col gap-2 mb-14 font-thin">
            <p>29, Orange Street. Lewiston, ME 04240</p>
            <p>(423) 491 6521</p>
          </div>

          <h1>WORKING HOURS</h1>
          <div className="w-full flex flex-col gap-2 font-thin">
            <p>Monday - Friday from 8:00 am to 11:30 pm</p>
            <p>Weekends from 9:00 am to 11:00 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
