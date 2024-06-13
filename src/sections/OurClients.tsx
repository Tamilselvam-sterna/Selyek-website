import { clientsMarqueeUrl } from "../constants/index";

function Clients() {
  return (
    <>
      <div className="h-[100px] bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 w-full">
        <p className="flex h-[100px] justify-center items-center font-bold text-2xl lg:text-4xl text-black">
          Working With the Best Clients and Partners
        </p>
      </div>

      <div className="relative px-6 py-4 space-y-4 container max-container   flex flex-1 flex-col items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-24">
          {clientsMarqueeUrl.map((client, index) => (
            <div className="bg-gray-200 hover:shadow-xl  rounded-lg">
              <img
                src={client.href}
                alt="client"
                width={300}
                height={200}
                className="object-contain "
              />
            </div>
          ))}
        </div>
        {/* <motion.ul
          className="flex p-4 space-x-4"
          initial={{ x: "100%" }}
          animate={{
            x: "-100%",
            transition: {
              ease: "linear",
              repeat: Infinity,
              duration: 20,
              repeatType: "loop",
            },
          }}
        >
          {clientsMarqueeUrl.map((client) => (
            <motion.li
              key={client.href}
              className="flex-shrink-0 w-40 py-2 bg-textColor rounded flex flex-col gap-2 items-center"
            >
              <img
                src={client.href}
                alt="clients-img"
                className="w-24 h-24 object-contain"
              />
            </motion.li>
          ))}
        </motion.ul> */}
      </div>
    </>
  );
}

export default Clients;
