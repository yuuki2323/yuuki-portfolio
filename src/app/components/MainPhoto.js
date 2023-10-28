import Image from "next/image";
import React from "react";
import css from "../componet_css/mainphoto.module.css";
import DogFoot from "./DogFoot";
import { TitleFont } from '../fonts/TitleFont';

const MainPhoto = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl h-96 mx-auto  my-12  flex gap-20 ">
      <div>
        <p className={`${css.text} ${TitleFont.className}`}>
          Yuki's
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
