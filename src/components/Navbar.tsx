import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import BasicSpinner from "./utils/Spinner";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 w-full bg-white px-4 sm:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className={`relative h-nav-height flex justify-between items-center`}>
        <div className="md:hidden lg:block">
          <Link className="font-bold text-xl text-blue-500" href={"/"}>
            <span>Thim Socialism</span>
          </Link>
        </div>
        <div className="hidden md:flex">
          <div className="flex gap-6 justify-center items-center text-gray-600">
            <Link className="font-bold flex items-center gap-2" href={"/"}>
              <Image src="/home.png" alt="Home page" width={16} height={16} className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link className="font-bold flex items-center gap-2" href={"/"}>
              <Image src="/friends.png" alt="Home page" width={16} height={16} className="w-4 h-4" />
              <span>Friends</span>
            </Link>
            <Link className="font-bold flex items-center gap-2" href={"/"}>
              <Image src="/stories.png" alt="Home page" width={16} height={16} className="w-4 h-4" />
              <span>Stories</span>
            </Link>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center px-4 basis-[20%]">
          <ClerkLoading>
            <BasicSpinner />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <div className="cursor-pointer">
                <Image src="/people.png" width={20} height={20} alt="" />
              </div>
              <div className="cursor-pointer">
                <Image src="/messages.png" width={20} height={20} alt="" />
              </div>
              <div className="cursor-pointer">
                <Image src="/notifications.png" width={20} height={20} alt="" />
              </div>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <div className="text-sm">
                <Link className="flex items-center gap-2" href="/sign-in">
                  <Image src="/user.png" width={20} height={20} alt="Login" />
                  Login/Register
                </Link>
              </div>
            </SignedOut>
          </ClerkLoaded>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

const LoginItem = () => {
  return <div></div>;
};

export default Navbar;
