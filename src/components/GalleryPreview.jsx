import React from "react";
import elise from "../assets/gallery/elise.jpg";
import smiling from "../assets/gallery/smiling.jpg";
import sunset from "../assets/gallery/sunset.JPG";
import { motion } from "framer-motion";

const GalleryPreview = () => {
  const textAnimate = {
    offScreen: { x: 100, opacity: 0 },
    onScreen: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, bounce: 0.4, type: "linear" },
    },
  };
  const imageAnimate = {
    offScreen: { y: 100, opacity: 0 },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 3, type: "spring", bounce: 0.4 },
    },
  };
  return (
    <motion.div
      id="gallery"
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.5 }}
      className="w-full flex flex-col gap-14 items-center justify-center py-24 px-5"
    >
      <h1 className="text-white text-3xl">MY RECENT WORKS</h1>
      <div className="w-full lg:w-[90%] h-max mx-auto flex flex-col lg:flex-row items-start gap-5 text-white">
        <div className="w-full h-max flex flex-col items-start gap-12">
          {/* Top Image */}
          <div className="w-full h-max flex flex-col items-start gap-5">
            <motion.img
              variants={imageAnimate}
              src={elise}
              className="w-full h-[400px] object-cover transform hover:-translate-y-8 duration-300 cursor-pointer"
            />
            <motion.h1 variants={textAnimate} className="text-xl font-bold ">
              GRADUATION
            </motion.h1>
            <motion.p
              variants={textAnimate}
              className="w-full flex items-center gap-3"
            >
              - <span>sep 24, 2021</span> / <span>in people, portraits</span>
            </motion.p>
          </div>

          {/* Bottom Image */}
          <div className="w-full h-max flex flex-col items-start gap-5">
            <motion.img
              variants={imageAnimate}
              src={smiling}
              className="w-full h-[400px] object-cover"
            />
            <h1 className="text-xl font-bold ">KEEP SMILING</h1>
            <p className="w-full h-full flex items-center gap-3">
              - <span>sep 24, 2021</span> / <span>in people, portraits</span>
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full h-max flex flex-col items-start gap-5">
            <motion.img
              variants={imageAnimate}
              src={sunset}
              className="w-full h-full object-cover"
            />
            <h1 className="text-xl font-bold ">SUNSET LOVE</h1>
            <p className="w-full flex items-center gap-3">
              - <span>sep 24, 2021</span> / <span>in people, portraits</span>
            </p>
          </div>
        </div>
      </div>

      <button className="text-white bg-red-400/90 p-4 w-full lg:w-1/5 hover:bg-transparent hover:border-red-400 hover:border-2 duration-500 uppercase text-sm ">
        View More
      </button>
    </motion.div>
  );
};

export default GalleryPreview;
