import { wrap } from "popmotion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Homemade_Apple } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import useSWR from "swr";
import Layout from "@/components/layouts/Layout";
import Footer from "@/components/layouts/Footer";

const fetcher = (url) => fetch(url).then((res) => res.json());

const homemadeApple = Homemade_Apple({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR("/api/storeJSONData", fetcher);

  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    if (data) {
      const imageIndex = data.findIndex((imgData) => imgData.id === id);
      if (imageIndex !== -1) {
        setCurrentIndex(imageIndex);
      }
    }
  }, [data, id]);

  if (error) return <div>Failed to load data</div>;
  if (!data || currentIndex === null) return <div>Loading...</div>;

  return (
    <div className="text-white h-screen w-full">
      <main className="absolute top-0 flex flex-col items-center h-[110vh] w-screen">
        <div className="flex flex-col items-center h-screen w-screen">
          <div className="relative overflow-hidden w-full h-full">
            <div
              style={{
                backgroundImage: `url(${data[currentIndex].momentImg})`,
              }}
              className="h-full w-screen bg-cover bg-no-repeat bg-center hover:cursor-pointer active:cursor-grabbing"
            >
              <article className="flex justify-between flex-col pt-[10rem] h-[80%]">
                <h1 className={`px-[7rem] text-4xl`}>
                  {`@${data[currentIndex].username}`}
                </h1>
                <section className="flex absolute bottom-0 justify-around items-end pl-[5rem] pr-20 pt-[6rem] pb-[3rem] border-none rounded-tr-[350px] w-[40%] bg-tp-beige/80">
                  <div className="max-w-[26rem] justify-start">
                    <h2 className="text-3xl">
                      {data[currentIndex].momentTitle}
                    </h2>
                    <p className="leading-6 break-words mb-10 mt-6">
                      {data[currentIndex].momentDescription}
                    </p>
                    <Link
                      href={"/profile"}
                      className="border rounded-3xl py-3.5 px-6"
                    >
                      Explore more
                    </Link>
                  </div>
                  <Link href={"/profile"}>
                    <img
                      src={data[currentIndex].userImg}
                      width={96}
                      height={48}
                      alt=""
                      className="border rounded-[9999px] h-32 w-32 object-cover"
                    />
                  </Link>
                </section>
              </article>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div
          className={`flex flex-col  bg-black px-20 h-52 justify-center text-white gap-4 relative top-[90vh]`}
        >
          <div className="flex justify-between ">
            <div className="text-title">Non Fungible Time</div>
            <div className="flex flex-col gap-4">
              <Link href={"/"}>Twitter</Link>
              <Link href={"/"}>Github</Link>
            </div>
          </div>
          <div className="flex justify-center font-light text-md">
            2023 Copyright - All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Detail;
