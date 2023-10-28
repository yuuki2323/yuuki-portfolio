import React from "react";
import { TitleFont } from "../fonts/TitleFont";
import Image from "next/image";
import next from "/public/next.png";
import html from "/public/html-5.svg";
import css from "/public/css-3.svg";
import tailwindcss from "/public/tailwindcss-icon.svg";
import js from "/public/javascript.svg";
import react from "/public/react.png";

const Skill = () => {
  return (
    <section className=" py-20">
      <div className="max-w-5xl mx-auto ">
        <h2
          className={`  text-center text-8xl tracking-wider ${TitleFont.className} text-gray-800`}
        >
          Skill
        </h2>
        
        <h3 className="text-2xl font-semibold mt-4 text-gray-800 text-center">―日々、技術向上のために最新情報や知識などを学習しております―</h3>

        <div className="flex justify-center  items-center flex-wrap gap-x-24 gap-y-4  h-104 mt-12">
          <div className="w-64">
            <Image src={html} alt={html} width={200} />
          </div>
          <div className="w-64">
            <Image src={css} alt={css} width={200}/>
          </div >
          <div className="w-64">
            <Image src={tailwindcss} alt={tailwindcss} width={200}/>
          </div>
          <div className="w-64">
            <Image src={js} alt={js} width={200}/>
          </div>
          <div className="w-64">
            <Image src={react} alt={react} width={200}/>
          </div>
          <div className="w-64">
            <Image src={next} alt={next} width={200}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
