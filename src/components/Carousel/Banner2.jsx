import {
  FaFacebookF,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import logo from "/danumalogo.png";
export default function Banner2() {
  const socialMedia = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/danumayaathra",
      icon: <FaFacebookF />,
      color: " bg-blue-800",
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/@danumayaathra2197",
      icon: <FaYoutube />,
      color: " bg-red-800",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/danuma-yathra/",

      icon: <FaLinkedin />,
      color: " bg-blue-600",
    },
    {
      name: "WhatsApp",
      url: "https://chat.whatsapp.com/DKjITZv0OAPEQ99jx3jLbU",
      icon: <FaWhatsapp />,
      color: " bg-green-800",
    },
  ];
  return (
    <div className="flex h-[85vh] w-full flex-col-reverse bg-blue-500 md:aspect-[17/8] md:h-auto md:flex-row ">
      <img
        src="https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Main Carousel Image 1"
        aria-label="Main Carousel Image 1"
        className="h-[65%] object-cover object-center md:h-full md:w-[60%]"
      />

      <div className="relative flex grow flex-col items-center justify-evenly bg-gray-900 px-4 py-4 md:w-[40%] md:justify-center md:gap-4">
        <div className=" absolute top-[100%] h-[40px] w-full bg-gradient-to-b from-gray-900 to-transparent md:bottom-0 md:right-[100%] md:top-0 md:h-full md:w-[20%] md:bg-gradient-to-l"></div>
        <img
          src={logo}
          alt="Danuma Yaathra Logo"
          className=" h-20 w-20 rounded-full border-2 border-green-800 bg-white object-contain md:h-52 md:w-52"
        />
        <h2 className="text-center font-fredoka text-2xl font-medium text-gray-200">
          Connect with us
        </h2>
        <div className="flex flex-wrap justify-evenly gap-4">
          {socialMedia.map((media, index) => (
            <a
              key={index}
              href={media.url}
              target="_blank"
              rel="noreferrer"
              className={`text-white ${media.color} flex items-center gap-2 rounded-full px-2 py-1 text-center font-lexend text-sm font-medium`}
            >
              {media.icon}
              {media.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
