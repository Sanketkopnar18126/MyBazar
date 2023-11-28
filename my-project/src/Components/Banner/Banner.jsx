import { useEffect, useState } from "react";
import { Data } from "./BannerData";

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  //  Idhar don not connect the img only its increment the 0,1,2,3 at particular sec 
useEffect(()=>{
  const images =setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % Data.length);
  }, 5000);
  return ()=>clearInterval(images)
},[])

  return (
    <>
      <div className="overflow-x-hidden w-full h-auto mb-5">
        <div className="flex w-[400vw] h-full">
          {Data.map((img, index) => (
            <img
              key={index}
              className={`w-screen h-[500px] object-cover ${
                index === currentIndex ? "" : "hidden"
              }`}
              src={img}
              loading="priority"
              alt=""
            />
          ))}
        </div>
      </div>
    </>
  );
};
