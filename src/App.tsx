import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <main className="relative">
        <MantineProvider>
          <Outlet />
        </MantineProvider>
      </main>
    </>
  );
}
