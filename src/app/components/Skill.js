import React from "react";
import { TitleFont } from "../fonts/TitleFont";
import Image from "next/image";
import next from "/public/next.png";
import html from "/public/html-5.svg";
import css from "/public/css-3.svg";
import tailwindcss from "/public/tailwindcss-icon.svg";
import js from "/public/javascript.svg";
import react from "/public/react.png";
import loop from "../componet_css/skill.module.css"

const Skill = () => {
  return (
    <section className="container px-4 py-8 md:py-20 mx-auto" id="skill">
      <div className="  ">
        <h2
          className={`text-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider ${TitleFont.className} text-gray-800`}
        >
          Skill
        </h2>

        <h3 className="text-center md:text-2xl font-semibold mt-4 text-gray-800 mx-auto">
          日々、技術向上のために最新情報や知識などを<br/>学習しております
        </h3>

        <div className="mt-8  md:h-104 md:mt-12 flex overflow-hidden shrink-0 ">
        <ul className={`flex shrink-0 items-center ${loop.loop}`} >
          <li className="w-1/6 md:w-1/3 mx-2 md:mx-12">
            <Image src={html} alt={html} className="w-1/2 md:w-full" />
          </li>
          <li className="w-1/6 md:w-1/3 mx-2 md:mx-12 ">
            <Image src={css} alt={css} className="w-1/2 md:w-full"  />
          </li>
          <li className="w-1/6 md:w-1/3 mx-2 md:mx-12 ">
            <Image src={tailwindcss} alt={tailwindcss} className="w-1/2 md:w-full"  />
          </li>
          <li className="w-1/6 md:w-1/3 mx-2 md:mx-12 ">
            <Image src={js} alt={js} className="w-1/2 md:w-full" />
          </li>
          <li className="w-1/6 md:w-1/3 mx-2 md:mx-12 ">
            <Image src={react} alt={react} className="w-1/2 md:w-full" />
          </li>
          <li className="w-1/6 md:w-1/3 mx-2 md:mx-12">
            <Image src={next} alt={next} className="w-1/2 md:w-full" />
          </li>
          
        </ul>
        <ul className={`flex shrink-0 items-center ${loop.loop}`} >
          <li className="w-1/6 md:w-1/3 mx-2 md:mx-12">
            <Image src={html} alt={html}  className="w-1/2 md:w-full"/>
          </li>
          <li className="w-1/6 md:w-1/3 mx-2 md:mx-12">
            <Image src={css} alt={css}  className="w-1/2 md:w-full" />
          </li>
          <li className="w-1/6 md:w-1/3 mx-2 md:mx-12">
            <Image src={tailwindcss} alt={tailwindcss} className="w-1/2 md:w-full"  />
          </li>
          <li className=" w-1/6 md:w-1/3 mx-2 md:mx-12">
            <Image src={js} alt={js} className="w-1/2 md:w-full" />
          </li>
          <li className="w-1/6 md:w-1/3 mx-2 md:mx-12">
            <Image src={react} alt={react} className="w-1/2 md:w-full" />
          </li>
          <li className="w-1/6 md:w-1/3 mx-2 md:mx-12">
            <Image src={next} alt={next} className="w-1/2 md:w-full" />
          </li>
        </ul>
        

        </div>
      

      </div>
    </section>
  );
};

export default Skill;
