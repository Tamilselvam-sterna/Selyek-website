import { Accordion } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";

function Banking() {
  return (
    <AnimatePresence mode="wait">
      <div className="py-16 w-full max-container flex flex-col space-x-5">
        <p className="mt-12 font-bold text-center text-4xl text-primary1">
          Banking
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
              src="/bank.jpg"
              alt="office content 1"
            />
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Security Solutions to Protect Your Assets
            </h2>
            <p className="mb-4 font-beneton text-black indent-16">
              Sterna provides a range of high-quality banking security systems
              that offer the ideal solution when it comes to access control for
              financial institutions. Our wide range of Electro Mechanical and
              innovative digital access products can be combined to create a
              bespoke system, tailored to your organisation’s requirements.
              These solutions help to minimise the risk of disruption to service
              and ensure business continuity.
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
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Banking;
