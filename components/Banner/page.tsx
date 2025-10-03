import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between mt-16">
        <div>
          <div>
            <h4 className="text-lg font-medium text-[#295c51]">
              Start earning more traffic
            </h4>
            <h2 className="text-[60px] font-semibold w-[650px] leading-[70px] mt-4">
              Marketing revolution. Unlimited success ✌️
            </h2>
            <p className="text-lg font-normal text-[#5b5c5e] w-[450px] mt-4 mb-8">
              Join us in revolutionizing your marketing strategies for unlimited
              success. {"Let's"} achieve your goals together.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <button className="bg-[#e9bb71] text-base text-[#554b3a] font-semibold px-5 py-4 rounded-md">
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
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
