"use client";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

const General = () => {
  const [theme, setTheme] = useState<string>("light");

  // Function to handle theme change
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    // Check for the theme in localStorage or default to 'light'
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    // Save the theme to localStorage whenever it changes
    localStorage.setItem("theme", theme);
  }, [theme]);

  const [toggles, setToggles] = useState({
    timeToggled: true,
    emojiToggled: true,
  });

  type ToggleType = "time" | "emoji";

  const handleToggle = (toggleType: ToggleType) => {
    setToggles((prev) => ({
      ...prev,
      [(toggleType + "Toggled") as "timeToggled" | "emojiToggled"]:
        !prev[(toggleType + "Toggled") as "timeToggled" | "emojiToggled"],
    }));
    toast.success("Setting updated", {
      position: "top-right",
      autoClose: 1500,
      closeOnClick: true,
      theme: "light",
    });
  };

  return (
    <div className="flex flex-col">
      <ToastContainer />
      <div className="w-full flex flex-row items-center gap-4">
        <div className="font-semibold text-xl flex-1 text-black dark:text-white text-center md:text-start">
          General
        </div>
      </div>

      <div className="pt-4">
        <section className="flex flex-col self-stretch">
          <div className="flex overflow-hidden flex-col rounded-xl text-slate-700 dark:text-white border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            {/* Language */}
            {/* <div className="border-t border-slate-100 dark:border-slate-800 hover:bg-slate-50 hover:dark:bg-slate-800">
              <div className="flex flex-row items-center justify-between gap-2 px-5 py-4">
                <div className="flex flex-1 flex-col items-start gap-1">
                  <h3 className="text-sm dark:text-white">Language</h3>
                </div>
                <button className="flex flex-row items-center gap-1 text-sm text-slate-600 dark:text-slate-100 hover:bg-white hover:dark:bg-slate-800 px-1 rounded-md">
                  <span>English</span>
                  <Image
                    src="/icons/chevrons.svg"
                    alt="Toggle"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div> */}

            {/* Time Zone */}
            {/* <div className="border-t border-slate-100 dark:border-slate-800 hover:bg-slate-50 hover:dark:bg-slate-800">
              <div className="flex flex-row items-center justify-between gap-2 px-5 py-4">
                <div className="flex flex-1 flex-col items-start gap-1">
                  <h3 className="text-sm dark:text-white">Time Zone</h3>
                </div>
                <button className="flex flex-row items-center gap-1 text-sm text-slate-600 dark:text-slate-100 hover:bg-white hover:dark:bg-slate-800 px-1 rounded-md">
                  <span>Israel Daylight Time</span>
                  <Image
                    src="/icons/chevrons.svg"
                    alt="Toggle"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div> */}

            {/* 24-Hour Time Toggle */}
            <div className="border-t border-slate-100 dark:border-slate-800 hover:bg-slate-50 hover:dark:bg-slate-800">
              <div className="flex flex-row items-center justify-between gap-2 px-5 py-4">
                <div className="flex flex-1 flex-col items-start gap-1">
                  <h3 className="text-sm dark:text-white">24-Hour Time</h3>
                </div>
                <div
                  className={`flex w-8 shrink-0 items-center rounded-full p-0.5 cursor-pointer transition-colors ${
                    toggles.timeToggled
                      ? "bg-green-500 dark:bg-green-600"
                      : "bg-slate-300 dark:bg-slate-700"
                  }`}
                  onClick={() => handleToggle("time")}
                  dir="auto"
                >
                  <div
                    className={`size-4 rounded-full bg-white dark:bg-slate-200 transition-transform ${
                      toggles.timeToggled ? "translate-x-3" : "translate-x-0"
                    }`}
                  ></div>
                </div>
              </div>
            </div>

            {/* Color Scheme */}
            <div className="border-t border-slate-100 dark:border-slate-800 transition-colors first:border-t-0 hover:bg-slate-50 hover:dark:bg-slate-800 active:bg-slate-100 active:dark:bg-slate-700">
              <div className="flex cursor-pointer flex-row items-center justify-between gap-2 px-5 py-4">
                <div className="flex flex-1 flex-col items-start gap-1">
                  <h3 className="text-sm whitespace-nowrap dark:text-white">
                    Color Scheme
                  </h3>
                </div>
                <label className="relative">
                  <select
                    className="absolute inset-0 cursor-pointer opacity-0"
                    value={theme}
                    onChange={(e) => handleThemeChange(e.target.value)}
                  >
                    <option value="system">Follow System</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                  <button className="flex flex-row items-center text-slate-600 dark:text-slate-100 cursor-pointer justify-end gap-1 rounded-md py-0.5 px-0 hover:px-1 transition-all hover:bg-white hover:dark:bg-slate-800 active:bg-slate-200 active:dark:bg-slate-700 disabled:opacity-60 disabled:cursor-not-allowed text-sm">
                    <span>
                      {theme.charAt(0).toUpperCase() + theme.slice(1)}
                    </span>
                    <div className="flex flex-col ms-1">
                      <FaChevronUp className="text-blue-500 dark:text-blue-400 size-2.5" />
                      <FaChevronDown className="text-blue-500 dark:text-blue-400 size-2.5" />
                    </div>
                  </button>
                </label>
              </div>
            </div>

            {/* Emoji View Toggle */}
            {/* <div className="border-t border-slate-100 dark:border-slate-800 hover:bg-slate-50 hover:dark:bg-slate-800">
              <div className="flex flex-row items-center justify-between gap-2 px-5 py-4">
                <div className="flex flex-1 flex-col items-start gap-1">
                  <h3 className="text-sm dark:text-white">Emoji View</h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    Choose how your events appear on the webapp calendar. Toggle
                    on for emoji view, off for color view.
                  </p>
                </div>
                <div
                  className={`flex w-8 shrink-0 items-center rounded-full p-0.5 cursor-pointer transition-colors ${
                    toggles.emojiToggled
                      ? "bg-green-500 dark:bg-green-600"
                      : "bg-slate-300 dark:bg-slate-700"
                  }`}
                  onClick={() => handleToggle("emoji")}
                >
                  <div
                    className={`size-4 rounded-full bg-white dark:bg-slate-200 transition-transform ${
                      toggles.emojiToggled ? "translate-x-3" : "translate-x-0"
                    }`}
                  ></div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default General;
