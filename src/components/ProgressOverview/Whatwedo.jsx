import { FaHeart } from "react-icons/fa";

export default function Whatwedo() {
  return (
    <div role="region" className="flex flex-col gap-10 py-16 md:flex-row">
      <div
        className="relative mx-auto flex  w-[80%] cursor-pointer items-center justify-center md:order-2"
        style={{
          flex: "2",
        }}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1661779063367-0576efaad7d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image"
          className=" translate peer absolute left-1/2 top-[48%] z-10 aspect-[4/3] -translate-x-1/2 -translate-y-1/2 rotate-2 rounded-lg object-cover shadow-lg shadow-gray-900 transition-all duration-500 hover:rotate-0 hover:scale-105 hover:shadow-xl hover:shadow-gray-900"
        />
        <img
          src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image"
          className="aspect-[4/3] -rotate-6 scale-95 rounded-lg object-cover shadow-lg transition-all  duration-500 peer-hover:rotate-6 peer-hover:scale-100"
        />
      </div>
      <div
        className="flex flex-col items-center justify-center md:order-1 md:items-start"
        style={{
          flex: "3",
        }}
      >
        <h2 className="text-center font-fredoka text-4xl font-medium sm:text-6xl md:text-left">
          What we do?
        </h2>
        <p className="mt-6 text-center font-light text-gray-600 md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          dignissimos totam nemo. Facere laudantium id quaerat unde. Voluptate
          nam explicabo saepe quod? Animi, pariatur maxime autem commodi
          mollitia fugiat quo!
        </p>
        <button className="mt-6 flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-center font-lexend text-sm font-medium text-white hover:bg-red-800">
          <FaHeart className="text-white" />
          I&#39;d love to volunteer!
        </button>
      </div>
    </div>
  );
}
