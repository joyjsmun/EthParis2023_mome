import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConnectButtonComp } from "../ConnectButttonComp";

export const Header = () => {
  const router = usePathname();
  let width = "60%";
  let color = "bg-transparent";

  if (
    router === "/detail" ||
    router === "/memories" ||
    router === "/moments" ||
    router === "/congratulations" ||
    router === "/profile"
  ) {
    width = "100%";
  } else {
    width = "60%";
  }

  if (router === "/memories" || router === "/moments") {
    color = "bg-black";
  } else {
    color = "bg-transparent";
  }

  return (
    <div
      className={`${color} w-[100vw] h-24 flex justify-between items-center px-20 text-white z-40 relative`}
    >
      {/* !! font weight  */}
      <div className="text-2xl font-extrabold">
        <Link href={"/"}>
          <div className="bg-[url('/images/landing/logo.png')] bg-cover w-[12rem] h-12"></div>
        </Link>
      </div>
      <div>
        <ConnectButtonComp />
      </div>
    </div>
  );
};
