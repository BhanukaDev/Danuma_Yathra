import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useRef, useState } from "react";
export default function QouteSlider() {
  const quotes = {
    primary: "Educate a Child",
    secondaries: [
      "They Will Change The World",
      "They Will Empower the Dreams of Tomorrow",
      "They Will Shape the Future",
      "They WIll Ignite the Flame of Knowledge",
    ],
  };

  const [curIndex, setCurIndex] = useState(0);

  const sliderRef = useRef(null);
  return (
    <div
      role="region"
      className="mb-20 mt-10 flex w-full flex-col overflow-hidden rounded-lg bg-gray-200 py-0 sm:flex-row"
    >
      <div className=" aspect-[4/3] w-full sm:w-[45%]">
        <img
          src="https://images.unsplash.com/photo-1698993026848-f67c1eb7f989?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Kid Studying"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className=" relative w-full sm:w-[55%]">
        <FaAngleLeft
          onClick={() => {
            if (sliderRef.current) sliderRef.current.slickPrev();
          }}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer text-4xl text-gray-400"
        />
        <FaAngleRight
          onClick={() => {
            if (sliderRef.current) sliderRef.current.slickNext();
          }}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer text-4xl text-gray-400"
        />
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform gap-1">
          {quotes.secondaries.map((quote, index) => (
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
        <Slider
          infinite={true}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          autoplay
          autoplaySpeed={2000}
          draggable={false}
          swipeToSlide={false}
          ref={sliderRef}
          afterChange={(index) => setCurIndex(index)}
        >
          {quotes.secondaries.map((quote, index) => (
            <div key={index} className="px-10 py-10">
              <h2 className=" font-fredoka text-4xl font-medium text-red-500 md:text-6xl">
                {quotes.primary}
              </h2>
              <p className="mt-6 font-fredoka text-2xl text-gray-800 md:text-3xl">
                {quote}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
