"use client";
import { useEffect, useState } from "react";
import { AiOutlineUp } from "react-icons/ai";
import css from "../componet_css/topbutton.module.css";

const ReturnTopButton = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollWindow);
    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);

  const scrollWindow = () => {
    const top = 100; //ボタンを表示させたい位置
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  const normalStyle = {
    opacity: 0,
    transition: "0.5s",
    pointerEvents: "none",
  };
  const activeStyle = {
    opacity: 1,
    transition: "0.5s",
  };
  const style = isButtonActive ? activeStyle : normalStyle;

  return (
    <button onClick={returnTop} className={css.button} style={style}>
      <AiOutlineUp size={32} className="m-1"/>
    </button>
  );
};

export default ReturnTopButton;
