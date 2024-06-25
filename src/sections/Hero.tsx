import { Variants, motion } from "framer-motion";

const heroSectionVariant: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { ease: "easeIn" },
    },
  },
  exit: {
    opacity: 0,
    y: 10,
  },
};

function Hero() {
  return (
    <div className="relative px-60 py-4 space-y-4  min-h-dvh flex flex-1 flex-col items-center  justify-center bg-[url('/1.jpg')] w-screen object-cover">
      <motion.div
        variants={heroSectionVariant}
        initial="initial"
        animate="animate"
        className="relative space-y-4 opacity-0"
      >
        <motion.div
          variants={heroSectionVariant}
          className="max-sm:mt-10 px-5 py-2 text-5xl font-bold tracking-wide  antialiased  text-primary "
        >
          We provide solutions that
          <br />
          safeguard the world
        </motion.div>
        <motion.div
          variants={heroSectionVariant}
          className="  md:px-5 py-2 md:py-4   font-medium tracking-widest md:tracking-wide text-black font-beneton  md:text-lg lg:text-xl max-w-screen-lg lg:tracking-wider"
        >
          We design, manufacture, and supply high-security electromechanical{" "}
          <br />
          access control solutions globally, using the latest technology to meet
          <br />
          tough industrial challenges. Our robust systems integrate hardware{" "}
          <br />
          and software for secure and user-friendly solutions.
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
