import { Divider } from "@mantine/core";
import Timeline from "./Timeline";

function AboutUs() {
  return (
    <div className="relative px-6  space-y-4 container max-container  flex flex-1 flex-col items-center justify-evenly">
      <p className="font-bold text-4xl tracking-wider lg:text-4xl w-screen h-[70px]  bg-gradient-to-r from-primary1  to-teal-400 text-white  text-transparent flex justify-center items-center">
        About Us
      </p>
      <div className="py-10 w-full flex items-center space-x-5">
        <img src="/company.jpg " className="h-[500px] w-[650px] object-cover" />
        <div className="flex flex-col space-y-4 w-full ">
          <p className="text-center font-bold text-2xl">Our Vision</p>
          <p className="font-beneton  text-base text-center">
            Leading the future of smart Locks.{" "}
          </p>{" "}
          <p className="text-center font-bold text-2xl">Our Mission</p>
          <p className="font-beneton  text-base text-center">
            Inspiring trust for a more resilient world.
          </p>
          <div className="flex flex-col space-y-3  items-center justify-center">
            <div className="text-center font-bold text-2xl">Our Values</div>
            <div className="font-beneton  flex flex-col space-y-2  text-base ">
              <p>
                <span className="font-bold">Innovation: </span>Continuously
                pushing the boundaries of technology to develop cutting-edge
                security solutions.
              </p>
              <p>
                <span className="font-bold">Reliability:</span> Ensuring
                consistent, dependable performance in all products and services.
                User-Centric.
              </p>
              <p>
                <span className="font-bold">Design:</span> Prioritizing ease of
                use and intuitive design to enhance user experience.
              </p>
              <p>
                <span className="font-bold">Security:</span> Commitment to
                providing the highest levels of security and protection for
                customers.
              </p>
              <p>
                <span className="font-bold">Sustainability:</span> Integrating
                eco-friendly practices and materials in all aspects of the
                business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row space-x-4 px-20 py-8 bg-white rounded-lg">
        <div className="flex flex-col space-y-4 p-4 bg-white bg-opacity-50 rounded-lg shadow-lg">
          <div className="text-center text-2xl text-gray-900">28 Years</div>
          <p className="text-slate-800 font-beneton text-base">
            For over two decades, we've led the way in pioneering fresh security
            solutions and consistently adapting our business tactics to
            capitalize on opportunities aligning with our clients' needs.
          </p>
        </div>
        <Divider orientation="vertical" color="blue" />
        <div className="flex flex-col space-y-4 p-4 bg-white bg-opacity-50 rounded-lg shadow-lg">
          <div className="text-center text-2xl text-gray-900">
            10 million Operations
          </div>
          <p className="text-slate-800 font-beneton text-base">
            Our dedication to our customers matches our global presence,
            guaranteeing customized solutions and local expertise in each market
            we operate.
          </p>
        </div>
        <Divider orientation="vertical" color="blue" />
        <div className="flex flex-col space-y-4 p-4 bg-white bg-opacity-50 rounded-lg shadow-lg">
          <div className="text-center text-2xl text-gray-900">Patents</div>
          <p className="text-slate-800 font-beneton text-base">
            We are thrilled about the groundbreaking products we provide. Every
            patent symbolizes our dedication to delivering state of the art
            solutions crafted to address our customers ever changing
            requirements.
          </p>
        </div>
      </div>
      <Timeline />
    </div>
  );
}

export default AboutUs;
