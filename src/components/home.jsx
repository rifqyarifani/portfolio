import React from "react";
import profile2 from "/profile2.jpg";
import html from "/html.svg";
import css from "/css.svg";
import js from "/js.svg";
import react from "/react.svg";
import typescript from "/typescript.svg";
import tailwind from "/tailwind.svg";
import next from "/next.svg";

export default function Home() {
  return (
    <div
      className=" flex flex-col sm:flex-row-reverse justify-evenly items-center pt-32 pb-10 background"
      id="home"
    >
      <img
        src={profile2}
        alt="Profile Photo"
        className=" sm:w-2/12 sm:h-2/12 w-4/12 h-4/12 select-none mb-4 rounded-full border-2 border-slate-800"
      />
      <div className=" flex flex-col w-8/12 sm:w-5/12 justify-end text-center items-center sm:gap-8">
        <h1 className=" sm:text-7xl text-5xl mb-4 font-bold">
          Front-End Developer💡
        </h1>
        <p className=" text-xl mb-4 font-medium">
          Hi, My name is Rifqy Arifani, I'm a Front-end Developer based in
          Indonesia. 🇮🇩{" "}
        </p>
        <div className=" flex flex-col sm:flex-row gap-4 items-center">
          <p className=" text-xl font-medium sm:border-r-gray-700 sm:border-r-2 sm:border-b-0 border-b-gray-700 border-b-2 p-2">
            Tech Stack
          </p>
          <div className="flex items-center gap-8 flex-wrap justify-center">
            <div className=" w-16 h-16 bg-white flex justify-center   items-center rounded-full">
              <img src={html} alt="" className=" w-10" />
            </div>
            <div className=" w-16 h-16 bg-white flex justify-center items-center rounded-full">
              <img src={css} alt="" className=" w-10" />
            </div>
            <div className=" w-16 h-16 bg-white flex justify-center items-center rounded-full">
              <img src={js} alt="" className=" w-10" />
            </div>
            <div className=" w-16 h-16 bg-white flex justify-center   items-center rounded-full">
              <img src={react} alt="" className=" w-10" />
            </div>
            <div className=" w-16 h-16 bg-white flex justify-center   items-center rounded-full">
              <img src={tailwind} alt="" className=" w-10" />
            </div>
            <div className=" w-16 h-16 bg-white flex justify-center   items-center rounded-full">
              <img src={typescript} alt="" className=" w-10" />
            </div>
            <div className=" w-16 h-16 bg-white flex justify-center   items-center rounded-full">
              <img src={next} alt="" className=" w-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
