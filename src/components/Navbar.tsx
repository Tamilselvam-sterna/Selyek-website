import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { navLinks } from "../constants";
import clsx from "clsx";
import { SearchNormal, User } from "iconsax-react";
import { Button, Input, Menu } from "@mantine/core";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <header
      className={
        "fixed z-10 top-0 left-0 w-full  duration-500 transition-all ease-in-out bg-textColor"
      }
    >
      {/**desktop nav */}
      <nav className="flex items-center justify-between px-6 max-container py-4">
        <div
          className={
            "text-3xl font-bold font-gabarito tracking-wider text-blue-400"
          }
        >
          STERNA
        </div>
        <ul className="flex items-center gap-8 max-lg:hidden space-x-5">
          <li className="flex space-x-10">
            <a
              href="#"
              className="font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1
            "
            >
              Home
            </a>
            <a
              href="#services"
              className="font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1
            "
            >
              Services
            </a>
            <Menu trigger="hover">
              <Menu.Target>
                <a
                  href="#products"
                  className="font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1
            "
                >
                  Products
                </a>
              </Menu.Target>

              <Menu.Dropdown>
                <div className="bg-white h-10 w-50 flex px-3 flex-col justify-center rounded-xl">
                  <a
                    href="#products"
                    className="font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1
            "
                  >
                    Padlocks
                  </a>
                </div>
              </Menu.Dropdown>
            </Menu>
            <ul className="dropdown hidden absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
              <li>
                <a
                  href="#product1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Product 1
                </a>
              </li>
            </ul>
            <a
              href="#about-us"
              className="font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1
            "
            >
              About us
            </a>
            <a
              href="#contact-us"
              className="font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1
            "
            >
              Contact us
            </a>
          </li>
          {/* {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={
                  "font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1"
                }
              >
                {link.label}
              </a>
            </li>
          ))} */}
        </ul>{" "}
        {/* <Input
          radius={"lg"}
          placeholder="Search"
          leftSection={
            <div className="relative bottom-0">
              <SearchNormal size={20} />
            </div>
          }
        /> */}
        <div className="flex space-x-4">
          {/* <Input
            radius={"lg"}
            placeholder="Search"
            leftSection={
              <div className="relative bottom-0">
                <SearchNormal size={20} />
              </div>
            }
          /> */}
          <button
            className={
              "max-lg:hidden font-semibold font-montserrat rounded-md text-base cursor-pointer active:scale-95 px-3 py-1.5 border  bg-transparent border-primary"
            }
          >
            <div className="flex space-x-4">
              <span>
                <User size="20" />
              </span>
              <a href="#contact-us" className={"text-primary"}>
                Login
              </a>
            </div>
          </button>
        </div>
        <div
          className="max-lg:block hidden cursor-pointer"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <RxHamburgerMenu
            className={clsx("text-4xl", {
              "text-primary": colorChange,
              "text-textColor": !colorChange,
            })}
          />
        </div>
      </nav>

      {/**Mobile menu nav */}
      {isMenuOpen && (
        <nav className="fixed inset-0 bg-primary lg:hidden">
          {/**Mobile menu header */}
          <div className="absolute w-full top-0 py-4 px-6 flex justify-between">
            <div
              className={
                "text-4xl font-bold font-gabarito tracking-wider text-textColor"
              }
            >
              Sterna
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl text-textColor" />
            </div>
          </div>

          {/**menu */}
          <ul className="lg:hidden flex flex-col items-center justify-center h-full ">
            {navLinks.map((item) => (
              <li key={item.label} className="space-y-4">
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-2xl font-medium text-textColor"
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
