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
      className="py-0 bg-gray-200 flex flex-col sm:flex-row w-full rounded-lg overflow-hidden mt-10 mb-20"
    >
      <div className=" aspect-[4/3] w-full sm:w-[45%]">
        <img
          src="https://images.unsplash.com/photo-1698993026848-f67c1eb7f989?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Kid Studying"
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className=" relative w-full sm:w-[55%]">
        <FaAngleLeft
          onClick={() => {
            if (sliderRef.current) sliderRef.current.slickPrev();
          }}
          className="text-4xl cursor-pointer text-gray-400 absolute top-1/2 left-0 transform -translate-y-1/2"
        />
        <FaAngleRight
          onClick={() => {
            if (sliderRef.current) sliderRef.current.slickNext();
          }}
          className="text-4xl cursor-pointer text-gray-400 absolute top-1/2 right-0 transform -translate-y-1/2"
        />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
          {quotes.secondaries.map((quote, index) => (
            <div
              key={index}
              onClick={() => {
                if (sliderRef.current) sliderRef.current.slickGoTo(index);
              }}
              className={`w-4 h-2 ${
                curIndex === index ? "bg-gray-600" : "bg-gray-400"
              } rounded-full inline-block cursor-pointer hover:bg-gray-500 transition-all duration-500 ease-in-out`}
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
            <div key={index} className="py-10 px-10">
              <h2 className=" text-red-500 font-fredoka text-6xl font-medium">
                {quotes.primary}
              </h2>
              <p className="text-gray-800 mt-6 font-fredoka text-2xl">
                {quote}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
