"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaArrowRight } from "react-icons/fa6";
import { FaCalendarAlt, FaRegCheckCircle } from "react-icons/fa";
import {
  FiUser,
  FiSettings,
  FiBell,
  FiCalendar,
  FiInfo,
  FiLogOut,
} from "react-icons/fi";

const Navbar = () => {
  const navigation = [
    { name: "Your Plan", href: "/dashboard", icon: <FaRegCheckCircle /> },
    { name: "Account", href: "/account", icon: <FiUser /> },
    { name: "General", href: "/general", icon: <FiSettings /> },
    { name: "Notifications", href: "/notifications", icon: <FiBell /> },
    { name: "New Events", href: "/new-events", icon: <FiCalendar /> },
    { name: "Calendars", href: "/calendars", icon: <FiCalendar /> },
    { name: "About", href: "/about", icon: <FiInfo /> },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50  border-b-2 transition-all bg-[#ffffffaf] dark:bg-[#000000ce] shadow-none border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex h-[50px] md:h-[60px] w-full flex-row items-center gap-3 px-4 md:max-w-screen-lg md:px-8">
        {/* Logo on the left */}
        <Link href="/">
          <div className="flex flex-row items-center cursor-pointer">
            <Image
              src="/images/maya-logo.png"
              alt="Maya Logo"
              width={55}
              height={55}
              className="w-14 md:w-auto"
            />
            <span className="font-bold text-base md:text-xl ">Maya</span>
          </div>
        </Link>
        <div className="flex-1"></div>

        {/* Mobile menu toggle */}
        <button
          className="flex md:hidden cursor-pointer flex-col rounded-md text-slate-500 items-center justify-center hover:bg-slate-50 active:bg-slate-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FaBars size={20} />
        </button>

        {/* Calendar icon on the right */}
        <Link href={"/events"} className="hidden md:flex cursor-pointer size-8 flex-col rounded-md text-slate-500 items-center justify-center hover:bg-slate-50 active:bg-slate-100 transition-colors">
          <FaCalendarAlt size={24} />
        </Link>
      </div>
      {/* Mobile Menu - When the screen is small */}

      <div
        className={`fixed inset-0 z-[2000] transition-opacity duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-black dark:bg-slate-700 transition-opacity duration-300 ease-in-out opacity-50 dark:opacity-70"></div>
        <div
          className={`fixed inset-x-0 bottom-0 transform transition-transform duration-300 ease-in-out rounded-t-xl shadow-lg overflow-hidden ${
            isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex flex-col gap-6 py-6 bg-white dark:bg-black">
            <div className="px-8 flex flex-col gap-4 pb-4">
              <div className="">
                <div className="cursor-pointer rounded-2xl py-4 text-white flex flex-col items-center gap-1 font-normal bg-gradient-to-r from-[#9B87F5] to-purple-700">
                  <div className="text-sm font-semibold leading-none">
                    Maya Premium plans
                  </div>
                  <div className="flex flex-row items-center justify-center gap-2 text-xs leading-none mt-2">
                    Try for $0 <FaArrowRight />
                  </div>
                </div>
                <div className="rounded-lg bg-gray-50 dark:bg-gray-800 overflow-hidden mt-5">
                  <ul className="">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`flex flex-row relative items-center gap-2 px-4 py-3 transition-colors hover:bg-slate-50 hover:dark:bg-slate-800 active:bg-slate-100 active:dark:bg-slate-700 border-b border-gray-100 dark:border-gray-700 last:border-b-0 dark:text-slate-200`}
                        >
                          <span className="w-4 h-4">{item.icon}</span>
                          <span className="text-sm mt-1 ms-1">{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="cursor-pointer flex flex-row items-center gap-2 rounded-lg px-5 py-2 text-slate-500 dark:text-slate-400 transition-colors hover:bg-red-50 hover:dark:bg-red-950 hover:text-red-500 hover:dark:text-red-400 active:bg-red-100 active:dark:bg-red-900 mt-4">
                  <FiLogOut />
                  Sign Out
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
