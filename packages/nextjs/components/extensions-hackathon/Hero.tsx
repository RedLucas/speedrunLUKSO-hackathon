import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex flex-col pt-8 md:pt-0 md:flex-row w-full md:h-[70vh] font-normal justify-between border border-black">
      <div className="flex flex-col items-start justify-center px-6 md:px-10 lg:px-14 w-full md:w-1/2">
        {/* <Image src="/se-2-logo.svg" alt="Hero" width={200} height={200} /> */}
        <h1 className="text-4xl lg:text-7xl 2xl:text-8xl">
          Speedrun
          <br />
          LUKSO
        </h1>
        <p className="text-base md:text-lg lg:text-xl mt-2">Learn how to develop full-stack dapps on LUKSO using Universal Profiles and the LSP smart contracts</p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center mt-4">
          <h2 className="text-lg lg:text-2xl">October 2024 - Ongoing</h2>
          <div className="px-4 py-2 mt-2 sm:mt-0 sm:ml-12 bg-accent text-base md:text-lg lg:text-xl">Virtual</div>
        </div>
      </div>
      <div className="h-36 mt-4 md:mt-0 md:w-1/2 md:h-full relative">
        <Image src="/srl.jpg" alt="Hero" fill={true} style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
};
