"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import { useRouter } from "next/router";

const UploadMoment = () => {
  const [momentTitle, setMomentTitle] = useState("");
  const [momentDescription, setMomentDescription] = useState("");
  const [momentImg, setMomentImg] = useState("");

  const router = useRouter();

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (!e.target.files) return;
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setMomentImg(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const saveData = async () => {
    const date = new Date();
    const datePosted = format(date, "LLLL d, yyyy");
    const response = await fetch("/api/storeJSONData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuidv4(),
        username: "0x572EBDDB6761F24B6EBDD87F4861DDDC553BBA1B",
        momentTitle: momentTitle,
        momentDescription: momentDescription,
        momentImg: momentImg,
        datePosted: datePosted,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveData();
    router.push("/moments");
  };

  return (
    <div className="flex top-0 absolute w-full">
      <section className="w-3/5 h-[100vh] bg-[url('/images/landing/landingClock.jpg')] bg-cover bg-center flex items-center justify-center relative">
        {momentImg && (
          <Image
            src={momentImg}
            width={1440}
            height={1080}
            alt=""
            className="object-cover h-full w-full m-0 p-0"
          />
        )}
        <div className="text-header absolute top-[50vh]">
          Preview Your Beautiful Moment
        </div>
      </section>
      <section
        style={{ color: "white" }}
        className=" flex items-center w-2/5 h-screen p-16 bg-[url('/images/uploadCover.png')] bg-gray-400 bg-center bg-no-repeat bg-cover"
      >
        <form className="flex flex-col m-0 p-0 w-full" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="momentImg" className="block mb-8">
              <span className="block text-4xl font-light mb-3">
                Upload an image
              </span>
              <div className="inline-flex items-center justify-evenly pt-5 pb-6 border rounded-lg w-full py-2 px-3 mt-4 border-slate-600">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex gap-2 justify-center items-center cursor-pointer border-white border-[1.5px] p-2 rounded-md">
                  <div className="font-semibold ">Upload</div>{" "}
                  <div>Your Moment</div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                onChange={handleFileChange}
                type="file"
                id="momentImg"
                name="momentImg"
                className="hidden"
                required
              />
            </label>
          </div>
          <div className="flex flex-col mb-12">
            <label htmlFor="momentTitle">Moment Title:</label>
            <input
              type="text"
              id="momentTitle"
              name="momentTitle"
              style={{ color: "black" }}
              className="rounded py-3 px-4 h-full"
              value={momentTitle}
              onChange={(e) => setMomentTitle(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-12">
            <label htmlFor="momentDescription">Description (Optional):</label>
            <textarea
              id="momentDescription"
              name="momentDescription"
              rows={10}
              style={{ color: "black" }}
              className="rounded py-3 px-4 h-full"
              value={momentDescription}
              onChange={(e) => setMomentDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex">
            <button
              type="submit"
              className="flex items-center mr-5 bg-tp-pgreen hover:bg-blue-700 text-white py-4 px-14 rounded"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 m-0 p-0 text-white mr-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              Submit
            </button>
            <Link
              href={"/"}
              className="bg-transparent hover:bg-blue-700 text-white py-4 px-10 border rounded"
            >
              Close
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UploadMoment;
