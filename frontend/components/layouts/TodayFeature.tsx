import Link from "next/link";
import SquareTop from "../SquareTop";

const TodayFeature = () => {
  return (
    <Link href={"/moments"}>
      <div className="w-full h-[35vh] bg-[url('/images/landing/landingToday.jpg')] bg-cover absolute -top-[96px] p-10 z-20 ">
        <SquareTop />
      </div>
    </Link>
  );
};

export default TodayFeature;
