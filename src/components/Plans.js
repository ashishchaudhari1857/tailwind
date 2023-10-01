import React from "react";

import { RiReactjsFill } from "react-icons/ri";
import { GrNode } from "react-icons/gr";
import { FaPhp } from "react-icons/fa6";

function Plans() {
  return (
    <div className="py-[50px]">
      <div className="max-w-[1240px] mx-auto  lg:grid grid-cols-3 gap-[80px]  ">
      <div className="p-2  duration-1000 rounded  shadow-2xl mx-auto md:w-[50%] lg:w-[100%] sm:w-[60%] w-[90%] mt-[30px] lg:mt-0  bg-slate-200 h-[300px] border border-black hover:scale-105">
          <RiReactjsFill className="text-[40px] mt-[-26px]    flex mx-auto"></RiReactjsFill>
          <h1 className="text-3xl font-extrabold text-center text-blue-500">
            React
          </h1>
          <h3 className="mt-5 text-2xl font-bold text-center text-red-300 ">
            87$/month
          </h3>
          <ul className="mt-3 font-serif text-xl list-disc list-inside">
            <li className="mt-1">Fundamental Concepts</li>
            <li className="mt-1">Live Session</li>
            <li className="mt-1">Industry level Projects</li>
            <li className="mt-1">Weekly Mock interviews</li>
          </ul>

          <button className="flex px-10 py-1 mx-auto mt-4 text-white bg-blue-600 rounded-md">
            Start Trial
          </button>
        </div>
        <div className="p-2 duration-1000 rounded  shadow-2xl  mx-auto sm:w-[60%] md:w-[50%]   w-[90%]  lg:w-[100%] mt-[30px] lg:mt-0  bg-slate-200 h-[300px] border border-black hover:scale-105">
          <GrNode className="text-[40px] mt-[-26px]    flex mx-auto"></GrNode>
          <h1 className="text-3xl font-extrabold text-center text-blue-500">
            Node Js
          </h1>
          <h3 className="mt-5 text-2xl font-bold text-center text-red-300 ">
            117$/month
          </h3>
          <ul className="mt-3 font-serif text-xl list-disc list-inside">
            <li className="mt-1">Fundamental Concepts</li>
            <li className="mt-1">Live Session</li>
            <li className="mt-1">Industry level Projects</li>
            <li className="mt-1">Weekly Mock interviews</li>
          </ul>

          <button className="flex px-10 py-1 mx-auto mt-4 text-white bg-blue-600 rounded-md">
            Start Trial
          </button>
        </div>
        <div className="p-2 rounded  duration-1000 mx-auto md:w-[50%] sm:w-[60%]  w-[90%]  mt-[30px] lg:mt-0 lg:w-[100%] shadow-2xl h-[300px]   bg-slate-200 border border-black  hover:scale-105">
          <FaPhp className="text-[40px] mt-[-26px]    flex mx-auto"></FaPhp>
          <h1 className="text-3xl font-extrabold text-center text-blue-500">
            PHP
          </h1>
          <h3 className="mt-5 text-2xl font-bold text-center text-red-300 ">
            57$/month
          </h3>
          <ul className="mt-3 font-serif text-xl list-disc list-inside">
            <li className="mt-1">Fundamental Concepts</li>
            <li className="mt-1">Live Session</li>
            <li className="mt-1">Industry level Projects</li>
            <li className="mt-1">Weekly Mock interviews</li>
          </ul>

          <button className="flex px-10 py-1 mx-auto mt-4 text-white bg-blue-600 rounded-md">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plans;
