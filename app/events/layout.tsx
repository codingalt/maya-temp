"use client";

import Link from "next/link";
import Image from "next/image";
import { BsArrowReturnRight } from "react-icons/bs";
import { useState, createContext } from "react";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";

// Define the event type
interface Event {
  id: string;
  title: string;
  description?: string;
  color: string;
  textColor: string;
  allDay: boolean;
  start: Date;
  end: Date;
}

// Create context for selected date and events
export const CalendarContext = createContext<{
  selectedDate: Date;
  selectedEvents: Event[];
  setSelectedDate: (date: Date) => void;
  setSelectedEvents: (events: Event[]) => void;
  isLeftMenuOpen: boolean;
  setIsLeftMenuOpen: (open: boolean) => void;
}>({
  selectedDate: new Date(),
  selectedEvents: [],
  setSelectedDate: () => {},
  setSelectedEvents: () => {},
  isLeftMenuOpen: false,
  setIsLeftMenuOpen: () => {},
});

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // State for selected date and its events
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState<boolean>(false);

  return (
    <CalendarContext.Provider
      value={{
        selectedDate,
        selectedEvents,
        setSelectedDate,
        setSelectedEvents,
        isLeftMenuOpen,
        setIsLeftMenuOpen,
      }}
    >
      <div
        className="flex w-full lg:h-screen flex-col overflow-y-auto lg:overflow-y-hidden lg:overflow-hidden"
        dir="ltr"
      >
        {/* Header */}
        <nav className="flex h-12 w-full shrink-0 flex-row items-center justify-between gap-2 border-b border-slate-100 bg-white px-8 text-[#262626] dark:border-slate-800">
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

            {/* Calendar icon on the right */}
            <Link
              href={"/events"}
              className="hidden md:flex cursor-pointer size-8 flex-col rounded-md text-slate-500 items-center justify-center hover:bg-slate-50 active:bg-slate-100 transition-colors"
            >
              <BsArrowReturnRight size={24} />
            </Link>
          </div>
          {/* Mobile Menu - When the screen is small */}
        </nav>

        {/* Main content with 3 columns */}
        <div className="flex flex-col lg:flex-row relative w-full lg:flex-1 justify-center overflow-y-auto lg:overflow-y-hidden lg:overflow-hidden bg-white">
          {/* Left sidebar */}
          <LeftSidebar
            isLeftMenuOpen={isLeftMenuOpen}
            setIsLeftMenuOpen={setIsLeftMenuOpen}
          />

          {/* Main calendar area */}
          <main className="flex lg:min-h-[95vh] size-full flex-col gap-4 h-full lg:flex-1 bg-[#f7f7f7] px-4 py-2 pb-0 lg:pb-2 lg:overflow-hidden overflow-y-auto">
            {children}
          </main>

          {/* Right sidebar */}
          <RightSidebar selectedDate={selectedDate} events={selectedEvents} />
        </div>
      </div>
    </CalendarContext.Provider>
  );
}
