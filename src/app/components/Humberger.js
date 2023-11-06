"use client"
import React, { useState } from "react";
import css from "../componet_css/humberger.module.css"
import Link from "next/link";
const Humberger = () => {
  const [open, setOpen] = useState(false);
  const hundleClick = () => {
    setOpen(prev => !prev)
  }
  return (
    <div className="md:hidden">
      <button type="button" className={css.btn} onClick={hundleClick}>
        <span className={open ? `${css.btn_line} ${css.open}`: css.btn_line }></span>
      </button>
      <nav>
        <ul className={open ?`${css.menu} ${css.open}` :"hidden"}>
          
          <li className={css.menu_list}><Link href="/#profile" className="w-full h-full justify-center flex items-center" onClick={hundleClick}>Profile</Link></li>
          <li className={css.menu_list}><Link href="/#skill" className="w-full h-full justify-center flex items-center" onClick={hundleClick}>Skill</Link></li>
          <li className={css.menu_list}><Link href="/#work" className="w-full h-full justify-center flex items-center" onClick={hundleClick}>Works</Link></li>
          <li className={css.menu_list}><Link href="/#contact" className="w-full h-full justify-center flex items-center" onClick={hundleClick}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Humberger;
