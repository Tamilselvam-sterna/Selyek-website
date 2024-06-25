import { Card } from "@mantine/core";

const Service = () => {
  return (
    <div className="relative pt-3   container max-container flex flex-1 flex-col items-center ">
      <div className="font-bold text-4xl   tracking-wider lg:text-4xl w-screen h-[70px]  bg-gradient-to-r from-primary1  to-teal-400 text-white  text-transparent flex justify-center items-center">
        Services
      </div>
      <div className=" bg-white">
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            {/* <h2 className="text-4xl font-semibold text-gray-800">
              Our Services
            </h2> */}
            <p className="mt-4 font-bold text-2xl">
              We have worked on complex, scalable, distributed and mission
              critical applications
            </p>
            <p>
              We understand your business, analyze your problems, improve the
              ongoing process, implement the best suitable technology and help
              you scale your business.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                className=" hover:bg-primary1 hover-para-container hover-text-container hover-background-container hover-icon-container hover:transition-all ease-linear delay-75"
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <div className="flex  items-center mt-4 mb-6 flex-col space-y-3 px-4 py-2">
                  <div className="">
                    <div className="h-20 w-20 rounded-full bg-primary1 hover-para-container background-color  flex justify-center items-center">
                      <svg
                        width="35"
                        height="33"
                        viewBox="0 0 35 33"
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 0C13.3575 0 10 3.3575 10 7.5V12H7.5C6.11929 12 5 13.1193 5 14.5V30.5C5 31.8807 6.11929 33 7.5 33H27.5C28.8807 33 30 31.8807 30 30.5V14.5C30 13.1193 28.8807 12 27.5 12H25V7.5C25 3.3575 21.6425 0 17.5 0ZM17.5 3C20.2614 3 22.5 5.23858 22.5 7.5V12H12.5V7.5C12.5 5.23858 14.7386 3 17.5 3ZM17.5 18.25C18.1904 18.25 18.75 18.8096 18.75 19.5V23.5C18.75 24.1904 18.1904 24.75 17.5 24.75C16.8096 24.75 16.25 24.1904 16.25 23.5V19.5C16.25 18.8096 16.8096 18.25 17.5 18.25Z"
                          className="icon-path"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="font-bold text-black text-color text-2xl">
                    Our platform... your rule
                  </div>
                  <p className=" text-gray-600 font-beneton text-color text-base">
                    Our platform empowers you to customize and control your
                    security solutions. With us, you set the standards and we
                    deliver excellence.
                  </p>
                </div>
                {/* background svg */}
                <span className="absolute top-0 right-0">
                  <svg
                    width="218"
                    height="109"
                    viewBox="0 0 218 109"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.05"
                      cx="156.5"
                      cy="-47.5"
                      r="156.5"
                      fill="white"
                    ></circle>
                    <circle
                      opacity="0.08"
                      cx="210"
                      cy="6"
                      r="62"
                      fill="white"
                    ></circle>
                  </svg>
                </span>
                <span className="absolute -mb-1 bottom-0 left-0">
                  <svg
                    width="23"
                    height="32"
                    viewBox="0 0 23 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="21.262"
                      cy="1.12081"
                      r="1.12081"
                      transform="rotate(90 21.262 1.12081)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="21.262"
                      cy="30.4863"
                      r="1.12081"
                      transform="rotate(90 21.262 30.4863)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="1.76005"
                      cy="1.12081"
                      r="1.12081"
                      transform="rotate(90 1.76005 1.12081)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="1.76005"
                      cy="30.4863"
                      r="1.12081"
                      transform="rotate(90 1.76005 30.4863)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="11.6228"
                      cy="1.12081"
                      r="1.12081"
                      transform="rotate(90 11.6228 1.12081)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="11.6228"
                      cy="30.4863"
                      r="1.12081"
                      transform="rotate(90 11.6228 30.4863)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="21.262"
                      cy="10.9839"
                      r="1.12081"
                      transform="rotate(90 21.262 10.9839)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="1.76005"
                      cy="10.9839"
                      r="1.12081"
                      transform="rotate(90 1.76005 10.9839)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="11.6228"
                      cy="10.9839"
                      r="1.12081"
                      transform="rotate(90 11.6228 10.9839)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="21.262"
                      cy="20.8469"
                      r="1.12081"
                      transform="rotate(90 21.262 20.8469)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="1.76005"
                      cy="20.8469"
                      r="1.12081"
                      transform="rotate(90 1.76005 20.8469)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="11.6228"
                      cy="20.8469"
                      r="1.12081"
                      transform="rotate(90 11.6228 20.8469)"
                      fill="white"
                    ></circle>
                  </svg>
                </span>
              </Card>
              <Card
                className=" hover:bg-primary1 hover-para-container hover-text-container hover-background-container hover-icon-container hover:transition-all ease-linear delay-100"
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <div className="flex  items-center mt-4 mb-6 flex-col space-y-3 px-4 py-2">
                  <div className="">
                    <div className="h-20 w-20 rounded-full bg-primary1 hover-para-container background-color  flex justify-center items-center">
                      {/* <svg
                        width="35"
                        height="33"
                        viewBox="0 0 35 33"
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 0C13.3575 0 10 3.3575 10 7.5V12H7.5C6.11929 12 5 13.1193 5 14.5V30.5C5 31.8807 6.11929 33 7.5 33H27.5C28.8807 33 30 31.8807 30 30.5V14.5C30 13.1193 28.8807 12 27.5 12H25V7.5C25 3.3575 21.6425 0 17.5 0ZM17.5 3C20.2614 3 22.5 5.23858 22.5 7.5V12H12.5V7.5C12.5 5.23858 14.7386 3 17.5 3ZM17.5 18.25C18.1904 18.25 18.75 18.8096 18.75 19.5V23.5C18.75 24.1904 18.1904 24.75 17.5 24.75C16.8096 24.75 16.25 24.1904 16.25 23.5V19.5C16.25 18.8096 16.8096 18.25 17.5 18.25Z"
                          className="icon-path"
                          fill="white"
                        />
                      </svg> */}
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        className="icon"
                      >
                        <path
                          className="icon-path"
                          fill="white"
                          d="M18.6668 28.6666C18.6668 28.1666 18.6668 27.4999 18.8335 26.9999H10.3335V23.6666H7.00016V10.3333H10.3335V6.99992H23.6668V10.3333H27.0002V18.8333C27.5002 18.6666 28.1668 18.6666 28.6668 18.6666C29.1668 18.6666 29.8335 18.6666 30.3335 18.8333V10.3333H33.6668V0.333252H23.6668V3.66659H10.3335V0.333252H0.333496V10.3333H3.66683V23.6666H0.333496V33.6666H10.3335V30.3333H18.8335C18.6668 29.8333 18.6668 29.1666 18.6668 28.6666ZM27.0002 3.66659H30.3335V6.99992H27.0002V3.66659ZM3.66683 3.66659H7.00016V6.99992H3.66683V3.66659ZM7.00016 30.3333H3.66683V26.9999H7.00016V30.3333ZM30.3335 21.9999V26.9999H35.3335V30.3333H30.3335V35.3333H27.0002V30.3333H22.0002V26.9999H27.0002V21.9999H30.3335Z"
                        ></path>
                      </svg>
                      {/* </span> */}
                    </div>
                  </div>
                  <div className="font-bold text-black text-color text-2xl">
                    A connected world drives data accumulation.{" "}
                  </div>
                  <p className=" text-gray-600 font-beneton text-color text-base">
                    Data Analytics and Mining: Essential Components in Security
                    Solutions
                  </p>
                </div>
                {/* background svg */}
                <span className="absolute top-0 right-0">
                  <svg
                    width="218"
                    height="109"
                    viewBox="0 0 218 109"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.05"
                      cx="156.5"
                      cy="-47.5"
                      r="156.5"
                      fill="white"
                    ></circle>
                    <circle
                      opacity="0.08"
                      cx="210"
                      cy="6"
                      r="62"
                      fill="white"
                    ></circle>
                  </svg>
                </span>
                <span className="absolute -mb-1 bottom-0 left-0">
                  <svg
                    width="23"
                    height="32"
                    viewBox="0 0 23 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="21.262"
                      cy="1.12081"
                      r="1.12081"
                      transform="rotate(90 21.262 1.12081)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="21.262"
                      cy="30.4863"
                      r="1.12081"
                      transform="rotate(90 21.262 30.4863)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="1.76005"
                      cy="1.12081"
                      r="1.12081"
                      transform="rotate(90 1.76005 1.12081)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="1.76005"
                      cy="30.4863"
                      r="1.12081"
                      transform="rotate(90 1.76005 30.4863)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="11.6228"
                      cy="1.12081"
                      r="1.12081"
                      transform="rotate(90 11.6228 1.12081)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="11.6228"
                      cy="30.4863"
                      r="1.12081"
                      transform="rotate(90 11.6228 30.4863)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="21.262"
                      cy="10.9839"
                      r="1.12081"
                      transform="rotate(90 21.262 10.9839)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="1.76005"
                      cy="10.9839"
                      r="1.12081"
                      transform="rotate(90 1.76005 10.9839)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="11.6228"
                      cy="10.9839"
                      r="1.12081"
                      transform="rotate(90 11.6228 10.9839)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="21.262"
                      cy="20.8469"
                      r="1.12081"
                      transform="rotate(90 21.262 20.8469)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="1.76005"
                      cy="20.8469"
                      r="1.12081"
                      transform="rotate(90 1.76005 20.8469)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="11.6228"
                      cy="20.8469"
                      r="1.12081"
                      transform="rotate(90 11.6228 20.8469)"
                      fill="white"
                    ></circle>
                  </svg>
                </span>
              </Card>
              <Card
                className=" hover:bg-primary1 hover-para-container hover-text-container hover-background-container hover-icon-container hover:transition-all ease-linear delay-100"
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <div className="flex  items-center mt-4 mb-6 flex-col space-y-3 px-4 py-2">
                  <div className="">
                    <div className="h-20 w-20 rounded-full bg-primary1 hover-para-container background-color  flex justify-center items-center">
                      <svg
                        width="35"
                        height="33"
                        viewBox="0 0 40 25"
                        className="icon"
                      >
                        <path
                          fill="white"
                          className="icon-path"
                          d="M20 0.166748C21.5471 0.166748 23.0308 0.78133 24.1248 1.87529C25.2188 2.96925 25.8333 4.45298 25.8333 6.00008C25.8333 7.54718 25.2188 9.03091 24.1248 10.1249C23.0308 11.2188 21.5471 11.8334 20 11.8334C18.4529 11.8334 16.9692 11.2188 15.8752 10.1249C14.7812 9.03091 14.1667 7.54718 14.1667 6.00008C14.1667 4.45298 14.7812 2.96925 15.8752 1.87529C16.9692 0.78133 18.4529 0.166748 20 0.166748ZM8.33333 4.33341C9.26667 4.33341 10.1333 4.58341 10.8833 5.03341C10.6333 7.41675 11.3333 9.78341 12.7667 11.6334C11.9333 13.2334 10.2667 14.3334 8.33333 14.3334C7.00725 14.3334 5.73548 13.8066 4.7978 12.8689C3.86012 11.9313 3.33333 10.6595 3.33333 9.33341C3.33333 8.00733 3.86012 6.73556 4.7978 5.79788C5.73548 4.8602 7.00725 4.33341 8.33333 4.33341ZM31.6667 4.33341C32.9927 4.33341 34.2645 4.8602 35.2022 5.79788C36.1399 6.73556 36.6667 8.00733 36.6667 9.33341C36.6667 10.6595 36.1399 11.9313 35.2022 12.8689C34.2645 13.8066 32.9927 14.3334 31.6667 14.3334C29.7333 14.3334 28.0667 13.2334 27.2333 11.6334C28.6667 9.78341 29.3667 7.41675 29.1167 5.03341C29.8667 4.58341 30.7333 4.33341 31.6667 4.33341ZM9.16667 21.4167C9.16667 17.9667 14.0167 15.1667 20 15.1667C25.9833 15.1667 30.8333 17.9667 30.8333 21.4167V24.3334H9.16667V21.4167ZM0 24.3334V21.8334C0 19.5167 3.15 17.5667 7.41667 17.0001C6.43333 18.1334 5.83333 19.7001 5.83333 21.4167V24.3334H0ZM40 24.3334H34.1667V21.4167C34.1667 19.7001 33.5667 18.1334 32.5833 17.0001C36.85 17.5667 40 19.5167 40 21.8334V24.3334Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="font-bold text-black text-color text-2xl">
                    Worldwide client services{" "}
                  </div>
                  <p className="A connected world drives data accumulation. text-gray-600 font-beneton text-color text-base">
                    We offer exceptional client services globally, ensuring
                    personalized support and efficient solutions around the
                    clock.
                  </p>
                </div>
                {/* background svg */}
                <span className="absolute top-0 right-0">
                  <svg
                    width="218"
                    height="109"
                    viewBox="0 0 218 109"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.05"
                      cx="156.5"
                      cy="-47.5"
                      r="156.5"
                      fill="white"
                    ></circle>
                    <circle
                      opacity="0.08"
                      cx="210"
                      cy="6"
                      r="62"
                      fill="white"
                    ></circle>
                  </svg>
                </span>
                <span className="absolute -mb-1 bottom-0 left-0">
                  <svg
                    width="23"
                    height="32"
                    viewBox="0 0 23 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="21.262"
                      cy="1.12081"
                      r="1.12081"
                      transform="rotate(90 21.262 1.12081)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="21.262"
                      cy="30.4863"
                      r="1.12081"
                      transform="rotate(90 21.262 30.4863)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="1.76005"
                      cy="1.12081"
                      r="1.12081"
                      transform="rotate(90 1.76005 1.12081)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="1.76005"
                      cy="30.4863"
                      r="1.12081"
                      transform="rotate(90 1.76005 30.4863)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="11.6228"
                      cy="1.12081"
                      r="1.12081"
                      transform="rotate(90 11.6228 1.12081)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="11.6228"
                      cy="30.4863"
                      r="1.12081"
                      transform="rotate(90 11.6228 30.4863)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="21.262"
                      cy="10.9839"
                      r="1.12081"
                      transform="rotate(90 21.262 10.9839)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="1.76005"
                      cy="10.9839"
                      r="1.12081"
                      transform="rotate(90 1.76005 10.9839)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="11.6228"
                      cy="10.9839"
                      r="1.12081"
                      transform="rotate(90 11.6228 10.9839)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="21.262"
                      cy="20.8469"
                      r="1.12081"
                      transform="rotate(90 21.262 20.8469)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="1.76005"
                      cy="20.8469"
                      r="1.12081"
                      transform="rotate(90 1.76005 20.8469)"
                      fill="white"
                    ></circle>
                    <circle
                      cx="11.6228"
                      cy="20.8469"
                      r="1.12081"
                      transform="rotate(90 11.6228 20.8469)"
                      fill="white"
                    ></circle>
                  </svg>
                </span>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Service;
