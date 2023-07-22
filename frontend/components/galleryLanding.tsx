import React from "react";
import Cm from "./cm";

const Ruler = () => {
  return (
    <div id="ruler" className="absolute top-0 left-0 ">
      <Cm />
      <Cm />
      <Cm />
      <Cm />
      <Cm />
    </div>
  );
};

export const GalleryLanding = () => {
  return (
    <div className="w-full h-full grid grid-flow-dense relative">
      <div className="relative">
        <Ruler />
        <div className="grid grid-cols-4 h-full relative" id="image">
          <div className="bg-[url('/images/gallery/gal1.jpg')] bg-cover"></div>
          <div className="bg-[url('/images/gallery/gal2.jpg')] bg-cover"></div>
          <div className="bg-[url('/images/gallery/gal3.jpg')] bg-cover"></div>
          <div className="bg-[url('/images/gallery/gal4.jpg')] bg-cover"></div>
        </div>
      </div>
      <div className="relative">
        <Ruler />
        <div className="grid grid-cols-4 h-full " id="image">
          <div className="bg-[url('/images/gallery/gal5.jpg')] bg-cover"></div>
          <div className="bg-[url('/images/gallery/gal6.jpg')] bg-cover"></div>
          <div className="bg-[url('/images/gallery/gal7.jpg')] bg-cover"></div>
          <div className="bg-[url('/images/gallery/gal8.jpg')] bg-cover"></div>
        </div>
      </div>
    </div>
  );
};
