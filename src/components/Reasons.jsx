import React from "react";
import { FaRegHeart, FaLightbulb, FaStar, FaRegThumbsUp } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const points = [
  {
    id: 1,
    icon: <FaRegHeart className="w-7 h-7" />,
    title: "Corporate headshots",
    text: "Phasellus euismod aliquet condimentum. Curabitur vitae posuere nisl. Nunc in felis sagittis, venenatis sem sit amet, elementum urna. Morbi scelerisque.",
  },
  {
    id: 2,
    icon: <IoDiamondOutline className="w-7 h-7" />,
    title: "Portrait photography",
    text: "Phasellus euismod aliquet condimentum. Curabitur vitae posuere nisl. Nunc in felis sagittis, venenatis sem sit amet, elementum urna. Morbi scelerisque.",
  },
  {
    id: 3,
    icon: <FaLightbulb className="w-7 h-7" />,
    title: "Engagement shoots",
    text: "Phasellus euismod aliquet condimentum. Curabitur vitae posuere nisl. Nunc in felis sagittis, venenatis sem sit amet, elementum urna. Morbi scelerisque.",
  },
  {
    id: 4,
    icon: <FaRegComment className="w-7 h-7" />,
    title: "Special events",
    text: "Phasellus euismod aliquet condimentum. Curabitur vitae posuere nisl. Nunc in felis sagittis, venenatis sem sit amet, elementum urna. Morbi scelerisque.",
  },
  {
    id: 5,
    icon: <FaStar className="w-7 h-7" />,
    title: "Real Estate",
    text: "Phasellus euismod aliquet condimentum. Curabitur vitae posuere nisl. Nunc in felis sagittis, venenatis sem sit amet, elementum urna. Morbi scelerisque.",
  },
  {
    id: 6,
    icon: <FaRegThumbsUp className="w-7 h-7" />,
    title: "Passion",
    text: "Phasellus euismod aliquet condimentum. Curabitur vitae posuere nisl. Nunc in felis sagittis, venenatis sem sit amet, elementum urna. Morbi scelerisque.",
  },
];

const Reasons = () => {
  const textAnimate = {
    offScreen: { x: 100, opacity: 0 },
    onScreen: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, bounce: 0.4, type: "linear" },
    },
  };

  return (
    <div
      id="why"
      className="w-full lg:w-[90%] 2xl:w-[70%] h-max mx-auto flex flex-col gap-10 items-center justify-center px-5 lg:px-20 text-white mb-28"
    >
      <h1 className="text-3xl">Reasons to Choose My Services</h1>
      <motion.div
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
        className="w-full h-max flex flex-wrap items-center gap-14"
      >
        {points.map((item) => (
          <motion.div
            variants={textAnimate}
            key={item.id}
            className=" w-full lg:w-[300px] flex flex-grow flex-col gap-6"
          >
            <div className="w-full flex items-center gap-6 uppercase text-lg">
              {item.icon}
              <p className="w-full flex items-center gap-4">
                <span>{item.id}</span> - <span>{item.title}</span>
              </p>
            </div>

            <p className="text-base font-thin">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <button className="text-white text-sm bg-red-400/90 p-4 w-full lg:w-1/4 hover:bg-transparent hover:border-red-400 hover:border-2 duration-500 uppercase ">
        Get in Touch
      </button>
    </div>
  );
};

export default Reasons;
