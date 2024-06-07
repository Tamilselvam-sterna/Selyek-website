import { Badge, Button, Card, Group } from "@mantine/core";

function Products() {
  return (
    <>
      <div className="h-[100px] mb-12 bg-primary1 w-full">
        <p className="flex h-[100px] justify-center align-middle items-center font-bold text-4xl text-gray-200">
          New Product Releases
        </p>
      </div>

      <div className="flex justify-center space-x-16">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <img src="/lock.jpg" height={160} alt="lock" />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <p>Smart Padlock</p>
            <Badge variant="dot" color="teal" size="lg">
              price $ 150
            </Badge>{" "}
          </Group>

          <Button color="blue" fullWidth mt="md" radius="md">
            Buy now
          </Button>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <img src="/lock.jpg" height={160} alt="lock" />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <p>Smart Padlock</p>
            <Badge variant="dot" color="teal" size="lg">
              price $ 150
            </Badge>{" "}
          </Group>

          <Button color="blue" fullWidth mt="md" radius="md">
            Buy now
          </Button>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <img src="/lock.jpg" height={160} alt="lock" />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <p>Smart Padlock</p>
            <Badge variant="dot" color="teal" size="lg">
              price $ 150
            </Badge>
          </Group>

          <Button color="blue" fullWidth mt="md" radius="md">
            Buy now
          </Button>
        </Card>
      </div>
    </>
  );
}

export default Products;
