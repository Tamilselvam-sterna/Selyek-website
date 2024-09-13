import { Card, Badge, Text, Accordion } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import ProductSpecs from "./BLESpecification";

const BlePadlock = () => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        transition={{
          duration: 2,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col   w-full  items-center justify-between  p-4 sm:flex-row sm:justify-around sm:p-8 min-h-dvh mt-[80px]"
      >
        <div>
          <div>
            <h1 className="text-2xl tracking-wide font-bold mb-2 text-primary1 text-center">
              SELYEK Intelligent BLE Padlock
            </h1>
            <Text size="md" color="dimmed" mt="xs" className="text-center">
              Model No: SSG401
            </Text>
            <Card shadow="lg" p="lg" radius="md" withBorder>
              <Card.Section className="flex justify-center">
                <img src={"/BLE.png"} alt="SELYEK Intelligent BLE Padlock" />
              </Card.Section>
              <div className="flex w-full justify-center space-x-4">
                <Badge color="blue" variant="light" size="lg">
                  Smart
                </Badge>
                <Badge color="blue" variant="light" size="lg">
                  Wireless
                </Badge>
                <Badge color="blue" variant="light" size="lg">
                  Keyless
                </Badge>
              </div>
            </Card>
          </div>

          <div className="w-[900px]">
            <Accordion variant="separated" className="pt-4">
              <Accordion.Item value={"1"}>
                <Accordion.Control className="font-semibold text-xl ">
                  Product Info
                </Accordion.Control>
                <Accordion.Panel className="tracking-wide text-lg text-gray-800">
                  Smart BLE, industrial grade keyless battery powered padlock
                  designed to work in harsh environments. The lock is tamper
                  resistant with an optional tamper monitoring feature. It works
                  with industrial grade credential technology to protect it.
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value={"2"}>
                <Accordion.Control className="font-bold text-xl">
                  Specifications
                </Accordion.Control>
                <Accordion.Panel>
                  <ProductSpecs />
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value={"3"}>
                <Accordion.Control className="font-bold text-xl">
                  FAQ
                </Accordion.Control>
                <Accordion.Panel>
                  <p className="font-semibold">
                    1. What is the SELYEK Intelligent BLE Padlock?
                  </p>
                  The SELYEK Intelligent BLE Padlock is a smart, keyless access
                  control solution that uses Bluetooth Low Energy (BLE)
                  technology for secure entry management. It allows users to
                  unlock padlocks via a smartphone app, providing a wireless and
                  secure alternative to traditional locks.
                  <p className="font-semibold">
                    2. Is the SELYEK padlock secure?
                  </p>
                  Yes, the SELYEK padlock uses advanced AES 128-bit encryption
                  to ensure secure communication between the lock and your
                  smartphone. The system also provides optional tamper alerts
                  and audit trails to monitor lock activity in real-time.
                  <p className="font-semibold">
                    3. How long does the battery last?
                  </p>
                  The SELYEK padlock’s battery can last up to 12 months on a
                  single charge, depending on usage. The lock will notify you
                  through the app when the battery is running low, ensuring you
                  have enough time to recharge it.
                  <p className="font-semibold">
                    4. Can multiple users access the lock?
                  </p>
                  Yes, you can grant access to multiple users by sharing virtual
                  keys via the mobile app. You can also set access permissions
                  and time limits for each user to control who can use the lock
                  and when.
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value={"4"}>
                <Accordion.Control className="font-bold text-xl">
                  Downloads
                </Accordion.Control>
                <Accordion.Panel>
                  <div className="mt-4 flex items-center space-x-5">
                    <img
                      src="/pdf.png"
                      alt="Download SELYEK Datasheet"
                      className="w-14 h-14 object-cover cursor-pointer hover:scale-105"
                    />
                    <a href="/BLE.pdf" download="BLE padlock Brochure">
                      <p className="text-gray-700 font-semibold text-lg">
                        Product Brochure
                      </p>
                    </a>
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BlePadlock;
