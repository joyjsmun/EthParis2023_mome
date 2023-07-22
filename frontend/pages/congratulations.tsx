"use client";

import Countdown from "@/components/countdown";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

export default function Congratulations() {
  return (
    <div className="h-screen w-screen bg-[url('/images/congratCover.jpg')] overflow-hidden bg-cover absolute top-0 opacity-95 ">
      <div className="flex flex-col items-center justify-center absolute h-screen w-[50%] m-auto left-0 right-0 top-0 bottom-0">
        <Countdown />
        <div className="flex items-center mt-10 relative h-[5.5rem] w-[36rem]">
          <div className="absolute h-20 w-20 border-none rounded-full ml-1 bg-blue-500"></div>
          <div className="absolute h-20 w-20 border-none rounded-full ml-1 bg-green-500 left-[2.5rem]"></div>
          <div className="absolute h-20 w-20 border-none rounded-full ml-1 bg-yellow-500 left-[5rem]"></div>
          <div className="absolute h-20 w-20 border-none rounded-full ml-1 bg-purple-500 left-[7.5rem]"></div>
          <div className="absolute h-20 w-20 border-none rounded-full ml-1 bg-black left-[10rem]"></div>
          <div className="absolute h-20 w-20 border-none rounded-full ml-1 bg-orange-500 left-[12.5rem]"></div>
          <div className="absolute h-20 w-20 border-none rounded-full ml-1 bg-yello-300 left-[15rem]"></div>
          <div className="absolute h-20 w-20 border-none rounded-full ml-1 left-[17.5rem] bg-cover bg-[url('/images/user.png')]"></div>
          <div className="absolute h-20 w-20 border-none rounded-full ml-1 bg-brown left-[20rem]"></div>
          <div className="flex items-center justify-center absolute h-20 w-[30%] ml-1 bg-brown right-0">
            <p className="w-full text-center align-middle text-white">
              +50 Joined
            </p>
          </div>
        </div>
      </div>
      <section>
        <FlyAwayComponent />
      </section>
    </div>
  );
}

const Smiley = () => (
  <svg
    width="257"
    height="256"
    viewBox="0 0 257 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.997 216.669C-12.7362 168.246 -9.74542 92.7288 38.6771 47.9956L56.3303 31.6874C104.753 -13.0458 180.271 -10.055 225.004 38.3675C269.737 86.7901 266.746 162.308 218.324 207.041L200.67 223.349C152.248 268.082 76.7302 265.092 31.997 216.669Z"
      fill="black"
    />
    <ellipse
      cx="139.184"
      cy="117.478"
      rx="103.442"
      ry="105.597"
      fill="#FFC309"
    />
    <ellipse
      cx="157.789"
      cy="70.7016"
      rx="16.1628"
      ry="23.7055"
      transform="rotate(-37.3198 157.789 70.7016)"
      fill="black"
    />
    <ellipse
      cx="95.2929"
      cy="109.494"
      rx="16.1628"
      ry="23.7055"
      transform="rotate(-37.3198 95.2929 109.494)"
      fill="black"
    />
    <path
      d="M109.069 159.607L194.284 106.473C196.034 105.381 198.311 105.812 199.407 107.559C205.939 117.968 223.846 153.251 186.595 179.974C144.556 210.133 115.694 175.957 107.898 164.882C106.655 163.116 107.236 160.749 109.069 159.607Z"
      fill="black"
    />
  </svg>
);

const FlyAwayComponent = () => {
  return (
    <div>
      <motion.div
        className="h-[100px] w-[100px] opacity-0"
        animate={{
          opacity: [0, 0.5, 1],
          x: ["0vw", "110vw"],
          y: ["110vh", "-50vh"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          // add a cubic-bezier function for easing
          ease: [0.45, 0.27, 0.05, 0.95], // this represents the "ease-in-out" function
        }}
      >
        <Smiley />
      </motion.div>
      <motion.div
        className="h-[100px] w-[100px] opacity-0"
        animate={{
          opacity: [0, 0.5, 1],
          x: ["-10vw", "50vw"],
          y: ["30vh", "-60vh"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          // add a cubic-bezier function for easing
          ease: [0.45, 0.27, 0.05, 0.95], // this represents the "ease-in-out" function
        }}
      >
        <Smiley />
      </motion.div>
      <motion.div
        className="h-[100px] w-[100px] opacity-0"
        animate={{
          opacity: [0, 0.5, 1],
          x: ["-20vw", "100vw"],
          y: ["100vh", "-60vh"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          // add a cubic-bezier function for easing
          ease: [0.42, 0, 0.58, 1], // this represents the "ease-in-out" function
        }}
      >
        <Smiley />
      </motion.div>
    </div>
  );
};
