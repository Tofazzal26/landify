"use client";
import Image from "next/image";
import React from "react";

const FastSolution = () => {
  return (
    <div className="bg-[#295c51] lg:py-20 py-10 lg:px-0 px-2 lg:mt-20 md:mt-16 mt-10">
      <div className="container mx-auto">
        <div className="flex lg:justify-between lg:flex-row flex-col lg:items-center lg:gap-0 gap-6">
          <div>
            <h2 className="text-lg font-medium text-white">Fast Solutions</h2>
            <h2 className="lg:text-5xl text-3xl font-semibold text-white lg:w-[390px] lg:leading-[60px] lg:py-4 py-2">
              <span className="text-[#e9bb71]">Solutions</span> for busy
              business owners
            </h2>
            <p className="text-white text-lg font-normal lg:w-[350px]">
              Drive revenue with email automation, boost SEO rankings, and
              optimize the customer journey effortlessly.
            </p>
          </div>
          <div className="flex lg:flex-row md:flex-row flex-col items-center lg:gap-8 gap-4">
            <div className="bg-white p-10 rounded-md">
              <div>
                <Image
                  src={"/landpress-startup-5.png"}
                  width={300}
                  height={300}
                  alt="landpress"
                />
                <h2 className="w-[275px] font-semibold text-2xl mt-8 mb-4">
                  Email automation tools to drive revenue
                </h2>
                <p className="w-[275px] text-base font-normal text-[#5b5c97]">
                  Automate email marketing and campaigns for increased revenue
                  generation.
                </p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-md">
              <div>
                <Image
                  src={"/landpress-startup-7.png"}
                  width={270}
                  height={270}
                  alt="landpress"
                />
                <h2 className="w-[275px] font-semibold text-2xl mt-8 mb-4">
                  Increase traffic, get to the top of search results
                </h2>
                <p className="w-[275px] text-base font-normal text-[#5b5c97]">
                  Boost website traffic with proven strategies. Achieve higher
                  rankings and attract quality leads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastSolution;
