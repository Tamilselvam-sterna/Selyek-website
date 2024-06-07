function AboutUs() {
  return (
    <>
      <div className="h-[100px] bg-primary1 w-full">
        <p className="flex h-[100px] justify-center align-middle items-center font-bold text-4xl text-gray-200">
          About Us
        </p>
      </div>
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
      <div className="flex space-x-6 px-40">
        <ul>
          <li className="flex w-full justify-center font-bold text-2xl">
            28 Years
          </li>
          <li>
            For over two decades, we've led the way in pioneering fresh security
            solutions and consistently adapting our business tactics to
            capitalize on opportunities aligning with our clients' needs.
          </li>
        </ul>
        <div className="h-40 border-l-2 border-gray-500"></div>
        <ul>
          <li className="flex w-full justify-center font-bold text-2xl">
            10 million Operations
          </li>
          <li>
            Our dedication to our customers matches our global presence,
            guaranteeing customized solutions and local expertise in each market
            we operate.
          </li>
        </ul>
        <div className="h-40 border-l-2 border-gray-500"></div>

        <ul>
          <li className="flex w-full justify-center font-bold text-2xl">
            Patents
          </li>
          <li>
            We are thrilled about the groundbreaking products we provide. Every
            patent symbolizes our dedication to delivering state of the art
            solution crafted to address our customers ever changing
            requirements.
          </li>
        </ul>
      </div>
    </>
  );
}

export default AboutUs;
