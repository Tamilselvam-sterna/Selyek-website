import { clientsMarqueeUrl } from "../utills/index";

function Clients() {
  return (
    <>
      <div className="font-bold text-4xl    tracking-wider lg:text-4xl w-screen h-[70px]  bg-gradient-to-r from-primary1  to-teal-400 text-white  text-transparent flex justify-center items-center">
        Working With the Best Clients and Partners
      </div>
      <div className="relative px-6   space-y-4 container max-container   flex flex-1 flex-col items-center justify-center">
        {/* <div classNameNameName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-12 w-full justify-center items-center">
          {clientsMarqueeUrl.map((client, index) => (
            <div
              key={index}
              classNameNameName="h-[150px] bg-blue-50 flex items-center justify-center hover:scale-95"
            >
              <div classNameNameName="flex flex-col ">
                <img
                  src={client.href}
                  alt={`client-${index}`}
                  width={200}
                  height={100}
                  classNameNameName="object-contain"
                />
                <p classNameNameName="text-center tracking-wide text-lg text-gray-700">
                  {client.label}
                </p>
              </div>
            </div>
          ))}
        </div> */}
        <section className="py-10 px-14  sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-12 gap-y-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">
                  1 team.
                  <br />
                  25+ years.
                  <br />
                  300+ projects.
                  <br />
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  Big or small, Startups or grownups, we’ve been devoting our
                  hearts and minds to our clients, achieving great successes and
                  building lasting relationships.
                </p>
              </div>

              {/* <div className=""> */}
              <div className="grid items-center max-w-4xl grid-cols-2 mx-auto col-span-4 lg:grid-cols-4 gap-x-10 gap-y-16">
                {/* <div className="grid items-center max-w-4xl grid-cols-2 mx-auto lg:grid-cols-4 gap-x-10 gap-y-16">
                  <div>
                    <img
                      className="object-contain w-full h-6 mx-auto"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png"
                      alt=""
                    />
                  </div>

                  <div>
                    <img
                      className="object-contain w-full h-8 mx-auto"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png"
                      alt=""
                    />
                  </div>

                  <div>
                    <img
                      className="object-contain w-full h-8 mx-auto"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png"
                      alt=""
                    />
                  </div>

                  <div>
                    <img
                      className="object-contain w-full mx-auto h-7"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png"
                      alt=""
                    />
                  </div>

                  <div className="hidden lg:block">
                    <img
                      className="object-contain w-full h-8 mx-auto"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-5.png"
                      alt=""
                    />
                  </div>

                  <div className="hidden lg:block">
                    <img
                      className="object-contain w-full h-8 mx-auto"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-6.png"
                      alt=""
                    />
                  </div>

                  <div className="hidden lg:block">
                    <img
                      className="object-contain w-full h-8 mx-auto"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-7.png"
                      alt=""
                    />
                  </div>

                  <div className="hidden lg:block">
                    <img
                      className="object-contain w-full h-8 mx-auto"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-8.png"
                      alt=""
                    />
                  </div>

                  <div className="hidden lg:block">
                    <img
                      className="object-contain w-full h-8 mx-auto"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-9.png"
                      alt=""
                    />
                  </div>

                  <div className="hidden lg:block">
                    <img
                      className="object-contain w-full mx-auto h-7"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-10.png"
                      alt=""
                    />
                  </div>

                  <div className="hidden lg:block">
                    <img
                      className="object-contain w-full h-8 mx-auto"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-11.png"
                      alt=""
                    />
                  </div>

                  <div className="hidden lg:block">
                    <img
                      className="object-contain w-full h-8 mx-auto"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-12.png"
                      alt=""
                    />
                  </div>
                </div> */}
                {clientsMarqueeUrl.map((client, index) => (
                  <img
                    src={client.href}
                    alt={`client-${index}`}
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                ))}
                <div className="grid items-center max-w-4xl grid-cols-2 mx-auto lg:grid-cols-4 gap-x-10 gap-y-16"></div>

                <div className="flex items-center justify-start mt-10 space-x-3 lg:hidden">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Clients;
