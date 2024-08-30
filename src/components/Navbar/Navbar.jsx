import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Navbar = ({ handleOrderPopup }) => {
  const MenuLinks = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Shop",
      link: "/#shop",
    },
    {
      id: 3,
      name: "About",
      link: "/#about",
    },
    {
      id: 4,
      name: "Blogs",
      link: "/#blog",
    },
  ];
  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      links: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      links: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      links: "/#",
    },
  ];
  return (
    <div className="relative z-40 duration-200 bg-white dark:bg-gray-900 dark:text-white">
      <div className="py-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="px-5 text-2xl font-bold tracking-widest uppercase sm:text-3xl text-primary"
            >
              Zshop
            </a>
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4 ">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block font-semibold text-gray-500 duration-200 hover:text-black dark:hover:text-white"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                <li className="relative cursor-pointer group">
                  <a
                    href=""
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2 "
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="duration-300 group-hover:rotate-180" />
                    </span>
                  </a>

                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a
                            className="inline-block w-full p-2 font-semibold text-gray-500 duration-200 rounded-sm hover:text-black dark:hover:text-white hover:bg-primary/20"
                            href={data.links}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="relative hidden group sm:block">
              <input type="text" placeholder="Search" className=" search-bar" />
              <IoMdSearch className="absolute text-xl text-gray-600 duration-200 -translate-y-1/2 cursor-pointer dark:text-gray-400 top-1/2 right-3 group-hover:text-primary" />
            </div>
            <button className="relative p-3" onClick={handleOrderPopup}>
              <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400 " />
              <div className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-white bg-red-500 rounded-full text-x4">
                4
              </div>
            </button>

            <DarkMode />

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
