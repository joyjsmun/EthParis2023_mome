import React from "react";
import useSWR from "swr";
import Cm from "./cm";
import Link from "next/link";

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

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export const GalleryMoments = () => {
  const Smiley = () => (
    <svg
      width="32"
      height="33"
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

  const { data, error } = useSWR("/api/storeJSONData", fetcher);

  return (
    <div className="w-full h-full grid grid-flow-dense relative">
      <div className=" w-full h-full">
        <div className="grid grid-cols-6 h-full">
          <Link
            href={"/upload"}
            className="flex flex-col gap-2 text-center items-center justify-center bg-slate-400 hover:font-semibold hover:scale-[1] hover:transition-all "
          >
            Upload Your Moment
            <Smiley />
          </Link>
          {data &&
            data.toReversed().map((data: any, index: number) => (
              <Link
                href={{
                  pathname: "/moments/id",
                  query: {
                    id: data.id,
                  },
                }}
                as={`moments/${data.id}`}
                key={index}
                className="group bg-cover image-item relative"
                style={{ backgroundImage: `url('${data.momentImg}')` }}
              >
                <div className="h-full border group-hover:bg-slate-600/30 z-20">
                  <img
                    src="/images/heart.png"
                    alt=""
                    width={48}
                    height={48}
                    className="opacity-0 absolute bottom-9 right-9 group-hover:opacity-100"
                  />
                </div>
              </Link>
            ))}
        </div>
        <Ruler />
      </div>
    </div>
  );
};
