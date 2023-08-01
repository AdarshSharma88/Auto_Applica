import React from "react";
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="h-auto bg-cyan-400 mt-20 flex flex-col justify-evenly md:flex-row lg:flex-row items-center gap-10 font-sans p-10 ">
      <div className="followus flex flex-col  h-40 items-center w-full border-b-4 md:border-none lg:border-none ">
        <h1 className="text-3xl font-bold">Follow Us</h1>

        <div className=" my-10 flex flex-row items-center border-white border-b-2 h- rounded-lg">
          <input
            className="m-auto bg-cyan-200  border-cyan-200 text-white rounded-md px-3 py-1 w-60 text-lg active:border-none"
            type="email"
            placeholder="Email..."
          />
          <button className="ml-2 w-10 bg-cyan-200 px-3 py-2.5 rounded-md text-lg text-black ">
            <AiOutlineSend />
          </button>
        </div>
      </div>
      <div className="creaters h-40 w-full md:border-x-4 lg:border-x-4 flex flex-col justify-center items-center ">
        <h1 className="text-2xl text-center pb-4 font-semibold">
          Gaurav Power <br /> & <br /> Adarsh Sharma
        </h1>
        <p className=" font-mono text-sm pt-3 ">All Rights Reserved.</p>
      </div>
      <div className="social_meda  h-full w-full flex flex-col justify-center items-center border-t-4 md:border-none lg:border-none ">
        <h1 className="text-3xl font-medium mt-5">Social Media</h1>
        <ul className="p-5 text-center font-mono text-xl">
          <li className=" transition-all hover:bg-opacity-50 hover:bg-pink-500 rounded-lg p-1 my-1 w-40">
            <a href="https://www.instagram.com/">Instagram</a>
          </li>
          <li className="transition-all hover:bg-opacity-50 hover:bg-red-500 rounded-lg p-1 my-1 w-40">
            <a href="https://www.youtube.com/">Youtube</a>
          </li>
          <li className="transition-all hover:bg-opacity-50 hover:bg-blue-500 rounded-lg p-1 my-1">
            <a href="https://www.github.com/">Github</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
