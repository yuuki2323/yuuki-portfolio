import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "public/Yuki's Portfolio-logo.png";
import { TitleFont } from '../fonts/TitleFont';
import { LuAlignJustify } from "react-icons/lu";


const Header = () => {
  const navi = [
    { nav: "Profile", href: "/#profile" },
    { nav: "Skill", href: "/#skill" },
    { nav: "Works", href: "/#work" },
    { nav: "Contact", href: "/#contact" },
  ];

  // {' ${css.shadow-bottom}`}
  return (
    <header className="shadow-bottomShadow">
      <div className="container mx-auto py-4 flex justify-between items-center px-8 md:px-12">
        {/* ロゴ */}
        <h1 className="">
          <Link href="/">
            <Image src={logo}  alt="logo" className=" max-h-16 md:max-h-20 xl:max-h-24 w-auto" />
          </Link>
        </h1>
        {/* pcメニュー */}
        <div className="hidden md:block">
          <nav>
            <ul className="flex md:space-x-6 xl:space-x-10 md:text-3xl xl:text-4xl">
              {navi.map(({ nav, href }) => {
                return (
                  <li key={nav}>
                    <Link href={href} className={`flex items-center h-20 w-22 relative after:absolute after:content-[''] after:block after:h-0.5 after:bg-black after:w-0 after:bottom-4 after:left-1 
                    after:transition-all after:duration-300 after:ease-out
                    hover:after:w-11/12 `}>
                      <span className={` font-medium ${TitleFont.className}`}>{nav}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        {/* スマホメニュー */}
        <div className="md:hidden">
          <LuAlignJustify size={48} />
        </div>


      </div>
    </header>
  );
};

export default Header;
