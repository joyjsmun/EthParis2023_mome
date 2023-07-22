import Link from "next/link";
import Countdown from "@/components/countdownLanding";

const Main = () => {
  return (
    <div className=" relative top-0 flex z-0 ">
      <section className=" w-full h-[101.2vh] bg-[url('/images/landing/landingClock.jpg')] bg-cover bg-top px-16 flex-col absolute -top-[100px] bottom-0 z-10 ">
        <div className="relative -bottom-[70vh] w-full ">
          <div className=" flex flex-col bg-tp-beige w-[50vw] gap-4 justify-start left-10">
            <Countdown />
          </div>
          <div className="mt-10 pl-20">
            <Link
              href={"/upload"}
              className="border-black border  px-4 py-5 rounded-[28px] text-black hover:bg-tp-beige hover:text-black"
            >
              Upload your moment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
