import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { navLinks } from "../utills";
import clsx from "clsx";
import { ArrowDown2 } from "iconsax-react";
import { Menu } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const navigate = useNavigate();

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
        "fixed  top-0 left-0 w-full z-20  duration-500 transition-all ease-in-out bg-white"
      }
    >
      <nav className="flex items-center justify-between px-6 max-container py-4">
        <div
          className="flex text-3xl justify-center items-center text-primary1 px-2 py-3 rounded-lg font-extrabold   tracking-wider no-underline active:scale-95"
          onClick={() => navigate("/")}
        >
          SELYEK
        </div>
        <ul className="flex items-center gap-8 max-lg:hidden space-x-5">
          <Menu
            trigger="hover"
            transitionProps={{
              transition: "fade-up",
              duration: 220,
            }}
          >
            <Menu.Target>
              <div className="flex space-x-1">
                <p className="font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1 hover:cursor-pointer">
                  Products
                </p>
                <span className="flex items-center">
                  <ArrowDown2 size="15" color="#002740" />
                </span>
              </div>
            </Menu.Target>

            <Menu.Dropdown>
              <div className="bg-white h-40 w-full flex px-3 flex-col justify-evenly rounded-xl">
                <Menu.Item>
                  <p
                    className="font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1"
                    onClick={() => navigate("/padlocks")}
                  >
                    Padlocks
                  </p>
                </Menu.Item>
                <Menu.Item
                  component="a"
                  href="#products"
                  className="font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1"
                >
                  Green Seal
                </Menu.Item>
                <Menu.Item
                  component="a"
                  href="#products"
                  className="font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1"
                >
                  Mewa
                </Menu.Item>
              </div>
            </Menu.Dropdown>
          </Menu>
          <li className="flex space-x-10">
            <Menu
              trigger="hover"
              transitionProps={{
                transition: "fade-up",
                duration: 220,
              }}
            >
              <Menu.Target>
                <div className="flex space-x-1">
                  <p className="font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1 hover:cursor-pointer">
                    Solutions
                  </p>
                  <span className="flex items-center">
                    <ArrowDown2 size="15" color="#002740" />
                  </span>
                </div>
              </Menu.Target>

              <Menu.Dropdown>
                <div className="bg-white h-40 w-full flex px-3 flex-col justify-evenly rounded-xl">
                  <Menu.Item>
                    <p
                      className="font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1"
                      onClick={() => navigate("/banking")}
                    >
                      Banking
                    </p>
                  </Menu.Item>
                  <Menu.Item
                    onClick={() => navigate("/telecom")}
                    className="font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1"
                  >
                    Telecom
                  </Menu.Item>
                  <Menu.Item
                    className="font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1"
                    onClick={() => navigate("/logistics")}
                  >
                    Logistics
                  </Menu.Item>
                </div>
              </Menu.Dropdown>
            </Menu>
            <Menu
              trigger="hover"
              transitionProps={{
                transition: "fade-up",
                duration: 220,
              }}
            >
              {" "}
              <Menu.Target>
                <div className="flex space-x-1">
                  <a
                    href=""
                    className="font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1
            "
                  >
                    Company
                  </a>
                  <span className="flex items-center">
                    <ArrowDown2 size="15" color="#002740" />
                  </span>
                </div>
              </Menu.Target>
              <Menu.Dropdown>
                <div className="bg-white h-35 w-full flex px-3 flex-col justify-center rounded-xl">
                  <Menu.Item
                    component="a"
                    href="#about-us"
                    onClick={() => navigate("/")}
                    className="font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1"
                  >
                    About
                  </Menu.Item>
                  <Menu.Item
                    component="a"
                    href="#contact-us"
                    className="font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1"
                  >
                    Contact
                  </Menu.Item>
                </div>
              </Menu.Dropdown>
            </Menu>
            <Menu
              trigger="hover"
              transitionProps={{
                transition: "fade-up",
                duration: 220,
              }}
            >
              {" "}
              <Menu.Target>
                <div className="flex space-x-1">
                  <a
                    href=""
                    className="font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1
            "
                  >
                    Resources
                  </a>
                  <span className="flex items-center">
                    <ArrowDown2 size="15" color="#002740" />
                  </span>
                </div>
              </Menu.Target>
              <Menu.Dropdown>
                <div className="bg-white h-35 w-full flex px-3 flex-col justify-center rounded-xl">
                  <Menu.Item
                    component="a"
                    href="#about-us"
                    className="font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1"
                  >
                    Blog
                  </Menu.Item>
                  <Menu.Item
                    component="a"
                    href="#contact-us"
                    className="font-montserrat leading-normal lg:text-lg font-medium text-primary hover:text-primary1"
                  >
                    Support
                  </Menu.Item>
                </div>
              </Menu.Dropdown>
            </Menu>
          </li>
        </ul>{" "}
        <div className="flex space-x-4"></div>
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

      {isMenuOpen && (
        <nav className="fixed inset-0 bg-primary lg:hidden">
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
