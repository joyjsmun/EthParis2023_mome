import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const Profile = () => {
  return (
    <div className="w-full flex flex-col relative -top-[6.5rem]">
      <div className="w-full">
        <Image
          src={"/images/userCover.jpg"}
          alt=""
          width={1512}
          height={202}
          className="h-[20rem] w-full object-cover top-0 right-10"
        />
        <div className="flex justify-between pl-28 pr-20">
          <aside className="flex flex-col w-[30vw] text-left">
            <Image
              src={"/images/user.png"}
              alt=""
              width={108}
              height={108}
              className="border rounded-full -mt-14 mb-5"
            />
            <h1 className="text-3xl font-extrabold">NFTimeStudio</h1>
            <p className="block text-sm py-3">
              <span className="inline-block align-top mr-2">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.57634 0.861328V6.77592L4.2013 8.73159L8.57634 6.7771V11.9122L3.57919 9.00968L3.57903 9.00973L3.57909 9.00963L3.57903 9.00957L3.57914 9.00952L8.57634 0.861328ZM8.57768 0.861328L13.5755 9.00952L13.5757 9.00957L13.5756 9.00963L13.5757 9.00973L13.5755 9.00968L8.57768 11.9122V6.7771L12.9533 8.73159L8.57768 6.77592V0.861328ZM8.57634 12.8425V16.8613L3.57568 9.94055L8.57634 12.8425ZM8.57768 16.8613V12.8418L13.5757 9.94055L8.57768 16.8613Z"
                    fill="#6B8CEF"
                  />
                </svg>
              </span>
              <Link
                href={
                  "https://goerli.etherscan.io/address/0xE255e2404f50a2878C6587271698e81fd30e9D13#nfttransfers"
                }
              >
                0xE255e2404f50a2878C6587271698e81fd30e9D13
              </Link>
            </p>
            <p className="block mt-6 text-sm text tracking-wide break-words">
              8,888 NFTs of beautiful, Asian women painstakingly-crafted where
              even the most intricate details are steeped
            </p>
            <div className="mt-4">
              <Link
                href={"https://www.facebook.com/"}
                className="inline-block mr-3"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.98193 16.3613V9.20506H4.57568V6.36131H6.98193V4.11132C6.98193 2.92382 7.31526 2.00195 7.98193 1.3457C8.64859 0.689452 9.53401 0.361328 10.6382 0.361328C11.534 0.361328 12.2632 0.402995 12.8257 0.486328V3.01757H11.3257C10.7632 3.01757 10.3778 3.14257 10.1694 3.39257C10.0028 3.6009 9.91942 3.93424 9.91942 4.39257V6.36131H12.5757L12.2007 9.20506H9.91942V16.3613H6.98193Z"
                    fill="#1778F2"
                  />
                </svg>
              </Link>
              <Link href={"https://twitter.com/home"} className="inline-block">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9194 5.61132C14.9402 5.69465 14.9506 5.83007 14.9506 6.01757C14.9506 7.51757 14.5861 8.96548 13.8569 10.3613C13.1069 11.8405 12.0548 13.0176 10.7007 13.8926C9.2215 14.8717 7.52358 15.3613 5.60692 15.3613C3.77359 15.3613 2.09651 14.8717 0.575684 13.8926C0.80485 13.9134 1.06527 13.9238 1.35693 13.9238C2.87776 13.9238 4.24234 13.4551 5.45067 12.5176C4.72151 12.5176 4.08088 12.304 3.5288 11.8769C2.97672 11.4498 2.59651 10.9134 2.38818 10.2676C2.59651 10.2884 2.79443 10.2988 2.98193 10.2988C3.27359 10.2988 3.56526 10.2676 3.85693 10.2051C3.10693 10.0384 2.48193 9.65298 1.98193 9.04881C1.48193 8.44465 1.23193 7.75715 1.23193 6.98632V6.92382C1.69026 7.19465 2.17985 7.34048 2.70068 7.36132C2.26318 7.04882 1.90901 6.65298 1.63818 6.17382C1.36735 5.69465 1.23193 5.16861 1.23193 4.5957C1.23193 4.02278 1.38818 3.47591 1.70068 2.95508C2.51318 3.97591 3.50797 4.78841 4.68505 5.39257C5.86213 5.99674 7.11733 6.33007 8.45066 6.39257C8.409 6.14257 8.38816 5.89257 8.38816 5.64257C8.38816 5.05924 8.534 4.51236 8.82566 4.00195C9.11733 3.49153 9.51316 3.09049 10.0132 2.79883C10.5132 2.50716 11.0548 2.36133 11.6382 2.36133C12.1173 2.36133 12.56 2.45508 12.9663 2.64258C13.3725 2.83008 13.7319 3.08008 14.0444 3.39258C14.7944 3.24674 15.4923 2.98633 16.1381 2.61133C15.8881 3.38216 15.409 3.98632 14.7007 4.42382C15.3256 4.34049 15.9506 4.16341 16.5756 3.89257C16.1173 4.55924 15.5652 5.13216 14.9194 5.61132Z"
                    fill="#00A2F3"
                  />
                </svg>
              </Link>
            </div>
            <hr className="mt-8" />
            <div className="my-5">
              <section className="text-lg flex justify-around">
                <p className="text-center">500</p>
                <p className="text-center">300</p>
              </section>
              <section className="text-sm flex justify-around font-semibold">
                <p className="text-center">Moments</p>
                <p className="text-center">Memories</p>
              </section>
            </div>
            <hr />
          </aside>
          <section className="w-[50vw] mt-8 h-[90vh]">
            <div className="mb-5 flex gap-4">
              <button className="border rounded-full py-2 px-11 font-bold bg-white hover:bg-tp-beige hover:text-[#C46417]">
                Moments
              </button>
              <button className="border rounded-full py-2 px-11 font-bold bg-white hover:bg-tp-beige hover:text-[#C46417] ">
                Memories
              </button>
              <button className="border rounded-full py-2 px-11 font-bold bg-white hover:bg-tp-beige hover:text-[#C46417]">
                <Link href="/personalMint">Likes</Link>
              </button>
            </div>
            <div className="flow-col gap-8 columns-3 overflow-auto h-[90%]">
              <img
                className="w-full aspect-video mb-6"
                src="https://picsum.photos/500/300?random=1"
                width={500}
                height={300}
                alt=""
              />
              <img
                className="w-full aspect-square mb-6"
                src="https://picsum.photos/500/300?random=2"
                width={500}
                height={300}
                alt=""
              />
              <img
                className="w-full aspect-square mb-6"
                src="https://picsum.photos/500/300?random=3"
                width={500}
                height={300}
                alt=""
              />
              <img
                className="w-full aspect-square mb-6"
                src="https://picsum.photos/500/300?random=4"
                width={500}
                height={300}
                alt=""
              />
              <img
                className="w-full aspect-video mb-6"
                src="https://picsum.photos/500/300?random=5"
                width={500}
                height={300}
                alt=""
              />
              <img
                className="w-full aspect-video mb-6"
                src="https://picsum.photos/500/300?random=6"
                width={500}
                height={300}
                alt=""
              />
              <img
                className="w-full aspect-square mb-6"
                src={"https://picsum.photos/500/300?random=7"}
                width={500}
                height={300}
                alt=""
              />
              <img
                className="w-full aspect-video mb-6"
                src={"https://picsum.photos/500/300?random=8"}
                width={500}
                height={300}
                alt=""
              />
              <img
                className="w-full aspect-square mb-6"
                src={"https://picsum.photos/500/300?random=9"}
                width={500}
                height={300}
                alt=""
              />
              <img
                className="w-full aspect-video mb-6"
                src={"https://picsum.photos/500/300?random=1"}
                width={500}
                height={300}
                alt=""
              />
              <img
                className="w-full aspect-square mb-6"
                src={"https://picsum.photos/500/300?random=2"}
                width={500}
                height={300}
                alt=""
              />
              <img
                className="w-full aspect-square mb-6"
                src={"https://picsum.photos/500/300?random=3"}
                width={500}
                height={300}
                alt=""
              />
              <img
                className="w-full aspect-square mb-6"
                src={"https://picsum.photos/500/300?random=4"}
                width={500}
                height={300}
                alt=""
              />
              <img
                className="w-full aspect-video mb-6"
                src={"https://picsum.photos/500/300?random=5"}
                width={500}
                height={300}
                alt=""
              />
              <img
                className="w-full aspect-video mb-6"
                src={"https://picsum.photos/500/300?random=6"}
                width={500}
                height={300}
                alt=""
              />
              <img
                className="w-full aspect-square mb-6"
                src={"https://picsum.photos/500/300?random=7"}
                width={500}
                height={300}
                alt=""
              />
              <img
                className="w-full aspect-video mb-6"
                src={"https://picsum.photos/500/300?random=8"}
                width={500}
                height={300}
                alt=""
              />
              <img
                className="w-full aspect-square mb-6"
                src={"https://picsum.photos/500/300?random=9"}
                width={500}
                height={300}
                alt=""
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
