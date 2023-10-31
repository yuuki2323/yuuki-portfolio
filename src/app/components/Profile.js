import React from "react";
import { TitleFont } from "../fonts/TitleFont";
import Image from "next/image";
import takoyaki from "/public/takoyaki.png";

const Profile = () => {
  return (
    <section className="bg-blue-100 py-20" id="profile">
      <div className="max-w-5xl mx-auto ">
        
        <h2
          className={`  text-center text-8xl tracking-wider ${TitleFont.className} text-gray-800`}
        >
          Profile
        </h2>

        <div className="flex justify-center gap-12  h-104 mt-10">
          <div >
            <Image src={takoyaki} alt="takoyaki" width={400} />
            <p className="text-3xl font-semibold mt-4 text-gray-800 text-center">
              大阪出身
            </p>
          </div>

          <div >
            <h3 className="text-2xl font-semibold  text-gray-800">―クライアント様が毎日見たくなるような<br/> &emsp;綺麗で見やすいホームページ製作を目指しています。―</h3>
            <p className="text-xl font-nomal mt-8 text-gray-800">ポートフォリオをご覧いただきありがとうございます！Webコーダーの水内&nbsp;裕希と申します。大阪在住の24歳です。<br/><br/>実際にコードが動いた時や、壁にぶつかっても乗り越えられた時に、喜びと楽しさを感じたことからエンジニアになりたいと考えました。<br/><br/>現在はコーダーとして活動しています。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
