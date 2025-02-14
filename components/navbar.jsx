"use client";
import Link from "next/link";
import React, { useState } from "react";
import { links, socMed } from "@/constants";
import Image from "next/image";
import NavLink from "./navLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 flex items-center justify-center"
        >
          <span className="text-white font-semibold mr-1">Rossrival</span>
          <span className="w-14 h-8 rounded bg-white text-black flex items-center justify-center">
            Bendillo
          </span>
        </Link>
      </div>

      {/* SOCMED LIST */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        {socMed.map((data) => (
          <Link key={data.id} href={data.url} target="_blank">
            <Image src={data.image} alt={data.alt} width={24} height={24} />
          </Link>
        ))}
      </div>

      {/* RESPONSIVE MENU */}
      <div className="lg:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
      </div>
      {/* MENU LIST */}
      {open && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
          {links.map((link) => (
            <Link href={link.url} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
