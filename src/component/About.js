import React from "react";
import { BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <div className="gap-2 mt-5 md:m-8 md:mt-10 about-scroll" >
      <h1 className="text-lg md:text-2xl font-semibold mb-3">
        Welcome to TastyHub!
      </h1>
      <ul className="flex flex-col gap-3 md:gap-4 mb-3 text-sm md:text-xl font-medium">
        <li className="">
          <span className="text-green-700">◉</span> A deliciously interactive and  <span className="font-bold">responsive</span> technologically advanced culinary adventure.
        </li>
        <li>
          <span className="text-green-700">◉</span> Utilized  <span className="font-bold">Tailwind CSS</span> - A simple and effective method for creating visually enticing user interfaces.
        </li>
        <li>
          <span className="text-green-700">◉</span> uses the  <span className="font-bold">Swiggy API</span> to provide a large number of dining options.
        </li>
        <li>
          <span className="text-green-700">◉</span> Using  <span className="font-bold">geolocation</span> the app provides instant access to local restaurants based on the user's current location.
        </li>
        <li>
          <span className="text-green-700">◉</span> <span className="font-bold">Custom hooks</span> that enhance code readability, modularity, and maintainability, thereby simplifying development.
        </li>
        <li>
          <span className="text-green-700">◉</span> Improved data management with <span className="font-bold">Redux Toolkit</span> guarantees effective state management and consistent data transfer across the whole app.
        </li>
        <li>
          <span className="text-green-700">◉</span> Makes use of the  <span className="font-bold">OpenWeather API </span>
          to find dining options based on the user's current location or a user-specified location, ensuring a wide variety of options regardless of where the user may be.
        </li>

        <li className="flex">
          <span className="text-green-700">◉&nbsp;</span> 
          <a
            className="flex w-fit items-center gap-2 text-blue-800"
            href="https://github.com/Vivekrathore2002"
            target="_blank"
          >
            <p className="hover:font-bold transition-all">
              Source Code here!
            </p>
            <BsGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
