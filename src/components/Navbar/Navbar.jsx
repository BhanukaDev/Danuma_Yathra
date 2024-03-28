import NavLogo from "../Logo/NavLogo";
import { LuMenu } from "react-icons/lu";
import { FaHeart } from "react-icons/fa6";
import Container from "../Container";

export default function Navbar() {
  const routes = [
    {
      name: "Who we are",
      path: "/who-we-are",
    },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
    { name: "Tools", path: "/tools" },
  ];

  return (
    <div
      className={`w-full z-20 top-0 sticky transition-all duration-500 ease-in-out bg-white/90`}
    >
      <Container>
        <nav className="w-full border-b border-gray-200">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 sm:px-0">
            <div className=" flex gap-4">
              <button className="block md:hidden">
                <LuMenu className="text-2xl text-gray-900" />
              </button>
              <NavLogo />
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto ">
              <ul className="flex gap-4 p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:mt-0 md:border-0 ">
                {routes.map((route) => (
                  <li key={route.path}>
                    <a
                      href="#"
                      className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-green-700 md:p-0"
                    >
                      {route.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex">
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 font-medium font-lexend rounded-full text-sm px-4 py-2 text-center flex items-center gap-2"
              >
                <FaHeart className="text-white" />
                Donate
              </button>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
}
