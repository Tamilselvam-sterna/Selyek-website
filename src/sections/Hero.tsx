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
    <div className="relative px-60 py-4 space-y-4  min-h-dvh flex flex-1 flex-col  justify-center bg-[url('/1.jpg')] w-screen object-cover">
      {/* <div className="absolute bg-yellow-500 top-64 right-10 md:top-96 md:right-56 lg:top-48 lg:right-28 w-[200px] h-[200px] rounded-full mix-blend-hard-light filter blur-xl opacity-40  animate-blob animation-delay-200" />
      <div className="absolute bg-pink-500 top-52 left-10 md:top-80 md:left-48 lg:top-52 lg:left-36 w-[200px] h-[200px] rounded-full mix-blend-hard-light filter blur-xl opacity-40  animate-blob " />
      <div className="absolute bg-purple-600 top-60  right-12 md:top-72 md:right-56 lg:top-60 lg:left-[670px] w-[200px] h-[200px] rounded-full mix-blend-hard-light filter blur-xl opacity-40  animate-blob animation-delay-400" />
      <div className="absolute bg-cyan-600 top-72 left-16 md:top-72 md:left-56 lg:top-[440px] lg:left-96 w-[200px] h-[200px] rounded-full mix-blend-hard-light filter blur-xl opacity-40  animate-blob animation-delay-600" />
      <div className="absolute bg-orange-600 top-80 right-24 md:top-[400px] md:right-80 lg:top-[500px] lg:right-96 w-[200px] h-[200px] rounded-full mix-blend-hard-light filter blur-xl opacity-40  animate-blob animation-delay-200" /> */}
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
