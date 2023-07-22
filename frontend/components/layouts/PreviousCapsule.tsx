import Link from "next/link";
import SquareBottom from "../SquareBottom";
import { GalleryLanding } from "../galleryLanding";

const PreviousCapsule = () => {
  return (
    <Link href={"/memories"}>
      <div className="w-full h-[67vh]  mt-[24vh] grid grid-rows-2">
        <div>
          <div className="grid grid-cols-2 h-full">
            <div className="bg-[url('/images/landing/landingPrev1.jpg')] bg-cover p-10 relative ">
              <SquareBottom />
            </div>
            <div className="bg-[url('/images/landing/landingPrev2.jpg')] bg-cover p-10 "></div>
          </div>
        </div>
        <div>
          <GalleryLanding />
        </div>
      </div>
    </Link>
  );
};

export default PreviousCapsule;
