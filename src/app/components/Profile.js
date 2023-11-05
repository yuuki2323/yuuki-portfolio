import React from "react";
import { TitleFont } from "../fonts/TitleFont";
import Image from "next/image";
import takoyaki from "/public/takoyaki.png";

const Profile = () => {
  return (
    <section className="bg-blue-100 px-4 py-8 xl:py-20" id="profile">
      <div className="container mx-auto ">
        
        <h2
          className={`  text-center text-4xl xl:text-8xl tracking-wider ${TitleFont.className} text-gray-800`}
        >
          Profile
        </h2>

        <div className="mt-4 md:flex md:justify-center md:gap-12  md:h-104 md:mt-10">
          <div className="hidden md:block">
            <Image src={takoyaki} alt="takoyaki" width={400} />
            <p className="text-3xl font-semibold mt-4 text-gray-800 text-center">
              大阪出身
            </p>
          </div>

          <div className="mx-auto">
            <div className="flex items-center">
              <div className="md:hidden w-8">
              <Image src={takoyaki} alt="takoyaki" />
              <p>大阪出身</p>
              </div>

            
            <h3 className=" text-base xl:text-2xl font-semibold  text-gray-800">クライアント様が毎日見たくなるような綺麗で見やすいホームページ製作を目指しています。</h3>
            </div>
           
            
            
            <p className="text-sm md:text-xl font-nomal mt-4 md:mt-8 text-gray-800">ポートフォリオをご覧いただきありがとうございます&#33; Webコーダーの水内&nbsp;裕希と申します。大阪在住の24歳です。<br/><br/>実際にコードが動いた時や、壁にぶつかっても乗り越えられた時に、喜びと楽しさを感じたことからエンジニアになりたいと考えました。<br/><br/>現在はコーダーとして活動しています。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
