import { FaHeart } from "react-icons/fa6";

export default function Banner3() {
  return (
    <div className="flex h-[85vh] w-full flex-col bg-pink-900 md:aspect-[17/8] md:h-auto md:flex-row ">
      <img
        src="https://plus.unsplash.com/premium_photo-1661331705504-7a513e8b3266?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Main Carousel Image 1"
        aria-label="Main Carousel Image 1"
        className="h-[65%] object-cover object-center md:order-2 md:h-full md:w-[60%]"
      />
      <div className="relative flex grow flex-col items-center justify-center gap-4 bg-pink-900 px-4 pb-4 md:bottom-0 md:order-1 md:w-[40%] md:items-end md:pb-0">
        <div className=" absolute bottom-[100%] h-[40px] w-full bg-gradient-to-t from-pink-900 to-transparent md:bottom-0 md:left-[100%] md:h-full md:w-[20%] md:bg-gradient-to-r"></div>
        <p className="text-center font-outfit text-xl font-semibold text-white md:text-right lg:text-2xl">
          Help Danuma Yaathra provide essential education to underprivileged
          children. Your donation, whether money or stationery supplies, makes a
          big difference. Join us in creating brighter futures for those in
          need. Every contribution counts!
        </p>
        <button className="flex items-center gap-2 rounded-full bg-green-600 px-6 py-2 text-center font-lexend text-lg font-medium text-white hover:bg-green-800 md:mt-6">
          <FaHeart className="text-white" />
          Donate
        </button>
      </div>
    </div>
  );
}
