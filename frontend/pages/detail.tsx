"use client";

import Link from "next/link";
import Image from "next/image";
import { Homemade_Apple } from "next/font/google";
// import { Gallery } from "@/components/molecules/galleryLanding";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import { useState } from "react";

const variants = {
  hidden: { opacity: 0.2, x: 0, y: -80 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0.2, x: -0, y: -80 },
};

const homemadeApple = Homemade_Apple({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Detail = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);

  const activeImageIndex = wrap(0, IMAGES.length, imageCount);

  const swipeToImage = (swipeDirection: any) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo: any) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 90;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = (imageId: any) => {
    let changeDirection = 0;
    if (imageId > activeImageIndex) {
      changeDirection = 1;
    } else if (imageId < activeImageIndex) {
      changeDirection = -1;
    }
    setImageCount([imageId, changeDirection]);
  };

  return (
    <AnimatePresence
      initial={true}
      onExitComplete={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0 });
        }
      }}
      mode="wait"
    >
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 1, type: "easeInOut" }}
        className="text-white h-screen w-full top-0"
      >
        <main className="absolute top-0 flex flex-col items-center h-[110vh] w-screen">
          <div className="flex flex-col items-center h-screen w-screen">
            <div className="relative overflow-hidden w-full h-full">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={imageCount}
                  style={{
                    backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`,
                  }}
                  custom={direction}
                  variants={sliderVariants}
                  initial="incoming"
                  animate="active"
                  exit="exit"
                  transition={sliderTransition}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                  className="absolute will-change-auto h-full w-screen bg-cover bg-no-repeat bg-center hover:cursor-pointer active:cursor-grabbing"
                >
                  <article className="flex justify-between flex-col pt-[10rem] h-[70vh]">
                    <h1
                      className={`px-[7rem] text-4xl ${homemadeApple.className}`}
                    >
                      @username
                    </h1>
                    <section className="flex justify-around items-end pl-[5rem] pr-20 mt-[16.5rem] pt-[5rem] pb-[3rem] border-none rounded-tr-[350px] w-[40%] bg-tp-sblue/80">
                      <div className="max-w-[26rem] justify-start">
                        <h2 className="text-3xl">
                          About{" "}
                          <span className="block font-thin mt-1">
                            This Image:
                          </span>
                        </h2>
                        <p className="leading-6 break-words mb-10 mt-6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <Link
                          href={"/"}
                          className="border rounded-3xl py-3.5 px-6"
                        >
                          Explore more
                        </Link>
                      </div>
                      <Image
                        src={"/images/profileImg.png"}
                        width={108}
                        height={108}
                        alt=""
                      />
                    </section>
                  </article>
                </motion.div>
              </AnimatePresence>
              <button
                onClick={() => swipeToImage(-1)}
                className="select-none absolute top-[45%] left-4 bg-gray-900/40 border-transparent rounded-full h-20 w-20 text-white px-3 py-2 -skew-y-5 rotate-5 transition-transform mr-5 hover:cursor-pointer active:skew-y-5 active:rotate-5"
              >
                PREV
              </button>
              <button
                onClick={() => swipeToImage(1)}
                className="select-none absolute top-[45%] right-4 bg-gray-900/40 border-transparent rounded-full h-20 w-20 text-white px-3 py-2 -skew-y-5 rotate-5 transition-transform hover:cursor-pointer active:skew-y-5 active:rotate-5"
              >
                NEXT
              </button>
            </div>
          </div>
          <div className="flex flex-auto w-screen relative">
            {IMAGES.map((image) => (
              <div
                key={image.id}
                onClick={() => skipToImage(image.id)}
                className="hover:cursor-pointer w-full"
              >
                <Image
                  src={image.imageSrc}
                  alt="Musician"
                  className="object-cover object-center"
                  width={480}
                  height={300}
                />
              </div>
            ))}
          </div>
        </main>
      </motion.div>
    </AnimatePresence>
  );
};

export default Detail;

// import "./styles.scss"

const IMAGES = [
  {
    id: 0,
    imageSrc: "/images/gallery/gal1.jpg",
  },
  {
    id: 1,
    imageSrc: "/images/gallery/gal2.jpg",
  },
  {
    id: 2,
    imageSrc: "/images/gallery/gal3.jpg",
  },
  {
    id: 3,
    imageSrc: "/images/gallery/gal4.jpg",
  },
  {
    id: 4,
    imageSrc: "/images/gallery/gal6.jpg",
  },
];

const sliderVariants = {
  incoming: (direction: any) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.45, 0.27, 0.05, 0.95],
};

const DetailView = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);

  const activeImageIndex = wrap(0, IMAGES.length, imageCount);

  const swipeToImage = (swipeDirection: any) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo: any) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 90;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = (imageId: any) => {
    let changeDirection = 0;
    if (imageId > activeImageIndex) {
      changeDirection = 1;
    } else if (imageId < activeImageIndex) {
      changeDirection = -1;
    }
    setImageCount([imageId, changeDirection]);
  };

  return (
    <main className="absolute top-0 flex flex-col items-center h-[110vh] w-screen">
      <div className="flex flex-col items-center h-screen w-screen">
        <div className="relative overflow-hidden w-full h-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageCount}
              style={{
                backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`,
              }}
              custom={direction}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              className="absolute will-change-auto h-full w-screen bg-cover bg-no-repeat bg-center hover:cursor-pointer active:cursor-grabbing"
            >
              <article className="flex justify-between flex-col pt-[10rem] h-[90%]">
                <h1 className={`px-[7rem] text-4xl ${homemadeApple.className}`}>
                  @username
                </h1>
                <section className="flex justify-around items-end pl-[5rem] pr-20 mt-[22.5rem] pt-[6rem] pb-[3rem] border-none rounded-tr-[350px] w-[40%] bg-tp-sblue/80">
                  <div className="max-w-[26rem] justify-start">
                    <h2 className="text-3xl">
                      About{" "}
                      <span className="block font-thin mt-1">This Image:</span>
                    </h2>
                    <p className="leading-6 break-words mb-10 mt-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link href={"/"} className="border rounded-3xl py-3.5 px-6">
                      Explore more
                    </Link>
                  </div>
                  <Image
                    src={"/images/profileImg.png"}
                    width={108}
                    height={108}
                    alt=""
                  />
                </section>
              </article>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={() => swipeToImage(-1)}
            className="select-none absolute top-[45%] left-4 bg-gray-900/40 border-transparent rounded-full h-24 w-24 text-white px-3 py-2 -skew-y-5 rotate-5 transition-transform mr-5 hover:cursor-pointer active:skew-y-5 active:rotate-5"
          >
            PREV
          </button>
          <button
            onClick={() => swipeToImage(1)}
            className="select-none absolute top-[45%] right-4 bg-gray-900/40 border-transparent rounded-full h-24 w-24 text-white px-3 py-2 -skew-y-5 rotate-5 transition-transform hover:cursor-pointer active:skew-y-5 active:rotate-5"
          >
            NEXT
          </button>
        </div>
      </div>
      <div className="flex flex-auto w-screen">
        {IMAGES.map((image) => (
          <div
            key={image.id}
            onClick={() => skipToImage(image.id)}
            className="relative h-[80%] hover:cursor-pointer w-full"
          >
            <Image
              src={image.imageSrc}
              alt="Musician"
              className="object-cover object-center"
              width={1080}
              height={720}
            />
            <div
              className={`absolute top-0 left-0 pointer-events-none origin-left bg-gray-900 ${
                image.id === activeImageIndex ? "active" : null
              } active:scale-x-0 active:scale-100`}
            />
          </div>
        ))}
      </div>
    </main>
  );
};
