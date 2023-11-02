import Image from "next/image";
import styles from "../componet_css/DogFoot.module.css"; // Import your CSS file
import src from "public/DogFoot.png";

const DogFoot = () => {
  return (
    <div className="flex gap-6 md:gap-10  items-end">
      <div className=" w-6 md:w-10 xl:w-16 ">
        <Image alt="foot" src={src} className={`${styles.fadeOut1} ` } />
      </div>

      <div className="w-6 md:w-10 xl:w-16 mb-24 md:mb-28 xl:mb-48">
        <Image alt="foot" src={src} className={` ${styles.fadeOut2} `} />
      </div>

      <div className="w-6 md:w-10 xl:w-16 md:ml-8 xl:ml-16 mb-8 md:mb-8 xl:mb-16">
        <Image alt="foot" src={src} className={`${styles.fadeOut3} `} />
      </div>
      <div className="w-6 md:w-10 xl:w-16 mb-28 md:mb-36 xl:mb-60">
        <Image alt="foot" src={src} className={`${styles.fadeOut4} `} />
      </div>
    </div>
  );
};

export default DogFoot;