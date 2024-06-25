import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";

function Products() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const navigate = useNavigate();
  return (
    <div className="relative px-6 py-4 space-y-4 container max-container  flex flex-1 flex-col items-center">
      <p className="font-bold text-4xl tracking-wider lg:text-4xl w-screen h-[70px]  bg-gradient-to-r from-primary1  to-teal-400 text-white  text-transparent flex justify-center items-center">
        New Product Releases
      </p>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        <ProductCard
          name={"Padlock"}
          price={"$599"}
          imgURL={"/lock1.png"}
          onClick={() => navigate("/padlock")}
        />

        <ProductCard name={"Padlock"} price={"$599"} imgURL={"/lock1.png"} />
        <ProductCard name={"Padlock"} price={"$599"} imgURL={"/lock1.png"} />
      </div> */}

      {/* <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-1.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-2.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-3.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-4.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-5.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div> */}

      <div className="max-container h-full flex items-center">
        <Carousel
          withIndicators
          height={"100%"}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          slideGap={{ base: 0, sm: "md" }}
          loop
          align="start"
          styles={{
            indicator: {
              backgroundColor: "#00B5E2",
            },
          }}
        >
          <Carousel.Slide className="w-full">
            <div className="flex  w-full h-full">
              <img src="/adobe1.jpeg" className="object-contain  w-1/2" />
              <section className="bg-blue-100 py-12 flex flex-col justify-center items-center">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-4xl font-bold mb-4">
                    Exciting News! Our Latest Product is Now Available!
                  </h2>
                  <p className="text-lg mb-8">
                    Discover the All-New <strong>Padlock</strong> – Just
                    Launched!
                  </p>
                  <a
                    href="/product"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </section>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="flex  w-full h-full justify-center">
              <img src="/adobe2.jpeg" className="object-contain  w-1/2" />
              <section className="bg-blue-100 py-12 flex flex-col justify-center items-center">
                <div className=" mx-auto px-4 text-center ">
                  <h2 className="text-4xl font-bold mb-4">
                    Exciting News! Our Latest Product is Now Available!
                  </h2>
                  <p className="text-lg mb-8">
                    Discover the All-New <strong>Padlock</strong> – Just
                    Launched!
                  </p>
                  <a
                    href="/product"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </section>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="flex  w-full h-full">
              <img src="/adobe 3.jpeg" className="object-contain  w-1/2" />
              <section className="bg-blue-100 py-12 flex flex-col justify-center items-center">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-4xl font-bold mb-4">
                    Exciting News! Our Latest Product is Now Available!
                  </h2>
                  <p className="text-lg mb-8">
                    Discover the All-New <strong>Padlock</strong> – Just
                    Launched!
                  </p>
                  <a
                    href="/product"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </section>
            </div>
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
}

export default Products;
