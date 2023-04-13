import React from "react";

function Contact() {
  return (
    <div className="contact flex justify-between  p-2 gap-2 lg1:flex-col lg1:justify-start mb-10 py-14 px-20 lg:px-4">
      <div>
        <h3>Join our newsletter and get 20% off</h3>
        <p className="text-white max-w-[550px] mt-4 leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          perferendis earum aliquid cupiditate ipsa fuga provident commodi
          tempora odit mollitia! earum aliquid cupiditate ipsa fuga.
        </p>
      </div>

      <form>
        <input
          type="text"
          placeholder="Enter Email"
          className="w-80 p-2 border-1 border-white rounded-sm lg:w-48 "
        />
        <button className="bg-[#171717] p-[9px] rounded-sm" >Subscribe</button>
      </form>
    </div>
  );
}

export default Contact;
