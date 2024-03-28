import Slider from "react-slick";
import Banner1 from "./Banner1";
import { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";

export default function HomeCarousel() {
  const sliderRef = useRef(null);
  const [curIndex, setCurIndex] = useState(0);
  return (
    <div className=" relative">
      <FaAngleLeft
        onClick={() => {
          if (sliderRef.current) sliderRef.current.slickPrev();
        }}
        className="text-4xl z-10 cursor-pointer text-gray-500 absolute top-1/2 left-0 transform -translate-y-1/2"
      />
      <FaAngleRight
        onClick={() => {
          if (sliderRef.current) sliderRef.current.slickNext();
        }}
        className="text-4xl z-10 cursor-pointer text-gray-500 absolute top-1/2 right-0 transform -translate-y-1/2"
      />
      <Slider
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        // autoplay
        autoplaySpeed={3000}
        speed={1000}
        lazyLoad="ondemand"
        arrows={false}
        dots={false}
        ref={sliderRef}
        afterChange={(index) => setCurIndex(index)}
      >
        <Banner1 />
        <Banner2 />
        <Banner3 />
      </Slider>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
        {["", "", ""].map((quote, index) => (
          <div
            key={index}
            onClick={() => {
              if (sliderRef.current) sliderRef.current.slickGoTo(index);
            }}
            className={`w-4 h-1 ${
              curIndex === index ? "bg-gray-600" : "bg-gray-400"
            } rounded-full inline-block cursor-pointer hover:bg-gray-500 transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}
