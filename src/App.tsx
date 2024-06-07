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
          {/* <div className="bg-[url('./assets/wave-top.svg')] w-full h-[100px] lg:h-[150px] bg-no-repeat bg-cover" /> */}
          <section
            id="services"
            className="h-[800px] bg-textColor flex flex-col space-y-8 justify-center items-center"
          >
            <Services />
          </section>
          <section
            id="clients"
            className="h-[800px] bg-textColor flex flex-col space-y-8 justify-center items-center"
          >
            <Clients />
          </section>
          {/* <div className="bg-[url('./assets/wave-bottom.svg')] w-full h-[100px] lg:h-[150px] bg-no-repeat bg-cover" /> */}
          <section
            id="products"
            className="h-[800px] bg-textColor  flex flex-col w-full spce-y-8 justify-center items-center"
          >
            <Products />
          </section>
          {/* <div className="bg-[url('./assets/wave-top.svg')] w-full h-[100px] lg:h-[150px] bg-no-repeat bg-cover" /> */}
          <section
            id="about-us"
            className="bg-textColor min-h-dvh flex flex-col justify-center items-center"
          >
            <AboutUs />
          </section>
          {/* <div className="bg-[url('./assets/wave-bottom.svg')] w-full h-[100px] lg:h-[150px] bg-no-repeat bg-cover" /> */}
          <section
            id="contact-us"
            className=" bg-textColor min-h-dvh flex flex-col justify-center items-center"
          >
            <ContactUs />
          </section>
          {/* <div className="bg-[url('./assets/wave-top.svg')] w-full h-[100px] lg:h-[150px] bg-no-repeat bg-cover" /> */}
          <section
            id="join-us"
            className="min-h-dvh bg-textColor flex justify-center items-center"
          ></section>
          {/* <div className="bg-[url('./assets/wave-bottom.svg')] w-full h-[100px] lg:h-[150px] bg-no-repeat bg-cover" /> */}
          <section className="h-[350px] bg-graay  flex justify-center items-center">
            <Footer />
          </section>
        </MantineProvider>
      </main>
    </>
  );
}
