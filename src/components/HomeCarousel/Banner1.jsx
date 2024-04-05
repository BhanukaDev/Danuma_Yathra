import { FaHeart } from "react-icons/fa6";

export default function Banner1() {
  return (
    <div className="flex h-[85vh] w-full flex-col bg-black md:aspect-[17/8] md:h-auto md:flex-row ">
      <img
        src="https://plus.unsplash.com/premium_photo-1682088221071-ddd6d6de4191?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Main Carousel Image 1"
        aria-label="Main Carousel Image 1"
        className="h-[65%] object-cover object-center md:h-full md:w-[60%]"
      />
      <div className="relative bottom-8 flex grow flex-col items-center justify-center gap-4 bg-black px-4 md:bottom-0 md:w-[40%] md:items-start">
        <div className=" absolute bottom-[100%] h-[40px] w-full bg-gradient-to-t from-black to-transparent md:bottom-0 md:right-[100%] md:h-full md:w-[20%] md:bg-gradient-to-l"></div>
        <p className="text-center font-fredoka text-xl font-medium text-white md:text-left">
          100+ volunteers are ensuring that every child gets the education they
          deserve. Join us in our mission to make the world a better place.
        </p>
        <button className="flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-center font-lexend text-sm font-medium text-white hover:bg-red-800 md:mt-6">
          <FaHeart className="text-white" />
          I&#39;d love to volunteer!
        </button>
      </div>
    </div>
  );
}
