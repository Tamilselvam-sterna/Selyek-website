import { Lock } from "iconsax-react";
import { TiTick } from "react-icons/ti";
import { BiWorld } from "react-icons/bi";

const Services = () => {
  return (
    <>
      <div className="h-[100px]   bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 w-full">
        <p className="flex h-[100px] justify-center items-center font-bold text-2xl lg:text-4xl text-black">
          Our Services
        </p>
      </div>
      <div className="relative px-6 py-4 space-y-4 container max-container  flex flex-1 flex-col items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-solid border-primary1 p-6 rounded-lg shadow-md relative h-[450px] w-[350px]">
            <div className="absolute -top-7 font-bold text-xl left-1/2 transform -translate-x-1/2 flex items-center justify-center text-black bg-white rounded-full border border-solid border-primary1 w-16 h-16">
              <Lock color="#141212" size={30} />
            </div>
            <div className="w-full flex flex-col">
              <p className="text-lg font-bold pt-10  text-primary1 flex w-full tracking-wide">
                One platform, endless connectivity
              </p>
              <p className="flex justify-end relative right-3">
                Our platform... your rule1
              </p>
              {/* <Divider variant="dotted" size={"lg"} color="blue" /> */}
              <p className="pl-3 text-black font-semibold mt-4">
                With our Platform you can tailor:
              </p>
              <ul className="list-image-[url(/tick.png)]content-center pl-3 tracking-wide mt-2 text-gray-900 flex flex-col space-y-4">
                <li>
                  <span className="content-center">
                    <TiTick size={16} />
                  </span>{" "}
                  When, where, how locks can be used.
                </li>
                <li>
                  {" "}
                  <span>
                    <TiTick size={16} />
                  </span>{" "}
                  Rules applied to every lock, group of locks.
                </li>
                <li>
                  {" "}
                  <span>
                    <TiTick size={16} />
                  </span>{" "}
                  User Administration
                </li>
                <li>
                  {" "}
                  <span>
                    <TiTick size={16} />
                  </span>{" "}
                  Reporting
                </li>
                <li>
                  {" "}
                  <span>
                    <TiTick size={16} />
                  </span>{" "}
                  Access Management
                </li>
              </ul>
            </div>
          </div>

          <div className=" p-6  border border-solid border-primary1  rounded-lg shadow-md relative h-[450px] w-[350px]">
            <div className="absolute -top-7  font-bold text-xl left-1/2 transform -translate-x-1/2 flex items-center justify-center text-black bg-white  border border-solid border-primary1 rounded-full w-16 h-16">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2 pt-10 flex justify-center w-full">
              Enterprise-grade security
            </h3>
            <p className="text-gray-600 text-sm flex justify-center w-full">
              Experience unmatched durability and precision with our top of the
              line electro mechanical locks.
            </p>
          </div>
          <div className=" p-6 border border-solid border-primary1  rounded-lg shadow-md relative h-[450px] w-[350px]">
            <div className="absolute -top-7 font-bold text-xl left-1/2 transform -translate-x-1/2 flex items-center justify-center text-black bg-white  border border-solid border-primary1  rounded-full w-16 h-16">
              <BiWorld color="#141212" size={30} />
            </div>
            <div className="w-full flex flex-col">
              <p className="text-lg font-bold pt-10  text-primary1 flex w-full tracking-wider justify-center">
                Worldwide client services
              </p>
              <p className="flex justify-end relative right-9">
                Your global support partner
              </p>
              {/* <Divider variant="dotted" size={"lg"} color="blue" /> */}

              <ul className="list-image-[url(/tick.png)]content-center pl-3 tracking-wide mt-2 text-gray-900 flex flex-col space-y-4">
                <li>
                  <span className="content-center">
                    <TiTick size={16} />
                  </span>{" "}
                  Experience unparalleled peace of mind with our top-rated
                  customer care for electronic locks.
                </li>
                <li>
                  {" "}
                  <span>
                    <TiTick size={16} />
                  </span>{" "}
                  Out top tier customer service ensures your electronic locks
                  are always secure and reliable.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
