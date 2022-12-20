import Link from "next/link";
import React from "react";
import Image from "next/image";
import logoCo from "../public/logoCo.png";

export default function NavBar() {
  return (
    <div className="flex justify-between max-w-7xl mx-auto  py-4 px-3 lg:px-0 items-center">
      <div className="flex items-center space-x-2">
        <Image src={logoCo} alt="Gabu Logo" className="h-10 w-10" />
        <h5 className="text-xl font-bold text-white">GABUH TOURS & TRAVEL</h5>
      </div>
      <div className="hidden md:block ">
        <ul className="flex space-x-4 ">
          <li className="cursor-pointer hover:underline hover:text-white">
            HOME
          </li>
          <li className="cursor-pointer hover:underline hover:text-white">
            ABOUT
          </li>
          <Link href="#services">
            <li className="cursor-pointer hover:underline hover:text-white">
              SERVICES
            </li>
          </Link>
          <li className="cursor-pointer hover:underline hover:text-white">
            CONTACT
          </li>
        </ul>
      </div>
    </div>
  );
}
