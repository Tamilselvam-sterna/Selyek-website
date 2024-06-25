import { Accordion } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

function Telecom() {
  return (
    <AnimatePresence mode="wait">
      <div className="py-16 w-full max-container flex flex-col space-x-5">
        <p className="mt-12 font-bold text-center text-4xl text-primary1">
          Telecommunications
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
              src="/tower.jpg"
              alt="office content 1"
            />
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Security Solutions to Protect Your Assets
            </h2>
            <div className="flex flex-col">
              <p className="mb-4 font-beneton text-black">
                The telecom industry is an essential part of our day-to-day
                life, reaching billions of people at the same time, no matter
                the weather, geographical location or nationality. It is a vital
                resource, and an outage would have a direct and potentially
                catastrophic impact on society, the economy and the functioning
                of Government. Telecoms need to be protected and controlled, as
                each asset inside data centres, base stations, poles, or any
                other site, is critical for business continuity. A service
                interruption can have a serious impact on both business and
                residential customers and might incur penalties, which would be
                very costly and also damage a supplier’s reputation.
              </p>
              <p className="mb-4 font-beneton text-black">
                Sterna offers a wide range of security solutions for
                telecommunications tower site main gate and other assets, and
                our digital, electromechanical and mechanical solutions can
                provide security and access control for the entire telecom
                ecosystem. From cabinet locks for telecoms offices to padlocks
                for utility poles, Sterna solutions can secure all aspects of
                the ecosystem, covering organisations such as mobile network
                operators, tower companies and data centre service providers.{" "}
              </p>
              <Accordion variant="contained">
                <Accordion.Item value={"1"}>
                  <Accordion.Control className="font-bold text-xl">
                    Electronic Keyless Padlocks
                  </Accordion.Control>
                  <Accordion.Panel>sdvf</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value={"2"}>
                  <Accordion.Control className="font-bold text-xl">
                    Selyek
                  </Accordion.Control>
                  <Accordion.Panel>sdvf</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value={"3"}>
                  <Accordion.Control className="font-bold text-xl">
                    {" "}
                    Intelligent Key Management System
                  </Accordion.Control>
                  <Accordion.Panel>sdvf</Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Telecom;
