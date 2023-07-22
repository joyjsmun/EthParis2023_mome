import Link from "next/link";

const Main = () => {
  return (
    <div className=" relative top-0 flex z-0 ">
      <section className=" w-full h-[101.2vh] bg-[url('/images/landing/landingClock.jpg')] bg-cover bg-center px-16 flex-col absolute -top-[100px] bottom-0 z-10 ">
        <div className="relative -bottom-[60vh] ">
          <div className=" flex flex-col gap-2 mb-12  ">
            <h1 className="text-header-bold pl-10">Hello</h1>
            <h1 className="text-header mb-4 pl-10">how are you today?</h1>
            <p className="text-body w-[68%]">&quot;MoMe&quot;</p>
          </div>
          <Link
            href={"/upload"}
            className="border-black border px-4 py-5 rounded-[28px] text-black"
          >
            Upload your moment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Main;
