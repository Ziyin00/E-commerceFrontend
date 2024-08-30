import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  const FooterLinks = [
    {
      id: 1,
      title: "Home",
      link: "/#",
    },
    {
      id: 2,
      title: "Shop",
      link: "/#shop",
    },
    {
      id: 3,
      title: "About",
      link: "/#about",
    },
    {
      id: 4,
      title: "Blogs",
      link: "/#blog",
    },
  ];
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid grid-cols-3 pt-5 pb-20">
          <div className="px-4 py-8">
            <a
              href="#"
              className="text-2xl font-bold tracking-widest uppercase sm:text-3xl text-primary"
            >
              Zshop
            </a>
            <p className="pt-3 text-gray-600 lg:pr-24 dark:text-white/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              blanditiis quia
            </p>
            <p className="mt-4 text-gray-500">Develoved by Ziyin Ab. </p>
            <a
              href="https://t.me/ziyin07"
              target="_blank"
              className="inline-block px-4 py-2 mt-4 text-sm text-white duration-300 rounded-full bg-primary hover:scale-105"
            >
              Contact me on Telegram
            </a>
          </div>

          <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10">
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold sm:text-left">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 duration-300 dark:text-gray-400 dark:hover:text-white hover:text-black"
                    >
                      {" "}
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold sm:text-left">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 duration-300 dark:text-gray-400 dark:hover:text-white hover:text-black"
                    >
                      {" "}
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 px-4 py-8 sm:col-auto">
              <h1 className="mb-3 text-xl font-bold sm:text-left">Address</h1>
              <div>
                <div className="flex items-center gap-5 my-2">
                  <FaLocationArrow />
                  <p>Addis Ababa, Ethiopia</p>
                </div>
                <div className="flex items-center gap-5 my-5">
                  <FaMobileAlt />
                  <p>+251 900075600</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <a href="https://www.instagram.com/ziyin00">
                  <FaInstagram className="text-3xl duration-300 hover:text-primary" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61565029324456&mibextid=ZbWKwL">
                  <FaFacebook className="text-3xl duration-300 hover:text-primary" />
                </a>
                <a href="https://www.linkedin.com/in/ziyin00">
                  <FaLinkedin className="text-3xl duration-300 hover:text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
