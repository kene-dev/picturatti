import React from "react";
import { FaRegHeart, FaLightbulb, FaStar, FaRegThumbsUp } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const points = [
  {
    id: 1,
    icon: <FaRegHeart className="w-7 h-7" />,
    title: "Corporate headshots",
    text: "Professional corporate headshots to make a lasting impression. Perfect for enhancing your company profile, LinkedIn presence, and business portfolios. Capture your professionalism with our expertly styled and high-quality headshots.",
  },
  {
    id: 2,
    icon: <IoDiamondOutline className="w-7 h-7" />,
    title: "Portrait photography",
    text: "Elevate your personal brand with our portrait photography services. Whether for personal enjoyment or professional use, our portraits are designed to showcase your unique personality and style. Let us help you create stunning, timeless images that capture your essence.",
  },
  {
    id: 3,
    icon: <FaLightbulb className="w-7 h-7" />,
    title: "Engagement shoots",
    text: "Capture the magic of your engagement with our bespoke photography sessions. Let us document your love story through beautiful, intimate photos that you'll cherish forever. Celebrate this special moment with a shoot that reflects your unique relationship and joy.",
  },
  {
    id: 4,
    icon: <FaRegComment className="w-7 h-7" />,
    title: "Special events",
    text: "Immortalize the highlights of your special events with professional photography. From birthdays and graduations to corporate gatherings and festive celebrations, we ensure every significant moment is captured with elegance and flair. Trust us to preserve the memories of your most cherished occasions.",
  },
  {
    id: 5,
    icon: <FaStar className="w-7 h-7" />,
    title: "Real Estate",
    text: "Showcase your property in the best light with our real estate photography services. Specializing in high-quality, detailed images that highlight the unique features and appeal of your listings, we help attract potential buyers with visually compelling photographs. Elevate your real estate marketing with professional imagery that stands out.",
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

      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="text-white text-center text-sm bg-red-400/90 p-4 w-full lg:w-1/4 hover:bg-transparent hover:border-red-400 hover:border-2 duration-500 uppercase"
      >
        Get in Touch
      </Link>
    </div>
  );
};

export default Reasons;
