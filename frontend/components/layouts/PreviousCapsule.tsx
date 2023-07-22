import Link from "next/link";

const PreviousCapsule = () => {
  return (
    <Link href={"/memories"}>
      <div className="w-full h-[67vh]  mt-[24vh] grid grid-rows-2">
        Previous Capusle
      </div>
    </Link>
  );
};

export default PreviousCapsule;
