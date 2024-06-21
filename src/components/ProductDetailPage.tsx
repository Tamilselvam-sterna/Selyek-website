// src/ProductPage.js
import { Button, NumberInput, Select, Tabs } from "@mantine/core";
import { Eye, VideoPlay } from "iconsax-react";
import { Demo } from "./ProductAccordian";

const ProductDetailPage = () => {
  return (
    <>
      <div className="flex flex-col max-container items-center p-4 sm:flex-row sm:justify-around sm:p-8 mt-32 ">
        <div className="flex flex-col items-center sm:w-1/2">
          <img
            src="/lock1.png"
            alt="Smart Padlock"
            className="p-8 rounded-t-lg object-cover"
          />
          <div className="flex space-x-2">
            <a
              href="https://a.storyblok.com/f/101583/x/37d256717e/igloohome-smart-lock.mp4"
              target="_blank"
            >
              <Button
                variant="light"
                radius={"xl"}
                leftSection={<VideoPlay size={14} />}
              >
                Watch Video
              </Button>
            </a>
            <Button
              radius={"xl"}
              variant="light"
              leftSection={<Eye size={14} />}
            >
              Request Demo
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start sm:w-1/2">
          <h1 className="text-2xl font-bold mb-2">Smart Padlock</h1>
          <p className="text-lg font-semibold mb-2">₹150.00</p>
          <p className="text-md font-semibold mb-2">SKU: 0001</p>

          <p className="text-md font-bold mb-4">
            Smart, Wireless, Keyless. Any environment.
          </p>
          <div className="mb-4">
            <Select
              label="Shackle Size"
              placeholder="select"
              data={["20mm", "50mm", "100mm"]}
            />
          </div>
          <div className="mb-4">
            <NumberInput label="Quantity" placeholder="1" />
          </div>
          <div className="mb-4 border ">
            <div className="border-graay border-solid p-6">
              <label htmlFor="price-options" className="block mb-1">
                Price Options
              </label>
              <div id="price-options" className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="basic"
                  name="price"
                  defaultValue="basic"
                  className="mr-2"
                />
                <label htmlFor="basic">
                  Basic ₹150.00 every year for 2 years
                </label>
              </div>
            </div>
          </div>
          <Button color="blue" variant="filled" className="w-60">
            Subscribe Now
          </Button>
        </div>
      </div>
      <div className="max-container w-[800px]">
        <Demo />
        <Tabs variant="pills" defaultValue="gallery">
          <Tabs.List>
            <Tabs.Tab
              value="gallery"
              className="border border-solid border-primary1"

              // leftSection={<IconPhoto style={iconStyle} />}
            >
              Product Info
            </Tabs.Tab>
            <Tabs.Tab
              value="messages"
              className="border border-solid border-primary1"

              // leftSection={<IconMessageCircle style={iconStyle} />}
            >
              Specifications
            </Tabs.Tab>
            <Tabs.Tab
              value="settings"
              className="border border-solid border-primary1"

              // leftSection={<IconSettings style={iconStyle} />}
            >
              FAQ
            </Tabs.Tab>
            <Tabs.Tab
              value="certification"
              className="border border-solid border-primary1"

              // leftSection={<IconSettings style={iconStyle} />}
            >
              Certification & Warranty
            </Tabs.Tab>
            <Tabs.Tab
              value="downloads"
              className="border border-solid border-primary1"

              // leftSection={<IconSettings style={iconStyle} />}
            >
              Downloads
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>

          <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

          <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
        </Tabs>
      </div>
    </>
  );
};

export default ProductDetailPage;
