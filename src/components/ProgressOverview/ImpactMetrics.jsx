import {
  FaUserGraduate,
  FaMapLocation,
  FaBook,
  FaSchoolFlag,
} from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";

export default function ImpactMetrics() {
  const stuff = [
    {
      icon: <FaBook aria-label="Volunteers Icon" />,
      value: "6",
      text: "Subjects",
    },
    {
      icon: <FaUserGraduate aria-label="Students Icon" />,
      value: "1000+",
      text: "Students",
    },
    {
      icon: <FaHandsHelping aria-label=" Volunteers Icon" />,
      value: "100+",
      text: "Volunteers",
    },
    {
      icon: <FaSchoolFlag aria-label=" Schools Icon" />,
      value: "100+",
      text: "Schools",
    },
    {
      icon: <FaMapLocation aria-label="Districts Icon" />,
      value: "10+",
      text: "Districts",
    },
  ];
  return (
    <div role="region" className="py-20 max-w-[900px] mx-auto">
      <h2 className="text-center mb-20 font-fredoka text-4xl sm:text-6xl font-medium">
        Impact Metrics
      </h2>
      <div className=" flex flex-wrap gap-10 justify-evenly">
        {stuff.map((item, index) => (
          <div key={index} className="flex items-center justify-center gap-8">
            <div className="text-6xl text-blue-800">{item.icon}</div>
            <div>
              <h3 className="font-outfit font-semibold text-5xl">
                {item.value}
              </h3>
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
