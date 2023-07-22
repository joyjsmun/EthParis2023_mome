import React from "react";

import Cm from "./cm";

// import { MemoriesGroup } from "../atoms/memoriesGroup";

const Ruler = () => {
  return (
    <div id="ruler2" className="absolute top-0 left-0 ">
      <Cm />
      <Cm />
      <Cm />
      <Cm />
      <Cm />
      <Cm />
    </div>
  );
};

const MemoriesGroup = () => {
  return (
    <>
      <div className="bg-[url('/images/gallery/gal1.jpg')] bg-cover "></div>
      <div className="bg-[url('/images/gallery/gal2.jpg')] bg-cover"></div>
      <div className="bg-[url('/images/gallery/gal3.jpg')] bg-cover"></div>
      <div className="bg-[url('/images/gallery/gal4.jpg')] bg-cover"></div>
      <div className="bg-[url('/images/gallery/gal5.jpg')] bg-cover"></div>
      <div className="bg-[url('/images/gallery/gal6.jpg')] bg-cover"></div>
      <div className="bg-[url('/images/gallery/gal7.jpg')] bg-cover"></div>
      <div className="bg-[url('/images/gallery/gal8.jpg')] bg-cover"></div>
      <div className="bg-[url('/images/gallery/gal9.jpg')] bg-cover"></div>
      <div className="bg-[url('/images/gallery/gal10.jpg')] bg-cover"></div>
      <div className="bg-[url('/images/gallery/gal11.jpg')] bg-cover"></div>
      <div className="bg-[url('/images/gallery/gal12.jpg')] bg-cover"></div>
    </>
  );
};

export const GalleryMemories = () => {
  return (
    <div className="w-full h-full grid grid-flow-dense relative">
      <div className="relative w-full h-full">
        <div className="h-full relative">
          <div className="grid grid-cols-6  h-full relative">
            <MemoriesGroup />
            <MemoriesGroup />
            <MemoriesGroup />
            <MemoriesGroup />
          </div>
        </div>
        <Ruler />
      </div>
    </div>
  );
};
