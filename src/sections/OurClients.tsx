import { SimpleGrid } from "@mantine/core";
import { clientsMarqueeUrl } from "../constants/index";

function Clients() {
  return (
    <>
      <div className="h-[100px] bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 w-full">
        <p className="flex h-[100px] justify-center items-center font-bold text-4xl text-gray-700">
          Working With the Best Clients and Partners
        </p>
      </div>

      <div className="relative px-6 py-4 space-y-4 container max-container  flex flex-1 flex-col items-center justify-center ">
        <SimpleGrid cols={3} spacing={"xl"}>
          {clientsMarqueeUrl.map((client, index) => (
            <div className="bg-white rounded-lg">
              <img
                src={client.href}
                alt="client "
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          ))}
        </SimpleGrid>
      </div>
    </>
  );
}

export default Clients;
