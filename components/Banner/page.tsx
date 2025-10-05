import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto lg:px-0 md:px-2 px-2">
      <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between lg:mt-16 md:mt-8 mt-4">
        <div>
          <div>
            <h4 className="lg:text-lg md:text-base text-base font-medium text-[#295c51]">
              Start earning more traffic
            </h4>
            <h2 className="lg:text-[60px] md:text-[30px] text-lg font-semibold lg:w-[650px] md:w-[400px] w-[200px] lg:leading-[70px] md:leading-[45px] lg:mt-4 md:mt-3 mt-2">
              Marketing revolution. Unlimited success ✌️
            </h2>
            <p className="text-lg font-normal text-[#5b5c5e] lg:w-[450px] md:w-[300px] lg:mt-4 lg:mb-8 mb-6 mt-2">
              Join us in revolutionizing your marketing strategies for unlimited
              success. {"Let's"} achieve your goals together.
            </p>
          </div>
          <div className="flex lg:flex-row md:flex-col flex-col lg:items-center gap-4">
            <div>
              <button className="bg-[#e9bb71] text-base text-[#554b3a] font-semibold lg:px-5 lg:py-4 px-3 py-3 rounded-md">
                Free consultation
              </button>
            </div>
            <div className="flex items-center gap-1">
              <div className="border-2 border-green-900 rounded-full">
                <Image
                  src={"/testimonial1.jpg"}
                  width={56}
                  height={56}
                  alt="profile"
                  className="rounded-full"
                />
              </div>
              <div className="border-2 border-green-900 rounded-full">
                <Image
                  src={"/testimonial2.jpg"}
                  width={56}
                  height={56}
                  alt="profile"
                  className="rounded-full"
                />
              </div>
              <div className="border-2 border-green-900 rounded-full">
                <Image
                  src={"/testimonial3.jpg"}
                  width={56}
                  height={56}
                  alt="profile"
                  className="rounded-full"
                />
              </div>
            </div>
            <div>
              <h2 className="font-medium">Loved by thousands</h2>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/landpress.png"}
            width={500}
            height={500}
            alt="landpress"
            className="lg:w-[500px] lg:h-[500px] md:h-[400px] h-[300px]"
          />
        </div>
      </div>
      <div className="lg:mt-20 mt-10">
        <div className="flex lg:flex-row md:flex-wrap flex-wrap items-center justify-between">
          <div className="lg:border-r-2 border-[#c9d6d3] lg:w-[200px]">
            <Image src={"/affrin.svg"} width={100} height={100} alt="brand" />
          </div>
          <div className="lg:border-r-2 border-[#c9d6d3] lg:w-[200px]">
            <Image
              src={"/microsoft.svg"}
              width={100}
              height={100}
              alt="brand"
            />
          </div>
          <div className="lg:border-r-2 border-[#c9d6d3] lg:w-[200px]">
            <Image src={"/novo.svg"} width={100} height={100} alt="brand" />
          </div>
          <div className="lg:border-r-2 border-[#c9d6d3] lg:w-[200px]">
            <Image src={"/shofify.svg"} width={100} height={100} alt="brand" />
          </div>
          <div>
            <Image src={"/coinbase.svg"} width={100} height={100} alt="brand" />
          </div>
          <div>
            <Image src={"/unit.svg"} width={100} height={100} alt="brand" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
