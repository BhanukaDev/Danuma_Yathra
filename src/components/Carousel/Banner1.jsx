import { FaHeart } from "react-icons/fa6";

export default function Banner1() {
  return (
    <div className="w-full h-[85vh] md:h-auto md:aspect-[17/8] bg-black flex flex-col md:flex-row ">
      <img
        src="https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Main Carousel Image 1"
        aria-label="Main Carousel Image 1"
        className="object-cover object-center h-[65%] md:h-full md:w-[60%]"
      />
      <div className="flex relative bottom-8 md:bottom-0 grow flex-col md:w-[40%] bg-black justify-center items-center md:items-start gap-4 px-4">
        <div className=" absolute md:h-full w-full h-[40px] md:w-[20%] bottom-[100%] md:bottom-0 md:right-[100%] md:bg-gradient-to-l bg-gradient-to-t from-black to-transparent"></div>
        <p className="text-white text-lg text-center md:text-left font-fredoka font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          dignissimos totam nemo. Facere laudantium id quaerat unde. Voluptate
          nam explicabo saepe quod? Animi, pariatur maxime autem commodi
          mollitia fugiat quo! Lorem ipsum dolor sit amet consectetur maxime
          autem commodi mollitia fugiat quo!
        </p>
        <button className="md:mt-6 text-white bg-red-500 hover:bg-red-800 font-medium font-lexend rounded-full text-sm px-4 py-2 text-center flex items-center gap-2">
          <FaHeart className="text-white" />
          I&#39;d love to volunteer!
        </button>
      </div>
    </div>
  );
}
