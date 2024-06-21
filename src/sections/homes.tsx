import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Hero from "./Hero";
import Clients from "./OurClients";
import Products from "./Products";
import Services from "./Services";

export default function Home() {
  return (
    <div>
      <section id="#" className="min-h-dvh bg-white w-full">
        <Hero />
      </section>
      <section
        id="services"
        className="h-[700px] bg-white flex flex-col  justify-evenly items-center"
      >
        <Services />
      </section>
      <section
        id="clients"
        className="h-[600px] bg-white flex flex-col justify-center items-center"
      >
        <Clients />
      </section>
      <section
        id="products"
        className="h-[600px] bg-white  flex flex-col w-full  justify-center items-center"
      >
        <Products />
      </section>
      <section
        id="about-us"
        className="min-h-dvh bg-white  flex flex-col justify-center items-center"
      >
        <AboutUs />
      </section>
      <section
        id="contact-us"
        className="min-h-dvh bg-white  flex flex-col justify-center items-center"
      >
        <ContactUs />
      </section>

      <section className="h-[350px] bg-white  flex justify-center items-center  border-t border-graay">
        <Footer />
      </section>
    </div>
  );
}
