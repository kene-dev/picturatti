import { useState } from "react";
import Carousel from "./components/Carousel";
import About from "./components/About";
import prayer from "./assets/gallery/prayer.jpg";
import atronos from "./assets/Noir/atronos.jpg";
import hshot from "./assets/gallery/HeadshotBeiza.jpg";
import Reasons from "./components/Reasons";
import { motion } from "framer-motion";
import GalleryPreview from "./components/GalleryPreview";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const imageAnimate = {
    offScreen: { y: 100, opacity: 0 },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 3, type: "spring", bounce: 0.4 },
    },
  };
  return (
    <>
      {/* <Navbar /> */}
      <Carousel />
      <About />
      <motion.div
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
        className="w-full lg:w-[90%] 2xl:w-[70%] mx-auto flex flex-col lg:flex-row items-center px-5 lg:px-20 mt-80 mb-36 lg:gap-2 gap-5"
      >
        <motion.div variants={imageAnimate} className="w-full">
          <img
            src={prayer}
            className="h-[480px] w-full object-cover transform hover:-translate-y-4 duration-500 ease-out cursor-pointer"
          />
        </motion.div>
        <motion.div variants={imageAnimate} className="w-full">
          <img
            src={atronos}
            className="h-[480px] w-full object-cover lg:-mt-28 transform hover:-translate-y-4 duration-500 ease-out cursor-pointer"
          />
        </motion.div>
        <motion.div variants={imageAnimate} className="w-full">
          <img
            src={hshot}
            className="h-[480px] w-full object-cover transform hover:-translate-y-4 duration-500 ease-out cursor-pointer"
          />
        </motion.div>
      </motion.div>
      <Reasons />
      <section className="w-full bg-center bg-cover bg-no-repeat bg-[url('./assets/Candids/kids.jpg')] bg-gray-700 bg-blend-multiply my-24 px-2">
        <div className="px-4 mx-auto w-full text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Start Something New
          </h1>
          <p className="mb-8 text-sm font-normal text-gray-300 lg:text-sm sm:px-16 lg:px-48">
            I appreciate the raw reality of everyday life, the fleeting beauty
            of those in-between moments, and I do my very best to take every
            picture with that in mind. I want my viewers to relate to my
            photographs through recognition of and familiarity with the
            situations.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-y-0">
            <button className="text-white bg-red-400/90 p-4 w-full lg:w-1/4 hover:bg-transparent hover:border-red-400 hover:border-2 duration-500 uppercase text-sm ">
              Show My Works
            </button>
          </div>
        </div>
      </section>
      <GalleryPreview />
      <Footer />
    </>
  );
}

export default App;
