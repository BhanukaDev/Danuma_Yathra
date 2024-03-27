import { FaUserGraduate, FaMapLocation, FaBook } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
export default function ProgramOverview() {
  const stuff = [
    {
      icon: <FaUserGraduate aria-label="Students Icon" />,
      value: "1000+",
      text: "Students",
    },
    {
      icon: <FaMapLocation aria-label="Districts Icon" />,
      value: "10+",
      text: "Districts",
    },
    {
      icon: <FaHandsHelping aria-label=" Volunteers Icon" />,
      value: "100+",
      text: "Volunteers",
    },
    {
      icon: <FaBook aria-label="Volunteers Icon" />,
      value: "6",
      text: "Subjects",
    },
  ];
  return (
    <div
      role="region"
      className="flex flex-col items-center justify-center gap-4 p-4 bg-[#6255A5] py-14"
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4  w-full">
        {stuff.map((item, index) => (
          <div
            key={index}
            className=" inline-flex gap-2 justify-center items-center text-white"
          >
            <span role="img" className=" text-5xl flex text-amber-300">
              {item.icon}
            </span>
            <div className="flex flex-col">
              <span className=" text-3xl font-poppins">{item.value}</span>
              <span className=" text-base">{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
