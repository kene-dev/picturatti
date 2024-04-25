import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-max lg:h-[200px] flex items-center justify-center py-10 border-t-[.8px] border-white/60 text-white text-sm">
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-5">
        <div className="w-full flex items-center flex-col lg:items-start lg:justify-center lg:text-left gap-3 lg:px-10">
          <h1>liza@pixel-mafia.com</h1>
          <h1>© Copyright 2024 picturati. All Rights Reserved.</h1>
        </div>
        <div className="w-full flex flex-col items-center lg:items-end lg:justify-center lg:text-right gap-3 lg:px-10">
          <h1>252 Edison St. Salt Lake City, Utah</h1>
          <h1>801 467 2207</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
