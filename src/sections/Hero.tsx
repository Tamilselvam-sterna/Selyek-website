import { Variants, motion } from "framer-motion";

const heroSectionVariant: Variants = {
  initial: {
    x: -500,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.3,
    },
  },
};

function Hero() {
  return (
    <div className="relative px-6 py-4 space-y-4 container max-container min-h-dvh flex flex-1 flex-col items-center justify-center ">
      <div className="absolute bg-yellow-500 top-64 right-10 md:top-96 md:right-56 lg:top-48 lg:right-28 w-[200px] h-[200px] rounded-full mix-blend-hard-light filter blur-xl opacity-40  animate-blob animation-delay-200" />
      <div className="absolute bg-pink-500 top-52 left-10 md:top-80 md:left-48 lg:top-52 lg:left-36 w-[200px] h-[200px] rounded-full mix-blend-hard-light filter blur-xl opacity-40  animate-blob " />
      <div className="absolute bg-purple-600 top-60  right-12 md:top-72 md:right-56 lg:top-60 lg:left-[670px] w-[200px] h-[200px] rounded-full mix-blend-hard-light filter blur-xl opacity-40  animate-blob animation-delay-400" />
      <div className="absolute bg-cyan-600 top-72 left-16 md:top-72 md:left-56 lg:top-[440px] lg:left-96 w-[200px] h-[200px] rounded-full mix-blend-hard-light filter blur-xl opacity-40  animate-blob animation-delay-600" />
      <div className="absolute bg-orange-600 top-80 right-24 md:top-[400px] md:right-80 lg:top-[500px] lg:right-96 w-[200px] h-[200px] rounded-full mix-blend-hard-light filter blur-xl opacity-40  animate-blob animation-delay-200" />

      <motion.div
        variants={heroSectionVariant}
        initial="initial"
        animate="animate"
        className="relative space-y-4 opacity-0"
      >
        <motion.div
          variants={heroSectionVariant}
          className="max-sm:mt-10 px-5 py-2 text-5xl font-bold tracking-wide font-gabarito antialiased text-center text-primary "
        >
          {/* <motion.span
            variants={heroSectionVariant}
            className="relative after:absolute after:-bottom-11 after:left-0 after:h-11 after:w-full after:rounded-t-[20%] after:border-t-4 after:border-red-500 after:content-['']"
          >
            Safeguarding
          </motion.span>{" "} */}
          We deliver products that help secure the world
        </motion.div>
        <motion.div
          variants={heroSectionVariant}
          className=" px-5 md:px-10 py-2 md:py-4 text-center leading-normal font-medium tracking-normal md:tracking-wide text-primary font-montserrat  md:text-lg max-w-screen-lg"
        >
          Discover advanced security solutions tailored for your business. Our
          cutting-edge technologies, including electromechanical locks, safe
          lock systems, and cabinet controllers, ensure top-tier protection.
          Experience precise product monitoring and access control through
          streamlined CRM applications.
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
