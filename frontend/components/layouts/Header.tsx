import Link from "next/link";
import { usePathname } from "next/navigation";

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
      className={`${color} w-[100vw] h-24 flex justify-between items-center px-20 text-black z-40 relative`}
    >
      {/* !! font weight  */}
      <div className="text-2xl font-extrabold w-full">
        <Link href={"/"}>
          <div className="bg-[url('/images/landing/logo.png')] bg-cover w-[12rem] h-11"></div>
        </Link>
      </div>
      <div className="text-[1.6vw] text-white border-white border px-5 py-2 rounded-[20px]">
        Login
      </div>
    </div>
  );
};
