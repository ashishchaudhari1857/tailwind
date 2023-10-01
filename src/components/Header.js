import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
function Header() {
  const [toggel, settoggel] = useState(false);
  return (
    <div className="p-2 bg-gray-700">
      <div className="max-w-[1240px] p-4  flex justify-between items-center mx-auto">
        <div className="text-lg font-bold text-gray-100 capitalize shadow-xl text-cente sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
          welcome to e-learn
        </div>
        <div className="ml-auto md:hidden" >
          {toggel ? (
            <AiOutlineClose
              onClick={() => settoggel(!toggel)}
              className="text-2xl text-white"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => settoggel(!toggel)}
              className="text-2xl text-white"
            />
          )}
        </div>
        <ul className="items-center justify-between hidden gap-10 ml-auto font-serif text-xl text-white capitalize cursor-pointer md:flex">
          <li className=" hover:text-blue-400" >home</li>
          <li className=" hover:text-blue-400">about</li>
          <li className=" hover:text-blue-400">contact</li>
        </ul>
        {/* resposive for  mobile */}
      
        <ul
          className={` duration-1000 fixed font-serif text-white capitalize bg-black top-[75px] w-full 
        block md:hidden  h-screen ${toggel ? "left-[0%]" : "left-[-100%]"} text-2xl`}
        >
          <li className="p-5">home</li>
          <li className="p-5">about</li>
          <li className="p-5">contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
