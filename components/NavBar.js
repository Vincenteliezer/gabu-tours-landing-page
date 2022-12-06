import React from "react";

export default function NavBar() {
  return (
    <div className="flex justify-between max-w-7xl mx-auto py-5 z-50">
      <h5 className="text-xl font-bold text-white">GABU TOURS</h5>
      <div className="hidden md:block">
      <ul className="flex space-x-4 ">
        <li className="cursor-pointer hover:underline hover:text-white">Home</li>
        <li className="cursor-pointer hover:underline hover:text-white">About</li>
        <li className="cursor-pointer hover:underline hover:text-white">Services</li>
        <li className="cursor-pointer hover:underline hover:text-white">Contact</li>
      </ul>
      </div>
     
    </div>
  );
}
