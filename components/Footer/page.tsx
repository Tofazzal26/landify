"use client";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto lg:py-20 py-10">
      <div className="lg:px-0 px-2">
        <div className="flex lg:flex-row flex-col justify-between lg:items-center">
          <div className="lg:flex-1">
            <div className="flex items-center gap-2">
              <Image src={"/land.png"} width={30} height={30} alt="logo" />
              <h2 className="text-2xl font-semibold">Landify</h2>
            </div>
            <p className="w-[250px] text-[#636466] mt-6">
              Create stunning, modern landing pages that captivate your audience
              and drive conversions.
            </p>
          </div>
          <div className="lg:flex-1 lg:mt-0 mt-4">
            <div className="flex lg:flex-row flex-wrap items-center justify-between">
              <div>
                <h4 className="font-medium lg:text-xl text-lg">Features</h4>
                <ul className="font-medium lg:text-base text-sm space-y-2 mt-4">
                  <li>Page builder</li>
                  <li>Theme options</li>
                  <li>Theme builder</li>
                  <li>Template library</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium lg:text-xl text-lg">Resources</h4>
                <ul className="font-medium lg:text-base text-sm space-y-2 mt-4">
                  <li>Support center</li>
                  <li>Documentation</li>
                  <li>Community</li>
                  <li>Hosting</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium lg:text-xl text-lg">Social</h4>
                <ul className="font-medium lg:text-base text-sm space-y-2 mt-4">
                  <li>Behance</li>
                  <li>Dribbble</li>
                  <li>Facebook</li>
                  <li>Instagram</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-between border-t-[1px] border-[#ecedef] lg:mt-20 mt-10">
          <div className="lg:pt-10 pt-5">
            <h4 className="text-[#6c6d6f]">
              © Landify WordPress Theme. All Rights Reserved.
            </h4>
          </div>
          <div className="font-medium flex items-center gap-6 pt-5 lg:pt-10">
            <h4>Terms & Conditions</h4>
            <h4>Privacy Policy</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
