import { useState } from "react";

function AboutUs() {
  const [activeContent, setActiveContent] = useState("content-1");

  const handleMarkerClick = (contentId: any) => {
    setActiveContent(contentId);
  };
  return (
    <>
      <div className="h-[100px] bg-gradient-to-r from-gradient1  via-gradient2 to-gradient3 w-full">
        <p className="flex h-[100px] justify-center align-middle items-center font-bold text-4xl text-gray-700">
          About Us
        </p>
      </div>
      <div className="relative px-6 py-4 space-y-4 container max-container min-h-dvh flex flex-1 flex-col items-center justify-center ">
        <div className="max-container w-full px-8 py-16 space-y-4 text-lg lg:text-xl">
          <div className="flex space-x-3 items-center">
            <p className="font-bold  text-2xl">Our Mission:</p>
            <span>Inspiring trust for a more resilient world.</span>
          </div>
          <div className="flex space-x-3 items-center">
            <p className="font-bold  text-2xl">Our Vision:</p>
            <span>Leading the future of smart Locks.</span>
          </div>
        </div>
        <div className="flex w-full">
          <ul>
            <li className="flex w-full justify-center font-bold text-2xl">
              28 Years
            </li>
            <li>
              For over two decades, we've led the way in pioneering fresh
              security solutions and consistently adapting our business tactics
              to capitalize on opportunities aligning with our clients' needs.
            </li>
          </ul>
          <div className="h-40 border-l-2 border-gray-500"></div>
          <ul>
            <li className="flex w-full justify-center font-bold text-2xl">
              10 million Operations
            </li>
            <li>
              Our dedication to our customers matches our global presence,
              guaranteeing customized solutions and local expertise in each
              market we operate.
            </li>
          </ul>
          <div className="h-40 border-l-2 border-gray-500"></div>

          <ul>
            <li className="flex w-full justify-center font-bold text-2xl">
              Patents
            </li>
            <li>
              We are thrilled about the groundbreaking products we provide.
              Every patent symbolizes our dedication to delivering state of the
              art solution crafted to address our customers ever changing
              requirements.
            </li>
          </ul>
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
