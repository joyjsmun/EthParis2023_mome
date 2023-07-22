import Link from "next/link";
import Triangle from "../Triangle";

const TodayFeature = () => {
  return (
    <Link href={"/moments"}>
      <div className="w-full h-[35vh] bg-[url('/images/landing/landingToday.jpg')] bg-cover absolute -top-[96px] p-10 z-20 ">
        <h1 className="text-title ">Today&apos;s Feature</h1>

        <Triangle />
      </div>
    </Link>
  );
};

export default TodayFeature;
