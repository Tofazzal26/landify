"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header: React.FC = () => {
  const path = usePathname();
  return (
    <div>
      <div className="bg-base-100 shadow-sm">
        <div className="navbar container mx-auto py-4">
          <div className="navbar-start">
            <div className="flex items-center gap-10">
              <Link href={"/"}>
                {" "}
                <div className="flex items-center gap-2">
                  <Image src={"/land.png"} width={30} height={30} alt="logo" />
                  <h2 className="text-2xl font-semibold">Landify</h2>
                </div>
              </Link>

              <div className="lg:flex hidden">
                <ul className="font-semibold text-[#555758] flex items-center gap-8">
                  <li>
                    {" "}
                    <Link
                      href={"/api/our_pricing"}
                      className={
                        path === "/api/our_pricing" ? "text-[#e9bb71]" : ""
                      }
                    >
                      Pricing
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link
                      href={"/api/blog"}
                      className={path === "/api/blog" ? "text-[#e9bb71]" : ""}
                    >
                      Resources
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link
                      href={"/api/contact"}
                      className={
                        path === "/api/contact" ? "text-[#e9bb71]" : ""
                      }
                    >
                      Contact
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-center hidden lg:flex">
              <div className="space-x-2">
                <button className="bg-[#e9bb71] text-[#554b3a] text-base font-semibold px-4 py-3 rounded-md cursor-pointer">
                  Free consultation
                </button>
                <button className="bg-[#295c51] text-white text-base font-semibold px-4 py-3 rounded-md cursor-pointer">
                  {"Let's"} connect
                </button>
              </div>
            </div>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow translate-x-[-150px] space-y-2 text-[#555758] font-semibold cursor-pointer"
              >
                <li>
                  <Link href={"/api/our_pricing"}>Pricing</Link>
                </li>
                <li>
                  <Link href={"/api/blog"}>Resources</Link>
                </li>
                <li>
                  <Link href={"/api/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
