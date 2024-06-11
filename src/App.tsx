import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import Clients from "./sections/OurClients";
import { Hero, AboutUs, Products, Services, ContactUs } from "./sections/index";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export default function App() {
  return (
    <>
      <main className="relative">
        <MantineProvider>
          <Navbar />
          <section id="#" className="bg-textColor">
            <Hero />
          </section>
          <section
            id="services"
            className=" min-h-dvh bg-textColor flex flex-col  justify-center items-center"
          >
            <Services />
          </section>
          <section
            id="clients"
            className="min-h-dvh bg-textColor flex flex-col justify-center items-center"
          >
            <Clients />
          </section>
          <section
            id="products"
            className="min-h-dvh bg-textColor  flex flex-col w-full  justify-center items-center"
          >
            <Products />
          </section>
          <section
            id="about-us"
            className="min-h-dvh bg-textColor  flex flex-col justify-center items-center"
          >
            <AboutUs />
          </section>
          <section
            id="contact-us"
            className=" bg-textColor min-h-dvh flex flex-col justify-center items-center"
          >
            <ContactUs />
          </section>

          <section className="h-[350px] bg-textColor  flex justify-center items-center  border-t border-graay">
            <Footer />
          </section>
        </MantineProvider>
      </main>
    </>
  );
}
