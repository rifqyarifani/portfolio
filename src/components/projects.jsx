import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import bookstores from "/src/assets/bookstores.png";
import gamehub from "/src/assets/game-hub.png";

export default function projects() {
  return (
    <div className="px-6 sm:px-36 py-32 text-center sm:text-left" id="projects">
      <h1 className=" text-3xl font-bold mb-16">Portfolio</h1>
      <div className=" flex flex-col items-center sm:flex-row px-10 gap-5 bg-slate-50 p-4 rounded-2xl shadow-slate-400 shadow-sm mb-20">
        <img
          src={bookstores}
          alt="Book Stores"
          className="animate w-6/6 sm:w-4/6 rounded-2xl shadow-sm shadow-slate-800"
        />
        <div className=" flex flex-col items-center gap-4 sm:gap-10 z-10">
          <h1 className=" text-2xl font-bold">Book Stores</h1>
          <p className=" text-center max-w-md text-xl">
            A Website that provides e-book subscription services.
          </p>
          <div className=" flex gap-4">
            <a
              href="https://github.com/rifqyarifani/book-stores"
              className=" text-2xl hover:text-blue-500"
              target="_blank"
            >
              Code <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://book-stores-tan.vercel.app/"
              className=" text-2xl hover:text-blue-500"
              target="_blank"
            >
              Live Demo <FontAwesomeIcon icon={faLaptop} />
            </a>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center sm:flex-row-reverse gap-5 bg-slate-50 p-4 rounded-2xl shadow-slate-400 shadow-sm">
        <img
          src={gamehub}
          alt="Book Stores"
          className="animate-reverse w-6/6 sm:w-4/6 rounded-2xl shadow-sm shadow-slate-800"
        />
        <div className=" flex flex-col items-center gap-4 sm:gap-10 z-10">
          <h1 className=" text-2xl font-bold">Game-Hub</h1>
          <p className=" text-center max-w-md text-xl">
            A website that provides list of games
          </p>
          <div className=" flex gap-4">
            <a
              href="https://github.com/rifqyarifani/game-hub"
              className=" text-2xl hover:text-blue-500"
              target="_blank"
            >
              Code <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://game-hub-one-teal.vercel.app/"
              className=" text-2xl hover:text-blue-500"
              target="_blank"
            >
              Live Demo <FontAwesomeIcon icon={faLaptop} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
