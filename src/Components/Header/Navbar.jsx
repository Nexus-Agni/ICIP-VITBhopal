import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import VitLogo from "../../assets/vitLogo.png";
import { NavLink } from "react-router-dom";
import Broucher from "../../../public/Brochure.pdf";

const menuItems = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full bg-[#2b3359] text-white sticky top-0 shadow-lg z-40 ${
        isScrolled
          ? "bg-opacity-40 bg-[#2b3359] backdrop-blur-md shadow-sm transition-all ease-in-out"
          : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <a href="https://vitbhopal.ac.in" target="next">
              <img src={VitLogo} alt="VIT Logo" className="h-[4rem]" />
            </a>
          </span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:text-[#f2b705]
                  ${
                    isActive
                      ? "font-semibold text-[#f2b705]"
                      : "font-semibold text-white"
                  }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <a href={Broucher} target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#f2b705] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-all ease-in-out duration-300 hover:text-black"
            >
              Download Brochure
            </button>
          </a>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-[#2b3359] shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2"></div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-white  hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:text-[#f2b705]
                        ${
                          isActive
                            ? "font-semibold text-[#f2b705]"
                            : "font-semibold text-white"
                        }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </nav>
                </div>
                <a href={Broucher} target="_blank" rel="noopener noreferrer">
                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#f2b705] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:text-black transition-all ease-in-out duration-300"
                  >
                    Download Brochure
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
