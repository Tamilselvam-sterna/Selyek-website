function Services() {
  return (
    <>
      <div className="h-[100px] bg-primary1 w-full">
        <p className="flex h-[100px] justify-center align-middle items-center font-bold text-4xl text-gray-200">
          Our Services
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10 pt-24">
        <div className="bg-blue-100 p-6 w-[350px] h-[450px] rounded-lg shadow-md relative">
          <div className="absolute -top-4 font-bold text-xl  left-40 flex items-center justify-center bg-primary1 text-white rounded-full w-10 h-10">
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
        <div className="bg-blue-100 p-6 w-[350px] h-[450px] rounded-lg shadow-md relative">
          <div className="absolute -top-4 font-bold text-xl  left-40 flex items-center justify-center bg-primary1 text-white rounded-full w-10 h-10">
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
        <div className="bg-blue-100 p-6 rounded-lg shadow-md relative w-[350px] h-[450px]">
          <div className="absolute -top-4 font-bold text-xl  left-40 flex items-center justify-center bg-primary1 text-white rounded-full w-10 h-10">
            3
          </div>
          <h3 className="text-lg font-semibold mb-2 pt-10 flex justify-center">
            Resilient infrastructure
          </h3>
          <p className="text-gray-600 text-sm flex justify-center w-full">
            Enjoy peace of mind with our top-tier, 24/7 customer service always
            ready to assist you.
          </p>
        </div>
      </div>
    </>
  );
}

export default Services;
