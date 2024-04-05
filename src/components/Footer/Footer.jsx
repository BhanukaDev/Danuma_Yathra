import { navLinks } from "../../navLinks";
import Container from "../Container";

export default function Footer() {
  const sitemaps = [
    {
      title: "Help And Support",
      links: [
        { name: "Contact Us", path: "/" },
        { name: "Join Our Team", path: "/" },
        { name: "Ideas & Suggestions", path: "/" },
      ],
    },
    {
      title: "Connect With Us",
      links: [
        { name: "Facebook", path: navLinks.facebook.path },
        { name: "Youtube", path: navLinks.youtube.path },
        {
          name: "LinkedIn",
          path: navLinks.linkedin.path,
        },
        {
          name: "WhatsApp",
          path: navLinks.whatsapp.path,
        },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/" },
        { name: "Terms of Service", path: "/" },
      ],
    },
  ];

  return (
    <footer className="mt-auto  bg-white">
      <Container>
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 md:grid-cols-4 lg:py-8">
            {/* here */}
            {sitemaps.map((sitemap, sindex) => (
              <div key={sindex}>
                <h2 className="mb-6 font-lexend text-sm font-semibold uppercase text-gray-900">
                  {sitemap.title}
                </h2>
                <ul className="font-medium text-gray-500 ">
                  {sitemap.links.map((link, lindex) => (
                    <li key={lindex} className="mb-4">
                      <a
                        href={link.path}
                        target="_blank"
                        className=" hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex justify-center bg-gray-100 px-4 py-6">
            <span className="text-center  text-sm text-gray-500">
              &#169; {new Date().getFullYear()}{" "}
              <a href="/" className="font-serifSinhala">
                දැනුම යාත්‍රා
              </a>
              &#8482;. All Rights Reserved.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
