import { AnimatePresence, motion } from "framer-motion";
import React from "react";

function Logistics() {
  return (
    <AnimatePresence mode="wait">
      <div className="py-16 w-full max-container flex flex-col space-x-5">
        <p className="mt-12 font-bold text-center text-4xl text-primary1">
          Logistics
        </p>

        <motion.div
          animate={{ x: 100 }}
          transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 },
          }}
          className="gap-8 items-start py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
        >
          <div className="w-full h-full">
            <img
              className="w-full rounded-lg  h-[500px]"
              src="/logistics.jpg"
              alt="office content 1"
            />
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Security Solutions to Protect Your Assets
            </h2>
            <div className="flex flex-col">
              <p className="mb-4 font-beneton text-black">
                Transportation is vital to critical infrastructure and many
                major corporations, to keep the wheels of the global economy
                turning. Any break or interruption to this service caused by
                internal and external theft in the supply chain can cause a
                costly loss of revenue, a breach in health and safety, customer
                dissatisfaction and a ruined reputation. Containers need to
                remain unopened during transport to secure the goods against
                contamination, plus the large number of vehicles in the
                logistics industry means there are many vehicles and areas that
                need to be secured, but also accessible at all times, day and
                night. Ensuring security in the transportation and logistics
                sector is especially challenging, as the landscape is changing
                at the same pace as technological developments advance.
              </p>
              <p className="mb-4 font-beneton text-black">
                Key control, traceability of key use and remotely controlled,
                accurate access rights have become vital, and we provides
                security solutions for transport environments, including smart
                locks for transport and logistics and trailer security. Sterna’s
                digital, electromechanical and mechanical solutions offer
                security and access control for the entire transportation
                ecosystem - including road, maritime, railway and aviation
                transport providers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Logistics;
