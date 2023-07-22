import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const router = usePathname();
  const height = router === "/detail" || router === "/profile" ? "100vh" : "";

  return (
    <div
      className={`flex flex-col  bg-black px-20 h-52 justify-center text-white gap-4 relative top-[${height}] inset-x-0 bottom-0`}
    >
      <div className="flex justify-between ">
        <div className="text-title">MoMe</div>
        <div className="flex flex-col gap-4">
          <Link href={"/"}>Github</Link>
        </div>
      </div>
      <div className="flex justify-center font-light text-md">
        2023 Copyright - All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
