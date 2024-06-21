import { CiFacebook, CiLinkedin, CiMail } from "react-icons/ci";
// import GoogleMaps from "../components/GoogleMaps";

function Footer() {
  return (
    <div className="text-graay max-container flex flex-col space-y-16 px-6 w-full">
      <div className="flex flex-col lg:flex-row justify-between py-8">
        <ul className="mb-4 lg:mb-0">
          <li className="font-bold text-2xl text-primary">Company</li>
          <div className="flex flex-col space-y-3 pt-2">
            <li>
              <a href="#about-us" className="text-graay hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact-us" className="text-graay hover:underline">
                Contact Us
              </a>
            </li>
            <li>Careers</li>
          </div>
        </ul>
        <ul className="mb-4 lg:mb-0">
          <li className="font-bold text-2xl text-primary">Products</li>
          <div className="flex flex-col space-y-3 pt-2">
            <li>
              <a href="#products" className="text-graay hover:underline">
                Smart Padlock
              </a>
            </li>
            <li>GateWay</li>
            <li>
              <a href="#products" className="text-graay hover:underline">
                Green Seal
              </a>
            </li>
          </div>
        </ul>
        <ul className="mb-4 lg:mb-0">
          <li className="font-bold text-2xl text-primary">Solutions</li>
          <div className="flex flex-col space-y-3 pt-2">
            <li>
              <a href="#products" className="text-graay hover:underline">
                Banking
              </a>
            </li>
            <li>Telecom</li>
            <li>
              <a href="#products" className="text-graay hover:underline">
                Logistics
              </a>
            </li>
          </div>
        </ul>
        <ul className="mb-4 lg:mb-0">
          <li className="font-bold text-2xl text-primary">Resources</li>
          <div className="flex flex-col space-y-3 pt-2">
            <li>Blog</li>
            <li>Support</li>
          </div>
        </ul>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center w-full mt-8 lg:mt-32 space-y-3 lg:space-y-0">
        <p className="text-center lg:text-left">
          Copyright ©2024 SternaSecurity. All rights reserved
        </p>
        <p className="underline cursor-pointer">Privacy Policy</p>
        <p className="underline cursor-pointer">Terms & Conditions</p>
        <p className="underline cursor-pointer">Terms of Use</p>
        <div className="flex gap-2  text-3xl">
          <CiMail className="cursor-pointer active:scale-95" />
          <CiLinkedin className="cursor-pointer active:scale-95" />
          <CiFacebook className="cursor-pointer active:scale-95" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
