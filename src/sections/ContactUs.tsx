import { CallCalling, Location } from "iconsax-react";
import { Input, Textarea } from "@mantine/core";
import { CiMail } from "react-icons/ci";

function ContactUs() {
  return (
    <div className="relative px-6 py-4 space-y-4 container max-container  flex flex-1 flex-col items-center justify-evenly">
      <p className="font-bold text-4xl tracking-wider lg:text-4xl w-screen h-[70px]  bg-gradient-to-r from-primary1  to-teal-400 text-white  text-transparent flex justify-center items-center">
        Contact Us
      </p>

      <div className="flex w-full justify-around">
        <div className=" ">
          <div className="w-full">
            <div className="mb-12 max-w-full lg:mb-0">
              <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[32px]">
                GET IN TOUCH WITH US
              </h2>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6 max-w-[600px] font-beneton">
                At Sterna Security, we value your feedback and are here to
                assist with any inquiries you may have. Please feel free to
                reach out to us using the form below, or contact us directly via
                phone or email.
              </p>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[80px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <Location size="30" color="#00B5E2" />
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Our Location
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6 font-beneton">
                    169, West Sambandam Road, R.S Puram, Coimbatore, TamilNadu -
                    641 002, India.{" "}
                  </p>
                </div>
              </div>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <CallCalling size="30" color="#00B5E2" />
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Phone Number
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6 font-beneton">
                    0422 433 4800
                  </p>
                </div>
              </div>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <CiMail size="30" color="#00B5E2" />
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl  font-beneton text-dark dark:text-white">
                    Email Address
                  </h4>
                  <p className="text-base text-body-color font-beneton dark:text-dark-6">
                    info@sternadevices.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form className="w-[500px]">
          <div className="space-y-2 ">
            <label htmlFor="firstName" className="input-label">
              First name
            </label>
            <Input
              type="text"
              id="firstName"
              radius={"md"}
              size="md"
              className=""
              placeholder="First name"
              required
            />
            <label htmlFor="lastName" className="input-label">
              Last name
            </label>
            <Input
              type="text"
              id="lastName"
              radius={"md"}
              size="md"
              placeholder="Last name"
              required
            />
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <Input
              type="email"
              id="email"
              radius={"md"}
              size="md"
              placeholder="Email"
              required
            />
            <label htmlFor="mobile" className="input-label">
              Mobile Number
            </label>
            <Input
              type="number"
              id="mobile"
              radius={"md"}
              size="md"
              placeholder="Mobile number"
              required
            />
            <label htmlFor="message" className="input-label">
              Message
            </label>
            <div>
              <Textarea rows={4} cols={47} />
            </div>
          </div>
          <button className="mt-4 w-full px-3 py-1.5 bg-primary1 text-textColor font-semibold font-montserrat rounded-md text-base cursor-pointer active:scale-95">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
