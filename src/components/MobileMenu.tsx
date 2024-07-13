"use client";
import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div className="flex flex-col gap-[4.5] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div
          className={`w-6 h-1 bg-blue-300 rounded-sm origin-left ease-in-out duration-500 ${isOpen ? "rotate-45" : ""}`}
        ></div>
        <div className={`w-6 h-1 bg-blue-300 rounded-sm ${isOpen ? "opacity-0" : ""}`}></div>
        <div
          className={`w-6 h-1 bg-blue-300 rounded-sm origin-left ease-in-out duration-500 ${
            isOpen ? "-rotate-45" : ""
          }`}
        ></div>
        {isOpen && (
          <div className="fixed left-0 top-20 w-full h-[calc(100vh-6rem)] bg-white flex flex-col justify-center items-center gap-8 font-medium z-10">
            <Link href="/">Home</Link>
            <Link href="/">Friends</Link>
            <Link href="/">Groups</Link>
            <Link href="/">Stories</Link>
            <Link href="/">Login</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
