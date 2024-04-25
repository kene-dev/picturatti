import React from "react";
import library from "../assets/Noir/library.jpg";
import { MdRemoveRedEye } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const reasons = [
  { text: "CREATIVE", icon: <MdRemoveRedEye className="w-4 h-4 text-white" /> },
  { text: "INSIGHT", icon: <MdRemoveRedEye className="w-4 h-4 text-white" /> },
  { text: "QUALITY", icon: <FaStar className="w-4 h-4 text-white" /> },
];

const About = () => {
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
      id="about"
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.5 }}
      className="w-full lg:w-[90%] 2xl:w-[70%] mx-auto h-max px-5 lg:px-20 lg:flex items-start justify-center gap-20 my-36"
    >
      <div className="w-full flex flex-col items-start gap-8">
        <h1 className="w-full text-3xl tracking-widest text-white">
          It All Started With Picture
        </h1>

        <motion.p
          variants={textAnimate}
          className="text-white text-sm tracking-wider"
        >
          Welcome to Picturatti, where every image tells a story! I'm Ike, lover
          of art and photography. My journey behind the camera began with a
          single snapshot—a moment so captivating it stirred something deep
          within me. Since then, I've followed my passion of capturing life's
          fleeting beauty.
          <br /> <br /> With each click of the shutter, I aim to capture the
          emotions, stories, and essence of the world around us. From the quiet
          serenity of nature to the bustling energy of city streets, every scene
          holds its own tale waiting to be told.
        </motion.p>

        <motion.div
          variants={textAnimate}
          className="w-full flex items-center justify-between lg:justify-start lg:gap-10"
        >
          {reasons.map((reason, i) => (
            <div key={i} className="flex items-center gap-4 text-white">
              <p className="text-sm">{reason.text}</p>
              <div className="w-10 h-10 bg-gray-600 flex items-center justify-center">
                {reason.icon}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.p
          variants={textAnimate}
          className="text-sm text-white tracking-wider"
        >
          Through Picturatti, I invite you to join me on this visual adventure.
          Let's work together, to capture the hidden gems and everyday miracles
          that make your life so remarkable. So, let's embark on a journey of
          discovery through the lens of Picturatti.
        </motion.p>
      </div>
      <div className="w-full h-[500px] relative">
        <div className="custom-overlay absolute w-2/3 lg:h-full h-2/3 -z-10 -right-2 lg:-top-6 top-9"></div>
        <motion.img
          variants={imageAnimate}
          src={library}
          className="object-contain w-full h-full "
        />
      </div>
    </motion.div>
  );
};

export default About;
