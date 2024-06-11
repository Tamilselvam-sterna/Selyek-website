import { Badge, Button, Card, Group } from "@mantine/core";

function Products() {
  return (
    <>
      <div className="h-[100px] bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 w-full">
        <p className="flex h-[100px] justify-center items-center font-bold text-4xl text-gray-700">
          New Product Releases
        </p>
      </div>
      <div className="relative px-6 py-4 space-y-4 container max-container  flex flex-1 flex-col items-center justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <img
                src="/lock.jpg"
                alt="lock"
                className="w-full h-[180px] object-contain"
              />
            </Card.Section>
            <Group mt="md" mb="xs">
              <p>Smart Padlock</p>
              <Badge variant="dot" color="teal" size="lg">
                $150
              </Badge>
            </Group>
            <Button color="blue" fullWidth mt="md" radius="md">
              Buy now
            </Button>
          </Card>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <img
                src="/lock.jpg"
                alt="lock"
                className="w-full h-[180px] object-contain"
              />
            </Card.Section>
            <Group mt="md" mb="xs">
              <p>Smart Padlock</p>
              <Badge variant="dot" color="teal" size="lg">
                $150
              </Badge>
            </Group>
            <Button color="blue" fullWidth mt="md" radius="md">
              Buy now
            </Button>
          </Card>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <img
                src="/lock.jpg"
                alt="lock"
                className="w-full h-[180px] object-contain"
              />
            </Card.Section>
            <Group mt="md" mb="xs">
              <p>Smart Padlock</p>
              <Badge variant="dot" color="teal" size="lg">
                $150
              </Badge>
            </Group>
            <Button color="blue" fullWidth mt="md" radius="md">
              Buy now
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Products;
