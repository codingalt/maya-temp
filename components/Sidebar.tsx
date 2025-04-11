"use client";

import Link from "next/link";
import {
  FiUser,
  FiSettings,
  FiBell,
  FiCalendar,
  FiInfo,
  FiLogOut,
} from "react-icons/fi";
import { LuCalendarCog } from "react-icons/lu";
import { FaRegCircleCheck, FaArrowRight } from "react-icons/fa6";

const Sidebar = () => {

  const navigation = [
    { name: "Your Plan", href: "/dashboard", icon: <FaRegCircleCheck /> },
    { name: "Account", href: "/account", icon: <FiUser /> },
    { name: "General", href: "/general", icon: <FiSettings /> },
    { name: "Notifications", href: "/notifications", icon: <FiBell /> },
    { name: "New Events", href: "/new-events", icon: <FiCalendar /> },
    { name: "Calendars", href: "/calendars", icon: <LuCalendarCog /> },
    { name: "About", href: "/about", icon: <FiInfo /> },
  ];

  return (
    <aside className="hidden sticky top-[80px] w-[260px] md:flex flex-col gap-4">
      <div className="rounded-lg border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
        <ul className="">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex flex-row relative text-black items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-slate-50 hover:dark:bg-slate-800 active:bg-slate-100 active:dark:bg-slate-700  dark:text-slate-200`}
              >
                <span className="w-4 h-4">{item.icon}</span>
                <span className="text-sm mt-1 ms-1">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="cursor-pointer rounded-2xl py-4 text-white flex flex-col items-center gap-1 font-normal bg-gradient-to-r from-[#9B87F5] to-purple-700">
        <div className="text-sm font-semibold leading-none">
          Maya Premium plans
        </div>
        <div className="flex flex-row items-center justify-center gap-2 text-xs leading-none mt-2">
          Try for $0 <FaArrowRight />
        </div>
      </div>
      <div className="cursor-pointer flex flex-row items-center gap-2 rounded-lg px-7 py-2 text-slate-500 dark:text-slate-400 transition-colors hover:bg-red-50 hover:dark:bg-red-950 hover:text-red-500 hover:dark:text-red-400 active:bg-red-100 active:dark:bg-red-900">
        <FiLogOut />
        Sign Out
      </div>
    </aside>
  );
};

export default Sidebar;
