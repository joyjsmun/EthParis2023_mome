import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

export const Header = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading"

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
    color = "bg-[#E3D0B0]";
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
          <div className="bg-[url('/images/landing/logo.png')] bg-cover w-[12rem] h-12"></div>
        </Link>
      </div>
      {/* <div className="text-[1.6vw] text-white border-white border px-10 py-2 rounded-[24px] hover:bg-tp-beige hover:text-black">
        Login
      </div> */}
      {!session && (
            <>
              <a
                href={`/api/auth/signin`}
                onClick={(e) => {
                  e.preventDefault()
                  signIn("worldcoin") // when worldcoin is the only provider
                  // signIn() // when there are multiple providers
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session?.user && (
            <>
              <span >
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )}
    </div>
  );
};
