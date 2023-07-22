import Link from "next/link";

const Main = () => {
  return (
    <div className=" relative top-0 flex z-0 ">
      <section className=" w-full h-[101.2vh] bg-[url('/images/landing/landingClock.jpg')] bg-cover bg-center px-16 flex-col absolute -top-[100px] bottom-0 z-10 ">
        <div className="relative -bottom-[60vh] ">
          <div className=" flex flex-col gap-2 mb-12  ">
            <h1 className="text-header-bold">Hello</h1>
            <h1 className="text-header mb-4">how are you today?</h1>
            <p className="text-body w-[68%]">&quot;MoMe&quot;</p>
          </div>
          <Link
            href={"/upload"}
            className="border-white border px-4 py-5 rounded-[28px]"
          >
            Upload your moment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Main;
