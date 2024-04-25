import React, { useEffect, useState } from "react";
import slide1 from "../assets/slides/slide1.JPG";
import slide2 from "../assets/slides/slide2.jpg";
import slide3 from "../assets/slides/slide3.JPG";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Navbar from "./Navbar";

const Carousel = () => {
  const slides = [slide1, slide2, slide3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Clear the interval when the component unmounts
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };
  return (
    <div id="home" className="w-screen h-screen relative">
      <Navbar />
      <div className="w-full h-full flex items-center justify-center ">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            className={`w-full h-full object-cover absolute z-10 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}
        <div
          className={`absolute ${
            currentSlide === 0 ? "bg-transparent" : ""
          }  z-20 w-full h-full bg-black/40 flex items-center justify-between lg:px-10 px-5`}
        >
          <div className="w-2/3 lg:w-1/2 flex flex-col gap-10">
            <h1 className="text-white font-bold text-3xl lg:text-5xl 2xl:text-7xl tracking-wider flex flex-col gap-5">
              PICTURATTI <br />
              <span className="font-normal">photography studio</span>
              <span className="text-sm font-normal">
                create | capture | cherish
              </span>
            </h1>

            <button className="text-white bg-red-400/90 p-4 w-full lg:w-1/3 hover:bg-transparent hover:border-red-400 hover:border-2 duration-500 ">
              View More
            </button>
          </div>

          <div className="w-[7%] lg:w-[5%] flex flex-col gap-12">
            <MdOutlineArrowBackIosNew
              onClick={prevSlide}
              className="w-5 h-5 2xl:w-7 2xl:h-7 text-white cursor-pointer"
            />
            <MdOutlineArrowForwardIos
              onClick={nextSlide}
              className="w-5 h-5 2xl:w-7 2xl:h-7 text-white cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
