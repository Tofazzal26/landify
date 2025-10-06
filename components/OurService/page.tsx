"use client";
import Image from "next/image";
import React from "react";

const OurService = () => {
  return (
    <div className="container mx-auto">
      <div className="lg:my-10 my-6">
        <div className="text-center lg:my-20 my-10">
          <h4 className="lg:text-lg text-base font-medium text-[#295c51]">
            Our Services
          </h4>
          <h2 className="lg:text-5xl text-3xl font-semibold lg:my-4 my-2">
            Your <span className="text-[#295c51]">bespoke</span> service bundle
          </h2>
          <p className="lg:text-lg text-sm text-[#69655b] lg:w-[450px] mx-auto">
            Unlock your {"business's "}full potential with our comprehensive
            suite of services.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4">
          <div className="shadow-md lg:p-8 p-6 rounded-md">
            <Image
              src={"/brand1.png"}
              width={100}
              height={100}
              alt="brand"
              className="rounded-md"
            />
            <h2 className="font-semibold text-2xl mb-4 mt-6">
              Brand communication
            </h2>
            <p className="text-[#717274] w-[280px]">
              Craft compelling brand stories and messaging strategies that
              resonate with your audience. Strengthen brand identity, build
              trust, and drive engagement across all channels.
            </p>
          </div>
          <div className="shadow-md lg:p-8 p-6 rounded-md">
            <Image
              src={"/brand2.png"}
              width={100}
              height={100}
              alt="brand"
              className="rounded-md"
            />
            <h2 className="font-semibold text-2xl mb-4 mt-6">
              Technology consultation
            </h2>
            <p className="text-[#717274] w-[280px]">
              Navigate the complexities of technology with our expert
              consultation services.
            </p>
          </div>
          <div className="shadow-md lg:p-8 p-6 rounded-md">
            <Image
              src={"/brand3.png"}
              width={100}
              height={100}
              alt="brand"
              className="rounded-md"
            />
            <h2 className="font-semibold text-2xl mb-4 mt-6">Graphic design</h2>
            <p className="text-[#717274] w-[280px]">
              Transform your brand vision into stunning visuals. From logos to
              marketing materials.
            </p>
          </div>
          <div className="shadow-md lg:p-8 p-6 rounded-md">
            <Image
              src={"/brand4.png"}
              width={100}
              height={100}
              alt="brand"
              className="rounded-md"
            />
            <h2 className="font-semibold text-2xl mb-4 mt-6">
              UI/UX product design
            </h2>
            <p className="text-[#717274] w-[280px]">
              Deliver exceptional user experiences with intuitive UI/UX design.
              Our designers combine creativity and functionality to create
              interactions that keep users engaged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
