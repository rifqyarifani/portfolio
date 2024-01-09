import React from "react";
import passion from "/passion.jpg";

export default function about() {
  return (
    <div
      className="px-6 sm:px-36 py-32 text-center sm:text-left bg-slate-50 flex flex-col items-center gap-8 sm:gap-36 sm:flex-row"
      id="about"
    >
      <div className=" flex flex-col gap-4">
        <h1 className=" text-3xl font-bold mb-4">About</h1>
        <h2 className="text-2xl font-semibold text-blue-500">
          A Passionated Front End Developer
        </h2>
        <p className="text-xl text-justify">
          Skilled Front-end Developer with 1 years of experience in designing,
          developing and maintaining front-end web applications. Designed
          front-end code using HTML, CSS JavaScript, TypeScript, React, Next,
          and Tailwind to create a responsive web application. Adept in
          collaborating with cross-functional teams and delivering projects
          on-time and on-budget.
        </p>
      </div>
      <img
        src={passion}
        alt="Passion"
        className=" w-5/6 sm:w-3/6 rounded-3xl passion relative flex justify-center items-center"
      />
    </div>
  );
}
