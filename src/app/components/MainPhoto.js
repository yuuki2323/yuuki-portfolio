import Image from "next/image";
import React from "react";
import css from "../componet_css/mainphoto.module.css";
import DogFoot from "./DogFoot";
import { TitleFont } from '../fonts/TitleFont';

const MainPhoto = () => {
  return (
    <section className="py-10 md:py-16 xl:py-36">
      <div className="container mx-auto  flex justify-center  items-center space-x-12 md:space-x-18 xl:space-x-48 px-4 md:px-8">
      <div>
        <p className={`${css.text} ${TitleFont.className}  text-4xl md:text-8xl xl:text-9xl`}>
          Yuki&apos;s
          <br />
          Portfolio
        </p>
      </div>
      <DogFoot/>
    </div>
    </section>
    
  );
};

export default MainPhoto;
