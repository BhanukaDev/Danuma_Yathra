import Slider from "react-slick";
import Banner1 from "./Banner1";
import { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";

export default function HomeCarousel() {
  const sliderRef = useRef(null);
  const [curIndex, setCurIndex] = useState(0);

  const banners = [
    <Banner1 key={1} />,
    <Banner2 key={2} />,
    <Banner3 key={3} />,
  ];
  return (
    <div className=" relative">
      <FaAngleLeft
        onClick={() => {
          if (sliderRef.current) sliderRef.current.slickPrev();
        }}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer text-4xl text-gray-500"
      />
      <FaAngleRight
        onClick={() => {
          if (sliderRef.current) sliderRef.current.slickNext();
        }}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer text-4xl text-gray-500"
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
        {banners}
      </Slider>
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform gap-1">
        {banners.map((banner, index) => (
          <div
            key={index}
            onClick={() => {
              if (sliderRef.current) sliderRef.current.slickGoTo(index);
            }}
            className={`h-1 w-4 ${
              curIndex === index ? "bg-gray-600" : "bg-gray-400"
            } inline-block cursor-pointer rounded-full transition-all duration-500 ease-in-out hover:bg-gray-500`}
          ></div>
        ))}
      </div>
    </div>
  );
}
