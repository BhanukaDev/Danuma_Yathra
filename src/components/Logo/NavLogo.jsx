import { Link } from "react-router-dom";
import myImage from "/danumalogo.png";
import { navLinks } from "../../navLinks";

export default function NavLogo() {
  return (
    <Link
      to={navLinks.home.path}
      className=" cursor-pointer inline-flex items-center gap-3 font-bold text-black"
    >
      <img
        src={myImage}
        alt="Danuma Yathra Logo"
        className=" w-8 h-8 object-contain bg-white rounded-full border-2 border-green-800"
      />
      <span className=" hidden sm:block font-serifSinhala text-2xl">
        දැනුම යාත්‍රා
      </span>
    </Link>
  );
}
