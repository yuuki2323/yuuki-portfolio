import Image from "next/image";
import styles from "../componet_css/DogFoot.module.css"; // Import your CSS file
import src from "public/DogFoot.png";

const DogFoot = () => {
  return (
    <div className="flex h-90 gap-6 items-end">
      <div className="h-16 w-16 mb-4">
        <Image alt="foot" src={src} className={`${styles.fadeOut1} ` } />
      </div>

      <div className="h-16 w-16 mb-44">
        <Image alt="foot" src={src} className={` ${styles.fadeOut2} `} />
      </div>

      <div className="h-16 w-16 mb-16">
        <Image alt="foot" src={src} className={`${styles.fadeOut3} `} />
      </div>
      <div className="h-16 w-16 mb-56">
        <Image alt="foot" src={src} className={`${styles.fadeOut4} `} />
      </div>
    </div>
  );
};

export default DogFoot;
