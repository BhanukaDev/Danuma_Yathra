import { FaHeart } from "react-icons/fa";

export default function Whatwedo() {
  return (
    <div role="region" className="flex flex-col md:flex-row gap-10 py-16">
      <div
        className="relative md:order-2  w-[80%] mx-auto flex justify-center items-center"
        style={{
          flex: "2",
        }}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1661779063367-0576efaad7d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image"
          className=" z-10 absolute peer transition-all duration-500 hover:scale-105 translate aspect-[4/3] object-cover shadow-lg hover:shadow-xl hover:shadow-gray-900 shadow-gray-900 rounded-lg hover:rotate-0 rotate-2 -translate-x-1/2 -translate-y-1/2 left-1/2 top-[48%]"
        />
        <img
          src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image"
          className="rounded-lg peer-hover:rotate-6 scale-95 peer-hover:scale-100 -rotate-6 transition-all duration-500  aspect-[4/3] object-cover shadow-lg"
        />
      </div>
      <div
        className="md:order-1 flex flex-col justify-center items-center md:items-start"
        style={{
          flex: "3",
        }}
      >
        <h2 className="text-center md:text-left font-fredoka text-4xl sm:text-6xl font-medium">
          What we do?
        </h2>
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
