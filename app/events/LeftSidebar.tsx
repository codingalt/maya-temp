"use client";

import Link from "next/link";
import { BsEmojiSmile } from "react-icons/bs";
import { Calendar2 } from "iconsax-react";

interface LeftSidebarProps {
  isLeftMenuOpen: boolean;
  setIsLeftMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeftSidebar = ({
  isLeftMenuOpen,
  setIsLeftMenuOpen,
}: LeftSidebarProps) => {
  return (
    <>
      {/* Mobile Sidebar with overlay */}
      <div
        className={`fixed inset-0 z-[2000] transition-opacity duration-400 ease-in-out lg:hidden ${
          isLeftMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        onClick={() => setIsLeftMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-black dark:bg-slate-700 transition-opacity duration-300 ease-in-out opacity-60 dark:opacity-70"></div>
        <div
          className={`fixed inset-x-0 bottom-0 transform transition-transform duration-300 ease-in-out rounded-t-xl shadow-lg overflow-hidden ${
            isLeftMenuOpen ? "translate-y-0" : "translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <SidebarContent />
        </div>
      </div>

      {/* Desktop Static Sidebar */}
      <aside
        className={`hidden h-full ${
          isLeftMenuOpen ? "w-0 -translate-96 hidden" : "w-[230px] lg:block"
        } transition-all shrink-0 overflow-auto border-r border-slate-100 px-4 py-2 dark:border-slate-800 dark:bg-black`}
      >
        <SidebarContent />
      </aside>
    </>
  );
};

export default LeftSidebar;

const SidebarContent = () => (
  <div className="space-y-2 bg-white px-4 md:px-0 pb-5 relative">
    <div className="flex lg:hidden justify-center py-3 pb-0">
      <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
    </div>
    {/* Calendar filter items */}
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <div className="flex flex-col">
          <div className="flex cursor-pointer flex-row items-center gap-2 rounded-lg p-2 hover:bg-[#f2f2f2] active:bg-[#e6e6e6] text-[#F78C00]">
            <span className="flex-1 truncate text-xs text-[#737373] select-none">
              Maya
            </span>
            <div className="flex shrink-0 flex-row items-center gap-0.5 rounded-md px-1.5 py-1 text-[#8c8c8c] backdrop-blur-sm">
              <span className="text-xs">Default</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex cursor-pointer flex-row items-center gap-2 rounded-lg p-2 text-[#8c8c8c] hover:bg-[#f2f2f2] hover:text-[#737373] active:bg-[#e6e6e6]">
          <span className="flex-1 truncate text-xs font-normal transition-colors select-none">
            fareedasdf8@gmail.com
          </span>
        </div>
      </div>
    </div>

    <div className="mt-16 flex flex-col gap-4 px-2 select-none">
      <Link
        href="/calendars"
        className="cursor-pointer group flex flex-row items-center gap-1 text-[#505c95] hover:text-[#3e4774] hover:underline"
      >
        <Calendar2
          color="#737373"
          className="flex size-4 shrink-0 flex-row items-center justify-center"
        />
        <span className="flex-1 text-xs">Manage Calendars</span>
      </Link>
      <Link
        href="/general"
        className="cursor-pointer group flex flex-row items-center gap-1 text-[#505c95] hover:text-[#3e4774] hover:underline"
      >
        <BsEmojiSmile className="flex size-4 shrink-0 flex-row items-center justify-center text-[#737373]" />
        <span className="flex-1 text-xs font-normal">Toggle emoji view</span>
      </Link>
    </div>
  </div>
);
