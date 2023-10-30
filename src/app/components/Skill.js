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
    <section className=" py-20">
      <div className="max-w-5xl mx-auto ">
        <h2
          className={`  text-center text-8xl tracking-wider ${TitleFont.className} text-gray-800`}
        >
          Skill
        </h2>

        <h3 className="text-2xl font-semibold mt-4 text-gray-800 text-center">
          ―日々、技術向上のために最新情報や知識などを学習しております―
        </h3>

        <div className=" h-104 mt-12 flex overflow-hidden shrink-0 max-w-5xl">
        <ul className={`flex shrink-0 w-max items-center ${loop.loop}`} >
          <li className="w-1/3 mx-12">
            <Image src={html} alt={html} width="100%" />
          </li>
          <li className="w-1/3 mx-12">
            <Image src={css} alt={css} width="100%"  />
          </li>
          <li className="w-1/3 mx-12">
            <Image src={tailwindcss} alt={tailwindcss} width="100%"  />
          </li>
          <li className="w-1/3 mx-12">
            <Image src={js} alt={js} width="100%" />
          </li>
          <li className=" w-1/3 mx-12">
            <Image src={react} alt={react} width="100%" />
          </li>
          <li className="w-1/3 mx-12">
            <Image src={next} alt={next} width="100%" />
          </li>
        </ul>
        <ul className={`flex shrink-0 w-max items-center ${loop.loop}`} >
          <li className="w-1/3 mx-12">
            <Image src={html} alt={html} width="100%" />
          </li>
          <li className="w-1/3 mx-12">
            <Image src={css} alt={css} width="100%"  />
          </li>
          <li className="w-1/3 mx-12">
            <Image src={tailwindcss} alt={tailwindcss} width="100%"  />
          </li>
          <li className="w-1/3 mx-12">
            <Image src={js} alt={js} width="100%" />
          </li>
          <li className=" w-1/3 mx-12">
            <Image src={react} alt={react} width="100%" />
          </li>
          <li className="w-1/3 mx-12">
            <Image src={next} alt={next} width="100%" />
          </li>
        </ul>
        </div>
      

      </div>
    </section>
  );
};

export default Skill;
