import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo from "../assets/picturatti_logo.svg";
import { Link } from "react-scroll";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="w-full h-max flex lg:items-center items-start justify-between bg-transparent absolute top-5 z-40 lg:px-10 px-5 p-2">
      <div className="flex items-center gap-2">
        <Sheet open={openMenu} onOpenChange={setOpenMenu}>
          <SheetTrigger>
            <HiMenuAlt2 className="text-white h-10 lg:w-12 w-9" />
          </SheetTrigger>
          <SheetTrigger>
            <p className="text-white font-bold lg:text-base text-sm lg:block hidden">
              MENU
            </p>
          </SheetTrigger>
          <SheetContent className="bg-red-400/90" side={"left"}>
            <nav>
              <ul className="w-full flex flex-col gap-4 mt-10">
                <Link
                  onClick={() => setOpenMenu(false)}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="mr-7 p-3 text-lg text-white hover:bg-white hover:text-black hover:font-bold"
                >
                  Home
                </Link>
                <Link
                  onClick={() => setOpenMenu(false)}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="mr-7 p-3 text-lg text-white hover:bg-white hover:text-black hover:font-bold"
                >
                  About
                </Link>
                <Link
                  onClick={() => setOpenMenu(false)}
                  to="why"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="mr-7 p-3 text-lg text-white hover:bg-white hover:text-black hover:font-bold"
                >
                  Why Us
                </Link>
                <Link
                  onClick={() => setOpenMenu(false)}
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="mr-7 p-3 text-lg text-white hover:bg-white hover:text-black hover:font-bold"
                >
                  Gallery
                </Link>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <div className="lg:w-24 w-16 lg:h-20 h-14">
        <img src={logo} className="object-cover h-full w-full" />
      </div>
      <div className="lg:flex hidden items-center gap-4 ">
        <FaInstagram className="w-5 h-5 text-white" />
        <BsTwitterX className="w-5 h-5 text-white" />
      </div>
    </div>
  );
};

export default Navbar;
