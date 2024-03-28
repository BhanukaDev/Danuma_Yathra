import { FaUserGraduate, FaMapLocation, FaBook } from "react-icons/fa6";
import { FaHandsHelping, FaHeart } from "react-icons/fa";

export default function ProgramOverview() {
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
      icon: <FaMapLocation aria-label="Districts Icon" />,
      value: "10+",
      text: "Districts",
    },
  ];
  return (
    <div role="region" className="flex flex-col md:flex-row gap-10 py-16">
      <div
        className="relative md:order-2 w-[80%] mx-auto flex justify-center items-center"
        style={{
          flex: "2",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image"
          className="rounded-lg -rotate-6  aspect-[4/3] object-cover shadow-lg"
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1661779063367-0576efaad7d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image"
          className=" absolute translate aspect-[4/3] object-cover shadow-lg shadow-gray-900 rounded-lg rotate-0 -translate-x-1/2 -translate-y-1/2 left-1/2 top-[48%]"
        />
      </div>
      <div
        className="md:order-1 flex flex-col justify-center items-center md:items-start"
        style={{
          flex: "3",
        }}
      >
        <span className="text-center md:text-left font-fredoka text-6xl font-medium">
          What we do?
        </span>
        <p className="text-center md:text-left mt-6 text-gray-600 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          dignissimos totam nemo. Facere laudantium id quaerat unde. Voluptate
          nam explicabo saepe quod? Animi, pariatur maxime autem commodi
          mollitia fugiat quo!
        </p>
        <button className="mt-6 text-white bg-red-500 hover:bg-red-800 font-medium font-lexend rounded-full text-sm px-4 py-2 text-center flex items-center gap-2">
          <FaHeart className="text-white" />
          I&#39; love to volunteer!
        </button>
      </div>
    </div>
  );
}
