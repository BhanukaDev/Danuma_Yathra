import Slider from "react-slick";
import Banner1 from "./Banner1";
import { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function HomeCarousel() {
  const imgs = [
    {
      alt: "Main Carousel Image 1",
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      alt: "Main Carousel Image 2",
      src: "https://plus.unsplash.com/premium_photo-1680807868966-90a84c68c944?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      alt: "Main Carousel Image 3",
      src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      alt: "Main Carousel Image 3",
      src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
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
        {/* {imgs.map((img, index) => (
          <div
            key={index}
            role="region"
            className="aspect-[17/8] bg-black  outline-none"
          >
            <img
              src={img.src}
              alt={img.alt}
              aria-label={img.alt}
              className="object-cover object-center h-full w-full"
            />
          </div>
        ))} */}
        <Banner1 />
        <Banner1 />
        <Banner1 />
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
