import React from "react";
import Logo from "../public/assets/letter-w.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-between bg-[#1c252a] text-white py-3 md:py-5 px-5 md:px-10 lg:px-20">
      <Link href="/" className="flex items-center">
        <span>
          <Image src={Logo} alt="W logo" className="h-8 w-8 mx-2" />
        </span>
        <span>
          <p>NetWorthBlog</p>
        </span>
      </Link>
      <div className="flex space-x-3 uppercase">
        <p className="">Celeb Blog</p>
        <p className="">Reviews</p>
        <p className="">About</p>
      </div>
    </nav>
  );
};

export default Header;
