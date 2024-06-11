import { CiLinkedin, CiMail } from "react-icons/ci";
// import GoogleMaps from "../components/GoogleMaps";

function Footer() {
  return (
    <div className="text-graay  max-container px-6 w-full ">
      <div className="flex justify-between">
        <ul>
          <li className="font-bold text-2xl text-primary">Company</li>
          <div className="flex flex-col space-y-3 pt-2">
            <li>
              <a href="#about-us" className="text-graay hover:underline">
                About Us
              </a>
            </li>
            <li>
              {" "}
              <a href="#contact-us" className="text-graay hover:underline">
                Contact Us
              </a>
            </li>
            <li>Careers</li>
          </div>
        </ul>
        <ul>
          <li className="font-bold text-2xl text-primary">Products</li>
          <div className="flex flex-col space-y-3 pt-2">
            <li>
              {" "}
              <a href="#products" className="text-graay hover:underline">
                Smart Padloclk
              </a>
            </li>
            <li>GateWay</li>
            <li>
              {" "}
              <a href="#products" className="text-graay hover:underline">
                Green Seal
              </a>
            </li>
          </div>
        </ul>
        <ul>
          <li className="font-bold text-2xl text-primary">Solutions</li>
        </ul>
        <ul>
          <li className="font-bold text-2xl text-primary">Resources</li>
          <div className="flex flex-col space-y-3 pt-2">
            <li>Blog</li>
            <li>Support</li>
          </div>
        </ul>
      </div>
      <div className="flex justify-between w-full mt-32">
        <p>Copyright ©2024 SternaSecurity. All rights reserved</p>
        <p className="underline">Privacy Policy</p>
        <p className="underline">Terms & Conditions</p>
        <p className="underline">Terms of Use</p>

        <div className="flex gap-2 text-textColor text-3xl">
          <CiMail className="cursor-pointer active:scale-95" />
          <CiLinkedin className="cursor-pointer active:scale-95" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
