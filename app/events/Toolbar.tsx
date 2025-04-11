"use client";

import { useState, useEffect, useContext } from "react";
import { format } from "date-fns";

import {
  ArrowLeft2,
  ArrowRight2,
  Calendar1,
  Category,
  Grid6,
  TableDocument,
} from "iconsax-react";
import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
import { CalendarContext } from "./layout";
import { useMediaQuerySafe } from "@/hooks/useMediaQuery";

// View options
const viewOptions = [
  {
    label: "Month",
    value: "dayGridMonth",
    icon: Category,
  },
  {
    label: "Agenda",
    value: "listWeek",
    icon: TableDocument,
  },
];

interface ToolbarProps {
  date: Date;
  view: string;
  onClickNext: () => void;
  onClickPrev: () => void;
  onClickToday: () => void;
  onChangeView: (view: string) => void;
}

export default function Toolbar({
  date,
  view,
  onClickNext,
  onClickPrev,
  onClickToday,
  onChangeView,
}: ToolbarProps) {
  // const [isMobile, setIsMobile] = useState(false);
  const isMobile = useMediaQuerySafe(
    "only screen and (max-width : 992px)",
    false
  );
  const [viewFilter, setViewFilter] = useState(viewOptions);
  const { isLeftMenuOpen, setIsLeftMenuOpen } = useContext(CalendarContext);
  const [isTodayActive, setIsTodayActive] = useState(false);
  console.log(date);

  // Check if current date is today
  useEffect(() => {
    const today = new Date();
    const isToday =
      today.getDate() === date.getDate() &&
      today.getMonth() === date.getMonth() &&
      today.getFullYear() === date.getFullYear();

    setIsTodayActive(isToday);
  }, [date]);

  // Check for mobile view
  // useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth < 992); // sm breakpoint
  //   };

  //   checkMobile(); // Check on initial load
  //   window.addEventListener("resize", checkMobile);

  //   return () => {
  //     window.removeEventListener("resize", checkMobile);
  //   };
  // }, []);

  // Filter views for mobile
  useEffect(() => {
    if (isMobile) {
      const filter = viewOptions.filter(
        (item) => item.value !== "dayGridMonth" && item.value !== "timeGridWeek"
      );
      setViewFilter(filter);
    } else {
      setViewFilter(viewOptions);
    }
  }, [isMobile]);

  // Handle Today button click
  const handleTodayClick = () => {
    onClickToday();
    setIsTodayActive(true);
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-4 px-0 p-3 pb-5 lg:pb-3 border-gray-200">
      <div className="flex items-center space-x-4">
        {/* Toggle Left Menu Button  */}
        <button
          onClick={() => setIsLeftMenuOpen(!isLeftMenuOpen)}
          className="w-5 h-5 cursor-pointer text-gray-600 bg-transparent rounded-full flex items-center justify-center"
        >
          {isMobile ? (
            isLeftMenuOpen ? (
              <PanelRightOpen />
            ) : (
              <PanelLeftOpen />
            )
          ) : isLeftMenuOpen ? (
            <PanelLeftOpen />
          ) : (
            <PanelRightOpen />
          )}
        </button>
        {/* Today button */}
        <div className="flex justify-center md:justify-start items-center">
          <button
            className={`px-4 py-1.5 text-xs ${
              isTodayActive && "ring-purple-400 ring-1"
            } rounded-full bg-white hover:bg-gray-50 text-gray-600 transition-all cursor-pointer hover:border-gray-200 hover:text-gray-900 flex items-center justify-center`}
            onClick={handleTodayClick}
          >
            Today
          </button>
        </div>
      </div>

      {/* Date navigation */}
      <div className="flex items-center justify-center space-x-1.5">
        <button
          className="w-7 h-7 text-gray-900 rounded-full hover:bg-gray-200 transition-colors cursor-pointer flex items-center justify-center"
          onClick={onClickPrev}
          aria-label="Previous"
        >
          <ArrowLeft2 size="16" color="#555" />
        </button>

        <h3 className="font-medium text-gray-700">
          {format(date, "MMMM yyyy")}
        </h3>

        <button
          className="w-7 h-7 rounded-full hover:bg-gray-200 transition-colors cursor-pointer flex items-center justify-center"
          onClick={onClickNext}
          aria-label="Next"
        >
          <ArrowRight2 size="16" color="#555" />
        </button>
      </div>

      {/* View options */}
      <div className="hidden lg:flex justify-center md:justify-end">
        <div className="inline-flex rounded-md">
          {viewFilter.map((viewOption) => {
            const Icon = viewOption.icon;
            const isActive = viewOption.value === view;

            return (
              <button
                key={viewOption.value}
                title={viewOption.label}
                aria-label={viewOption.label}
                onClick={() => onChangeView(viewOption.value)}
                className={`
                  relative inline-flex items-center px-3 py-1.5 text-sm font-medium cursor-pointer
                  ${
                    isActive
                      ? "bg-gradient-to-r from-[#9B87F5] to-purple-700 text-white z-10"
                      : "text-gray-700 hover:bg-gray-50"
                  }
                  ${viewFilter.indexOf(viewOption) === 0 ? "rounded-l-md" : ""}
                  ${
                    viewFilter.indexOf(viewOption) === viewFilter.length - 1
                      ? "rounded-r-md"
                      : ""
                  }
                  ${viewFilter.indexOf(viewOption) !== 0 ? "-ml-px" : ""}
                  border border-gray-300
                  focus:z-10 focus:outline-none 
                  transition-colors
                `}
              >
                <Icon
                  variant={viewOption.value === view ? "Bold" : "Linear"}
                  color={isActive ? "#fff" : "#555"}
                  size={16}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
