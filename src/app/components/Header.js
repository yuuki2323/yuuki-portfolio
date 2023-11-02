import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "public/Yuki's Portfolio-logo.png";
import css from "../componet_css/header.module.css";
import { TitleFont } from '../fonts/TitleFont';

const Header = () => {
  const navi = [
    { nav: "Profile", href: "/#profile" },
    { nav: "Skill", href: "/#skill" },
    { nav: "Works", href: "/#work" },
    { nav: "Contact", href: "/#contact" },
  ];

  // {' ${css.shadow-bottom}`}
  return (
    <header >
      <div className="container h-24 flex justify-between items-center  mx-auto ">
        <h1 className=" justify-center items-center h-20">
          <Link href="/">
            <Image src={logo} width="112" alt="logo" className="h-16 min-w-min" />
          </Link>
        </h1>

        <div>
          <nav>
            <ul className="flex gap-6 ">
              {navi.map(({ nav, href }) => {
                return (
                  <li className={`h-20 w-28 `} key={nav}>
                    <Link href={href} className={`scroll-smooth flex justify-center items-center h-20 w-22 relative after:absolute after:content-[''] after:block after:h-0.5 after:bg-black after:w-0 after:bottom-4 after:left-1 
                    after:transition-all after:duration-300 after:ease-out
                    hover:after:w-11/12 `}>
                      <span className={`text-3xl font-medium ${TitleFont.className}`}>{nav}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
