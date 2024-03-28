import {
  FaUserGraduate,
  FaMapLocation,
  FaBook,
  FaSchoolFlag,
} from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import CounterAnime from "../CounterAnime";

export default function ImpactMetrics() {
  const stuff = [
    {
      icon: <FaBook aria-label="Volunteers Icon" />,
      value: "6",
      letter: "+",
      text: "Subjects",
    },
    {
      icon: <FaUserGraduate aria-label="Students Icon" />,
      value: "1.6",
      letter: "K+",
      text: "Students",
    },
    {
      icon: <FaHandsHelping aria-label=" Volunteers Icon" />,
      value: "100+",
      letter: "+",
      text: "Volunteers",
    },
    {
      icon: <FaSchoolFlag aria-label=" Schools Icon" />,
      value: "23+",
      letter: "+",
      text: "Schools",
    },
    {
      icon: <FaMapLocation aria-label="Districts Icon" />,
      value: "10+",
      letter: "+",
      text: "Districts",
    },
  ];
  return (
    <div role="region" className="py-20 max-w-[800px] mx-auto">
      <h2 className="text-center mb-20 font-fredoka text-4xl sm:text-6xl font-medium">
        Our Reach and Impact
      </h2>
      <div className=" flex flex-wrap gap-10 justify-evenly">
        {stuff.map((item, index) => (
          <div
            key={index}
            className="flex cursor-pointer hover:scale-110 transition-transform duration-500 items-center justify-center gap-8"
          >
            <div className="text-6xl text-blue-800">{item.icon}</div>
            <div>
              <div className=" flex items-center">
                <h3 className="font-outfit font-semibold text-5xl">
                  <CounterAnime className={" px-1"}>{item.value}</CounterAnime>
                </h3>
                <span className="text-2xl text-gray-800">{item.letter}</span>
              </div>
              <p className="font-lexend text-red-600 font-semibold">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
