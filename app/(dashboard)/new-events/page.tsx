"use client";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import Image from "next/image";

const Events = () => {
  const [smartTimingEnabled, setSmartTimingEnabled] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState("15 minutes");
  const [selectedAlertTime, setSelectedAlertTime] =
    useState("30 minutes before");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if we're in the browser (client-side) before accessing localStorage
    if (typeof window !== "undefined") {
      const storedSmartTiming = localStorage.getItem("smartTimingEnabled");
      const storedDuration = localStorage.getItem("selectedDuration");
      const storedAlertTime = localStorage.getItem("selectedAlertTime");

      if (storedSmartTiming) {
        setSmartTimingEnabled(storedSmartTiming === "true");
      }

      if (storedDuration) {
        setSelectedDuration(storedDuration);
      }
      if (storedAlertTime) {
        setSelectedAlertTime(storedAlertTime);
      }
      setIsLoaded(true);
    }
  }, []);

  const handleToggle = () => {
    const newSmartTiming = !smartTimingEnabled;
    setSmartTimingEnabled(newSmartTiming);

    if (typeof window !== "undefined") {
      localStorage.setItem("smartTimingEnabled", newSmartTiming.toString());
    }

    const toastMessage = newSmartTiming
      ? "Smart Timing Enabled"
      : "Smart Timing Disabled";

    toast.success(toastMessage, {
      position: "top-right",
      autoClose: 1500,
      closeOnClick: true,
      theme: "light",
    });
  };

  const handleDurationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newDuration = event.target.value;
    setSelectedDuration(newDuration);
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedDuration", newDuration);
    }
    toast.success(`Event Duration set to ${newDuration}`, {
      position: "top-right",
      autoClose: 1500,
      closeOnClick: true,
      theme: "light",
    });
  };

  const handleAlertTimeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newAlertTime = event.target.value;
    setSelectedAlertTime(newAlertTime);
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedAlertTime", newAlertTime); // Save to localStorage
    }
    toast.success(`Event Duration set to ${newAlertTime}`, {
      position: "top-right",
      autoClose: 1500,
      closeOnClick: true,
      theme: "light",
    });
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="flex flex-col">
      <ToastContainer />
      <div className="w-full flex flex-row items-center gap-4">
        <div className="font-semibold text-xl flex-1 text-black dark:text-white text-center md:text-start">
          New Events
        </div>
        <div className="flex-row flex items-center justify-end"></div>
      </div>
      <div className="pt-4">
        <div className="flex flex-col gap-6">
          <section className="flex flex-col self-stretch">
            <div className="flex overflow-hidden flex-col rounded-xl text-slate-700 dark:text-white border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="border-t border-slate-100 dark:border-slate-800 transition-colors first:border-t-0 hover:bg-slate-50 hover:dark:bg-slate-800 active:bg-slate-100 active:dark:bg-slate-700">
                <div
                  className="flex cursor-pointer flex-row items-center justify-between gap-2 px-5 py-4"
                  onClick={handleToggle}
                >
                  <div className="flex flex-1 flex-col items-start gap-1">
                    <h3 className="text-sm whitespace-nowrap dark:text-white">
                      Smart Timing
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      Let Maya help you decide how long your events should be
                      and when to alert you
                    </p>
                  </div>
                  <div
                    className={`flex w-8 shrink-0 flex-row items-center rounded-full p-0.5 justify-end transition-colors ${
                      smartTimingEnabled
                        ? "bg-green-500 dark:bg-green-600"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  >
                    <div
                      className={`size-4 rounded-full bg-white dark:bg-slate-200 transition-transform flex flex-row items-center justify-center ${
                        smartTimingEnabled ? "translate-x-3" : "translate-x-0"
                      }`}
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 transition-colors first:border-t-0 hover:bg-slate-50 hover:dark:bg-slate-800 active:bg-slate-100 active:dark:bg-slate-700">
                <div className="flex cursor-pointer flex-row items-center justify-between gap-2 px-5 py-4">
                  <div className="flex flex-1 flex-col items-start gap-1">
                    <h3 className="text-sm whitespace-nowrap dark:text-white">
                      Event Duration
                    </h3>
                  </div>
                  <label className="relative">
                    <select
                      className="absolute inset-0 cursor-pointer opacity-0"
                      disabled={smartTimingEnabled}
                      value={selectedDuration}
                      onChange={handleDurationChange}
                    >
                      <option value="15 minutes">15 minutes</option>
                      <option value="25 minutes">25 minutes</option>
                      <option value="30 minutes">30 minutes</option>
                      <option value="45 minutes">45 minutes</option>
                      <option value="50 minutes">50 minutes</option>
                      <option value="55 minutes">55 minutes</option>
                      <option value="1 hour">1 hour</option>
                      <option value="1 hour, 30 minutes">
                        1 hour, 30 minutes
                      </option>
                      <option value="2 hours">2 hours</option>
                    </select>
                    <button
                      className="flex flex-row items-center text-slate-600 dark:text-slate-100 cursor-pointer justify-end gap-1 rounded-md py-0.5 px-0 hover:px-1 transition-all hover:bg-white hover:dark:bg-slate-800 active:bg-slate-200 active:dark:bg-slate-700 disabled:opacity-60 disabled:cursor-not-allowed"
                      disabled={smartTimingEnabled}
                    >
                      <span className="text-xs">
                        {smartTimingEnabled
                          ? "Smart Timing"
                          : `${selectedDuration}`}
                      </span>
                      <div className="flex flex-col ms-1">
                        <FaChevronUp className="text-blue-500 dark:text-blue-400 size-2.5" />
                        <FaChevronDown className="text-blue-500 dark:text-blue-400 size-2.5" />
                      </div>
                    </button>
                  </label>
                </div>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 transition-colors first:border-t-0 hover:bg-slate-50 hover:dark:bg-slate-800 active:bg-slate-100 active:dark:bg-slate-700">
                <div className="flex cursor-pointer flex-row items-center justify-between gap-2 px-5 py-4">
                  <div className="flex flex-1 flex-col items-start gap-1">
                    <h3 className="text-sm whitespace-nowrap dark:text-white">
                      Event Alert
                    </h3>
                  </div>
                  <label className="relative">
                    <select
                      className="absolute inset-0 cursor-pointer opacity-0"
                      disabled={smartTimingEnabled}
                      value={selectedAlertTime}
                      onChange={handleAlertTimeChange}
                    >
                      <option value="At time of event">At time of event</option>
                      <option value="5 minutes before">5 minutes before</option>
                      <option value="10 minutes before">
                        10 minutes before
                      </option>
                      <option value="15 minutes before">
                        15 minutes before
                      </option>
                      <option value="30 minutes before">
                        30 minutes before
                      </option>
                      <option value="1 hour before">1 hour before</option>
                      <option value="2 hours before">2 hours before</option>
                      <option value="1 day before">1 day before</option>
                      <option value="2 days before">2 days before</option>
                      <option value="1 week before">1 week before</option>
                    </select>
                    <button
                      className="flex flex-row items-center text-slate-600 dark:text-slate-100 cursor-pointer justify-end gap-1 rounded-md py-0.5 px-0 hover:px-1 transition-all hover:bg-white hover:dark:bg-slate-800 active:bg-slate-200 active:dark:bg-slate-700 disabled:opacity-60 disabled:cursor-not-allowed"
                      disabled={smartTimingEnabled}
                    >
                      <span className="text-xs">
                        {smartTimingEnabled
                          ? "Smart Timing"
                          : `${selectedAlertTime}`}
                      </span>
                      <div className="flex flex-col ms-1">
                        <FaChevronUp className="text-blue-500 dark:text-blue-400 size-2.5" />
                        <FaChevronDown className="text-blue-500 dark:text-blue-400 size-2.5" />
                      </div>
                    </button>
                  </label>
                </div>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 transition-colors first:border-t-0 hover:bg-slate-50 hover:dark:bg-slate-800 active:bg-slate-100 active:dark:bg-slate-700">
                <div className="flex cursor-pointer flex-row items-center justify-between gap-2 px-5 py-4">
                  <div className="flex flex-1 flex-col items-start gap-1">
                    <h3 className="text-sm whitespace-nowrap dark:text-white">
                      Event Conflict Detection
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      Let us make sure you&apos;re not double booked.
                    </p>
                  </div>
                  <button className="px-2 py-1 text-xs text-white font-semibold rounded-md bg-gradient-to-r from-[#9B87F5] to-purple-700 cursor-pointer">
                    Premium
                  </button>
                </div>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 transition-colors first:border-t-0 hover:bg-slate-50 hover:dark:bg-slate-800 active:bg-slate-100 active:dark:bg-slate-700">
                <div className="flex cursor-pointer flex-row flex-wrap items-center justify-between gap-2 px-5 py-4">
                  <div className="flex-1 min-w-0 flex flex-col items-start gap-1 mb-2 sm:mb-0">
                    <h3 className="text-sm dark:text-white flex flex-row items-center justify-end gap-1 ms-[-6px]">
                      <Image
                        src="/svgs/google.svg"
                        alt="Google Meet"
                        width={30}
                        height={30}
                        className="flex-shrink-0"
                      />
                      <span className="break-words">
                        Auto-generate Google Meet Links
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      Maya will auto-generate Google Meet links for applicable
                      events
                    </p>
                  </div>
                  <button className="px-2 py-1 text-xs text-white font-semibold rounded-md bg-gradient-to-r from-[#9B87F5] to-purple-700 cursor-pointer flex-shrink-0">
                    Premium
                  </button>
                </div>
              </div>
            </div>
            <div className="px-5 pt-2 text-xs text-slate-400 dark:text-slate-500">
              These settings will apply to all newly created events
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Events;
