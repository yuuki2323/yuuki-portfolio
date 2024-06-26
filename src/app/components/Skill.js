import React from "react";
import { TitleFont } from "../fonts/TitleFont";
import Image from "next/image";
import next from "/public/nextjs-13.svg";
import html from "/public/html-5.svg";
import css from "/public/css-3.svg";
import tailwindcss from "/public/tailwindcss-icon.svg";
import js from "/public/javascript.svg";
import react from "/public/react-2.svg";
import php from "/public/php.svg";
import java from "/public/java.svg";
import laravel from "/public/laravel.svg";
import mysql from "/public/mysql.svg";
import FE from "/public/FE.JPG";
import BE from "/public/BE.png";
import loop from "../componet_css/skill.module.css";

const Skill = () => {
  return (
    <section className="container px-4 py-8  mx-auto" id="skill">
      <div className="  ">
        <h2
          className={`text-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider ${TitleFont.className} text-gray-800`}
        >
          Skill
        </h2>

        <h3 className="text-center md:text-2xl font-semibold mt-4 text-gray-800 mx-auto">
          日々、技術向上のために最新情報や知識などを
          <br />
          学習しております
        </h3>

        <div className="flex mt-12">
          <div className="w-1/2">
            <p className="text-center">フロントエンド</p>
            <Image src={FE} alt={FE} className=" block mx-auto" />
          </div>
          <div className="w-1/2">
            <p className="text-center">バックエンド</p>
            <Image src={BE} alt={BE} className=" block mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
