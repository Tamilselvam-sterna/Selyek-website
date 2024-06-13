import { Divider } from "@mantine/core";
import { useState } from "react";

function AboutUs() {
  const [activeContent, setActiveContent] = useState("content-1");

  const handleMarkerClick = (contentId: any) => {
    setActiveContent(contentId);
  };
  return (
    <>
      <div className="  h-[100px] bg-gradient-to-r from-gradient1  via-gradient2 to-gradient3 w-full">
        <p className="flex h-[100px] justify-center align-middle items-center font-bold text-2xl lg:text-4xl text-gray-700">
          About Us
        </p>
      </div>
      <div className="relative px-6 py-20   space-y-4 container max-container   flex  flex-col items-center justify-center ">
        <div className="flex flex-row space-x-4 ">
          <div className="flex flex-col  space-y-4">
            <div className="font-bold text-center text-xl">28 Years</div>
            <p className="text-slate-600">
              {" "}
              For over two decades, we've led the way in pioneering fresh
              security solutions and consistently adapting our business tactics
              to capitalize on opportunities aligning with our clients' needs.
            </p>
          </div>{" "}
          <Divider orientation="vertical" color="blue" />
          <div className="flex flex-col pl-4  space-y-4">
            <div className="font-bold text-center text-xl">
              {" "}
              10 million Operations
            </div>
            <p className="text-slate-600">
              {" "}
              Our dedication to our customers matches our global presence,
              guaranteeing customized solutions and local expertise in each
              market we operate.
            </p>
          </div>
          <Divider orientation="vertical" color="blue" />
          <div className="flex flex-col pl-4  space-y-4">
            <div className="font-bold text-center text-xl"> Patents</div>
            <p className="text-slate-600">
              {" "}
              We are thrilled about the groundbreaking products we provide.
              Every patent symbolizes our dedication to delivering state of the
              art solution crafted to address our customers ever changing
              requirements.
            </p>
          </div>
        </div>

        <div className="flex w-full">
          <div className="container mx-auto p-4">
            <div className="relative flex items-center mb-8">
              <div className="absolute w-full h-1 bg-gray-300"></div>
              <div className="flex justify-between w-full z-10">
                <button
                  className={`timeline-marker ${
                    activeContent === "content-1"
                      ? "bg-primary1"
                      : "bg-gray-400"
                  } rounded-full w-6 h-6 ring-8 ring-white`}
                  onClick={() => handleMarkerClick("content-1")}
                ></button>
                <button
                  className={`timeline-marker ${
                    activeContent === "content-2"
                      ? "bg-primary1"
                      : "bg-gray-400"
                  } rounded-full w-6 h-6 ring-8 ring-white`}
                  onClick={() => handleMarkerClick("content-2")}
                ></button>
                <button
                  className={`timeline-marker ${
                    activeContent === "content-3"
                      ? "bg-primary1"
                      : "bg-gray-400"
                  } rounded-full w-6 h-6 ring-8 ring-white`}
                  onClick={() => handleMarkerClick("content-3")}
                ></button>
              </div>
            </div>

            {/* Timeline Content */}
            <div
              id="content-1"
              className={`timeline-content ${
                activeContent === "content-1" ? "block" : "hidden"
              }`}
            >
              <h2 className="text-2xl font-bold">1996</h2>
              {/* <img
              className="w-32 h-32 mx-auto my-4"
              src="https://via.placeholder.com/100"
              alt="Image description"
            /> */}
              <ul className="list-disc ml-5">
                <li>
                  Founded in 1996 by Mr. N. Rangaswamy, who also served as the
                  Chief Executive and President, is an integral part of the
                  Ramalingam & Co group, established in 1927.
                </li>
              </ul>
            </div>

            <div
              id="content-2"
              className={`timeline-content ${
                activeContent === "content-2" ? "block" : "hidden"
              }`}
            >
              <h2 className="text-2xl font-bold">2006</h2>
              {/* <img
              className="w-32 h-32 mx-auto my-4"
              src="https://via.placeholder.com/100"
              alt="Image description"
            /> */}
              <ul className="list-disc ml-5">
                <li>
                  Founded in 1996 by Mr. N. Rangaswamy, who also served as the
                  Chief Executive and President, is an integral part of the
                  Ramalingam & Co group, established in 1927.
                </li>
              </ul>
            </div>

            <div
              id="content-3"
              className={`timeline-content ${
                activeContent === "content-3" ? "block" : "hidden"
              }`}
            >
              <h2 className="text-2xl font-bold">2016</h2>
              {/* <img
              className="w-32 h-32 mx-auto my-4"
              src="https://via.placeholder.com/100"
              alt="Image description"
            /> */}
              <ul className="list-disc ml-5">
                <li>
                  Founded in 1996 by Mr. N. Rangaswamy, who also served as the
                  Chief Executive and President, is an integral part of the
                  Ramalingam & Co group, established in 1927.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
