import { clientsMarqueeUrl } from "../utills/index";

function Clients() {
  return (
    <>
      <div className="relative px-6  space-y-4 container max-container   flex flex-1 flex-col items-center">
        <div className="font-bold text-4xl   tracking-wider lg:text-4xl w-screen h-[70px]  bg-gradient-to-r from-primary1  to-teal-400 text-white  text-transparent flex justify-center items-center">
          Working With the Best Clients and Partners
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-12 w-full">
          {clientsMarqueeUrl.map((client, index) => (
            <div
              key={index}
              className="h-[150px] bg-blue-50 flex items-center justify-center hover:scale-95"
            >
              <div className="flex flex-col ">
                <img
                  src={client.href}
                  alt={`client-${index}`}
                  width={200}
                  height={100}
                  className="object-contain"
                />
                <p className="text-center tracking-wide text-lg text-gray-700">
                  {client.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Clients;
