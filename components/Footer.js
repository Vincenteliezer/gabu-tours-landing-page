import React from "react";
import Image from "next/image";
import logoCo from "../public/logoCo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" bg-gray-100 mt-16 text-base ">
      <div className="max-w-7xl mx-auto">
        <div className="pt-6 pb-16 grid grid-cols-1 md:grid-cols-3 place-items-center md:place-items-start">
          <div className="text-center flex flex-col items-center md:items-start">
            {/* <h5 className="font-bold text-lg text-[#d8a670]">GABUH </h5> */}
            <Image src={logoCo} alt="Gabu Logo" className="h-20 w-20" />
            <h5 className="text-gray-600 md:text-start mx-4 md:mx-0">
              Gabuh Tours & Travel is a full service travel, tour operator and
              destination management company.
            </h5>
          </div>
          <div className="mt-4 md:mt-0">
            <h5 className="font-bold text-lg text-[#d8a670]">
              IMPORTANT LINKS
            </h5>
            <ul className="space-y-4 mt-2 ml-2 text-center md:text-start">
              <Link href="/">
                <li className="hover:underline cursor-pointer hover:text-[#d8a670]">
                  About
                </li>
              </Link>
              <Link href="/">
                <li className="hover:underline cursor-pointer hover:text-[#d8a670] mt-3">
                  Services
                </li>
              </Link>
              <Link href="/">
                <li className="hover:underline cursor-pointer hover:text-[#d8a670] mt-3">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="mt-4 md:mt-0">
            <h5 className="font-bold text-lg text-[#d8a670]">MORE</h5>
            <ul className=" mt-2 ml-2 text-center md:text-start">
              <Link href="/">
                <li className="hover:underline cursor-pointer hover:text-[#d8a670]">
                  Book
                </li>
              </Link>
              <Link href="/">
                <li className="hover:underline cursor-pointer hover:text-[#d8a670] mt-3">
                  Inquire
                </li>
              </Link>
              <Link href="/">
                <li className="hover:underline cursor-pointer hover:text-[#d8a670] mt-3">
                  Gallery
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 w-full py-3 text-center">
        <Link href="https://vincenteliezer.com">
          <p className="max-w-7xl mx-auto text-white text-xs hover:underline">
            Copyright © {new Date().getFullYear()} Vincenteliezer
          </p>
        </Link>
      </div>
    </div>
  );
}
