import { useState } from "react";
import { Data } from "./BannerData";

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % Data.length);
  }, 5000);

  return (
    <>
      <div className="overflow-x-hidden w-full h-auto mb-5">
        <div className="flex w-[400vw] h-full">
          {Data.map((imageUrl, index) => (
            <img
              key={index}
              className={`w-screen h-[500px] object-cover ${
                index === currentIndex ? "" : "hidden"
              }`}
              src={imageUrl}
              loading="priority"
              alt=""
            />
          ))}
        </div>
      </div>
    </>
  );
};
