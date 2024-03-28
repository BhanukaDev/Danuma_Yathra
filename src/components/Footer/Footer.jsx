export default function Footer() {
  const sitemaps = [
    {
      title: "Help And Support",
      links: [
        { name: "Contact Us", path: "#" },
        { name: "Join Our Team", path: "#" },
        { name: "Ideas & Suggestions", path: "#" },
      ],
    },
    {
      title: "Connect With Us",
      links: [
        { name: "Facebook", path: "https://www.facebook.com/danumayaathra" },
        { name: "Youtube", path: "https://www.youtube.com/@danumayaathra2197" },
        {
          name: "LinkedIn",
          path: "https://www.linkedin.com/company/danuma-yathra/",
        },
        {
          name: "WhatsApp",
          path: "https://chat.whatsapp.com/DKjITZv0OAPEQ99jx3jLbU",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "#" },
        { name: "Terms of Service", path: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-white  mt-auto">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {/* here */}
          {sitemaps.map((sitemap, sindex) => (
            <div key={sindex}>
              <h2 className="mb-6 text-sm font-semibold font-lexend text-gray-900 uppercase">
                {sitemap.title}
              </h2>
              <ul className="text-gray-500 font-medium ">
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
        <div className="px-4 py-6 bg-gray-100 flex justify-center">
          <span className="text-sm  text-gray-500 text-center">
            &#169; {new Date().getFullYear()}{" "}
            <a href="/" className="font-serifSinhala">
              දැනුම යාත්‍රා
            </a>
            &#8482;. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
