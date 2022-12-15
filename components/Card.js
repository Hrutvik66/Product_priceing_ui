import Link from "next/link";
import React from "react";
import { Check, ArrowRight } from "react-feather";

const Card = ({ Plan, Price, Storage, Users, Support }) => {
  return (
    <div>
      {Plan == "Professional" ? (
        <div className="relative lg:right-[-219px] right-[-300px] top-7 z-50 bg-blue-700 text-white w-[5rem] inline-block text-center rounded-2xl p-[3px] font-semibold">
          Popular
        </div>
      ) : (
        ""
      )}
      <div
        className={`${
          Plan == "Professional"
            ? "bg-black text-white scale-105 mb-[2rem] shadow-lg shadow-black"
            : "bg-[#efeeee] shadow-lg"
        } lg:h-[21rem] lg:w-[20rem] w-[24rem] h-[21.5rem] p-[2rem] rounded-2xl space-y-4`}
      >
        <div className="flex flex-col space-y-1 text-center">
          <h2 className="font-bold text-[2rem]">{Plan}</h2>
          <h3>
            ₹ <b>{Price} </b>{" "}
            <span
              className={`${
                Plan == "Professional" ? "text-gray-400" : "text-black"
              }`}
            >
              / month
            </span>
          </h3>
        </div>
        <hr className="w-full bg-[#cfcece] h-[2px]" />
        <div>
          <ul className="flex flex-col space-y-2">
            <li className="flex space-x-2 items-center">
              <Check className="text-gray-400 h-7" />
              <b>{Users}</b> <span>User</span>
            </li>
            <li className="flex space-x-2">
              <Check className="text-gray-400 h-5" />
              <b>{Storage}</b> <span>Storage</span>
            </li>
            <li className="flex space-x-2">
              <Check className="text-gray-400 h-5" />
              <span>Support - </span>
              <b>{Support}</b>
            </li>
          </ul>
        </div>
        <Link href = "/Message">
          <button
            className={`flex items-center w-full justify-center bg-blue-700 p-4 mt-5 text-white outline-none border-none rounded-lg font-semibold space-x-3 cursor-pointer ${
              Plan == "Professional"
                ? "hover:bg-white hover:text-black"
                : "hover:bg-black"
            }   transition-all duration-700 ease-in-out`}
          >
            Choose Plan <ArrowRight className="w-15 h-5 ml-[0.5rem]" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
