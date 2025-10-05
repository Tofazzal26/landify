import Image from "next/image";
import React from "react";

const Seamless = () => {
  return (
    <div className="lg:my-32 md:my-20 my-10">
      <div className="container mx-auto lg:px-0 px-2">
        <div className="flex lg:flex-row flex-col lg:items-center lg:gap-0 gap-8 lg:justify-between">
          <div>
            <h4 className="lg:text-lg text-base font-medium text-[#295c51]">
              Seamless Integrations
            </h4>
            <h2 className="lg:text-5xl text-3xl font-semibold lg:w-[550px] lg:leading-[60px] my-4">
              <span className="text-[#295c51]">Easy integration</span> with your
              entire tech stack
            </h2>
            <p className="lg:text-lg text-base text-[#b2b2b3] lg:w-[440px]">
              Integrate with top marketing and SEO tools. Experience enhanced
              performance.
            </p>
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4">
                <Image
                  src={"/tic.png"}
                  width={30}
                  height={30}
                  alt=""
                  className="rounded-full"
                />
                <p className="lg:text-lg text-base font-medium">
                  Enhance campaign effectiveness
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={"/tic.png"}
                  width={30}
                  height={30}
                  alt=""
                  className="rounded-full"
                />
                <p className="text-lg font-medium">
                  Access comprehensive analytics
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={"/tic.png"}
                  width={30}
                  height={30}
                  alt=""
                  className="rounded-full"
                />
                <p className="text-lg font-medium">
                  Improve customer targeting
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex lg:flex-row md:flex-row flex-col items-center gap-6">
              <div className="bg-[#fbf9f4] w-[180px] h-[180px] flex justify-center items-center flex-col rounded-md">
                <Image
                  src={"/logo1.webp"}
                  width={120}
                  height={120}
                  alt="logo"
                />
              </div>
              <div className="bg-[#fbf9f4] w-[180px] h-[180px] flex justify-center items-center flex-col rounded-md">
                <Image
                  src={"/logo2.webp"}
                  width={120}
                  height={120}
                  alt="logo"
                />
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col items-center gap-6 mt-6">
              <div className="bg-[#fbf9f4] w-[180px] h-[180px] flex justify-center items-center flex-col rounded-md">
                <Image
                  src={"/logo3.webp"}
                  width={120}
                  height={120}
                  alt="logo"
                />
              </div>
              <div className="bg-[#fbf9f4] w-[180px] h-[180px] flex justify-center items-center flex-col rounded-md">
                <Image
                  src={"/logo4.webp"}
                  width={120}
                  height={120}
                  alt="logo"
                />
              </div>
              <div className="bg-[#fbf9f4] w-[180px] h-[180px] flex justify-center items-center flex-col rounded-md">
                <Image
                  src={"/logo5.webp"}
                  width={120}
                  height={120}
                  alt="logo"
                />
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col items-center gap-6 mt-6">
              <div className="bg-[#fbf9f4] w-[180px] h-[180px] flex justify-center items-center flex-col rounded-md">
                <Image
                  src={"/logo6.webp"}
                  width={120}
                  height={120}
                  alt="logo"
                />
              </div>
              <div className="bg-[#fbf9f4] w-[180px] h-[180px] flex justify-center items-center flex-col rounded-md">
                <Image
                  src={"/logo7.webp"}
                  width={120}
                  height={120}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seamless;
