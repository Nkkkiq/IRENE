"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = ["Projects", "About", "Contact"].map((item, index) => {
    return { id: index, text: item, link: `/${item.toLowerCase()}` };
  });

  const siteTitle = "NK";

  return (
    <div className="bg-black flex justify-between items-center h-24 mx-auto px-4 text-white w-full ">
      {/* Logo */}
      <h1 className="w-full text-3xl ">
        <Link href="/">{siteTitle} </Link>
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:text-[#f2d5a0] rounded-xl m-2 cursor-pointer duration-300"
          >
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <X size={30} /> : <Menu size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full  bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-white m-4">
          <Link href="/" onClick={handleNav}>
            {siteTitle}{" "}
          </Link>
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 rounded-xl hover:text-[#f2d5a0] duration-300 cursor-pointer"
          >
            <Link href={item.link} onClick={handleNav}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
