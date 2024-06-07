import { Card } from "@mantine/core";
import { clientsMarqueeUrl } from "../constants/index";

function Clients() {
  return (
    <div className="flex flex-col w-full">
      <div className="h-[100px] bg-primary1 w-full">
        <p className="flex h-[100px] justify-center align-middle items-center font-bold text-4xl text-gray-200">
          Working With the Best Clients and Partners
        </p>
      </div>

      <div className="grid grid-cols-5 align-middle justify-center gap-6  mt-14 px-36 items-center">
        {clientsMarqueeUrl.map((client) => (
          <Card shadow="sm" padding="xl" radius="md" withBorder>
            <Card.Section>
              <img
                src={client.href}
                height={180}
                width={300}
                alt="lock"
                className="content-center"
              />
            </Card.Section>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Clients;
