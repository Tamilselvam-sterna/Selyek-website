import { ActionIcon } from "@mantine/core";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

export default function Timeline() {
  const lists = [
    {
      id: 1,
      year: "70's",
      image: "timeline.png",
      content: [
        {
          id: 1,
          text: "1972 Richard Sankey formed Alpha Enterprises as a product design company.",
        },
        {
          id: 2,
          text: "Our first office was in the attic of an old house in North Canton, Ohio that had been converted to office space.",
        },
      ],
    },
    {
      id: 2,
      year: "80's",
      image: "lock.png",
      content: [
        {
          id: 3,
          text: "2010 InVue introduces a full line of retail security products to protect tablets on display.",
        },
        {
          id: 4,
          text: "2012 InVue launches Smart Lock, an electronic lock and key system for merchandise in locked cabinets and display cases.",
        },
      ],
    },
    {
      id: 3,
      year: "90's",
      image: "payment.png",
      content: [
        {
          id: 5,
          text: "2020 InVue launches the innovative NE360 mobile payment system. NE360 provides retailers the complete freedom to combine any tablet or mobile device, any payment terminal and any operating system to create a flexible mPOS solution.",
        },
        {
          id: 6,
          text: "2020 InVue’s first Experience Center opens in Charlotte, NC allowing customers to take a live virtual tour of InVue solutions as they would be used in their specific retail environment.",
        },
      ],
    },
    {
      id: 4,
      year: "20's",
      image: "cases.png",
      content: [
        {
          id: 7,
          text: "1984 Alpha transformed itself into a product marketing company selling security packages for audio cassettes to record chains and video cases to video rental stores throughout the United States.",
        },
        {
          id: 8,
          text: "1986 Alpha’s first manufacturing plant is opened, the first of what will become a total of five facilities throughout the US.",
        },
      ],
    },
  ];

  const [selectedYearIndex, setSelectedYearIndex] = useState(0);

  const handlePrevious = () => {
    setSelectedYearIndex((prevIndex) =>
      prevIndex === 0 ? lists.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedYearIndex((prevIndex) =>
      prevIndex === lists.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectedYear = lists[selectedYearIndex];

  return (
    <>
      <section id="products" className="w-screen">
        <div className="relative w-full flex justify-center">
          <div className="absolute w-full h-[1px] bg-black top-1/2 transform -translate-y-1/2 z-0"></div>
          <div className="relative z-10 flex justify-between items-center w-[60%]">
            {lists.map((list) => (
              <motion.div
                key={list.id}
                className={`flex items-center justify-center ${
                  selectedYear.id === list.id
                    ? "border border-solid h-8 w-8 bg-white rounded-full border-primary1"
                    : ""
                }`}
                onClick={() => setSelectedYearIndex(list.id - 1)} // Adjust the index for zero-based array
                initial={{ opacity: 0, x: 100 }} // Initial animation state (off-screen right)
                animate={{ opacity: 1, x: 0 }} // Animation when selected (centered)
                transition={{ duration: 0.5 }} // Animation duration
              >
                <div
                  className={`h-4 w-4 rounded-full cursor-pointer ${
                    selectedYear.id === list.id ? "bg-primary1" : "bg-gray-700"
                  }`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
        {selectedYear && (
          <motion.div
            className=" mt-4 text-2xl font-bold text-white"
            key={selectedYear.id} // Ensure the motion.div re-renders when selectedYear changes
            initial={{ opacity: 0, x: 100 }} // Initial animation state (off-screen right)
            animate={{ opacity: 1, x: 0 }} // Animation when selected (centered)
            transition={{ duration: 0.5 }} // Animation duration
          >
            <div className="flex px-52 pb-9 pt-10 flex-row space-x-10">
              <div>
                <img src={selectedYear.image} alt={selectedYear.year} />
              </div>
              <div>
                <div className="flex flex-row text-black justify-between items-center">
                  <div></div>
                  <div className="text-4xl">{selectedYear.year}</div>
                  <div className="flex flex-row space-x-4">
                    <ActionIcon
                      variant="outline"
                      size="xl"
                      radius={"100%"}
                      aria-label="Settings"
                    >
                      <MdOutlineChevronLeft
                        className="cursor-pointer"
                        size={30}
                        onClick={handlePrevious} // Handle click for previous year
                      />
                    </ActionIcon>
                    <ActionIcon
                      variant="outline"
                      size="xl"
                      radius={"100%"}
                      aria-label="Settings"
                    >
                      <MdOutlineChevronRight
                        className="cursor-pointer"
                        size={30}
                        onClick={handleNext} // Handle click for next year
                      />
                    </ActionIcon>
                  </div>
                </div>
                <ul className="space-y-10">
                  {selectedYear.content.map((content) => (
                    <li key={content.id} className="text-slate-600 text-base">
                      {content.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </>
  );
}
