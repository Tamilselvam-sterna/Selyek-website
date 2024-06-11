const Services = () => {
  return (
    <>
      <div className="h-[100px] bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 w-full">
        <p className="flex h-[100px] justify-center items-center font-bold text-4xl text-gray-700">
          Our Services
        </p>
      </div>
      <div className="relative px-6 py-4 space-y-4 container max-container  flex flex-1 flex-col items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-blue-100 p-6 w-full h-[450px] rounded-lg shadow-md relative">
            <div className="absolute -top-4 font-bold text-xl left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-primary1 text-white rounded-full w-10 h-10">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2 pt-10 flex justify-center">
              One platform, endless connectivity
            </h3>
            <p className="text-gray-600 text-sm flex justify-center">
              Describe your service here. What makes it great? Use short catchy
              text to tell people what you offer, and the benefits they will
              receive. A great description gets readers in the mood, and makes
              them more likely to go ahead and book.
            </p>
          </div>
          <div className="bg-blue-100 p-6 w-full h-[450px] rounded-lg shadow-md relative">
            <div className="absolute -top-4 font-bold text-xl left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-primary1 text-white rounded-full w-10 h-10">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2 pt-10 flex justify-center">
              Enterprise-grade security
            </h3>
            <p className="text-gray-600 text-sm flex justify-center">
              Experience unmatched durability and precision with our top of the
              line electro mechanical locks.
            </p>
          </div>
          <div className="bg-blue-100 p-6 w-full h-[450px] rounded-lg shadow-md relative">
            <div className="absolute -top-4 font-bold text-xl left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-primary1 text-white rounded-full w-10 h-10">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2 pt-10 flex justify-center">
              Resilient infrastructure
            </h3>
            <p className="text-gray-600 text-sm flex justify-center">
              Enjoy peace of mind with our top-tier, 24/7 customer service
              always ready to assist you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
