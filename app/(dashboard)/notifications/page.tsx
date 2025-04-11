"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notifications = () => {
  const [toggles, setToggles] = useState({
    eventToggled: true,
    otherToggled: true,
  });

  type ToggleType = "event" | "other";

  const handleToggle = (toggleType: ToggleType) => {
    setToggles((prev) => ({
      ...prev,
      [toggleType + "Toggled" as "eventToggled" | "otherToggled"]: !prev[toggleType + "Toggled" as "eventToggled" | "otherToggled"],
    }));
    toast.success("Setting updated" ,{
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
          Notifications
        </div>
        <div className="fle-row flex items-center justify-end"></div>
      </div>

      <div className="pt-4">
        <section className="flex flex-col self-stretch">
          <div className="flex overflow-hidden flex-col rounded-xl text-slate-700 dark:text-white border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            {/* Event Notifications */}
            <div className="border-t border-slate-100 dark:border-slate-800 transition-colors first:border-t-0 hover:bg-slate-50 hover:dark:bg-slate-800 active:dark:bg-slate-700">
              <div className="flex flex-row items-center justify-between gap-2 px-5 py-4">
                <div className="flex flex-1 flex-col items-start gap-1">
                  <h3 className="text-sm whitespace-nowrap dark:text-white">
                    Event Notifications
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    When disabled, your messaging app will no longer receive any
                    event notifications
                  </p>
                </div>
                <div className="flex flex-row items-center justify-end gap-1">
                  <div
                    className={`flex w-8 shrink-0 flex-row items-center rounded-full p-0.5 cursor-pointer transition-colors 
                    ${
                      toggles.eventToggled
                        ? "bg-green-500 dark:bg-green-600 justify-end"
                        : "bg-slate-300 dark:bg-slate-700 justify-end"
                    }`}
                    onClick={() => handleToggle("event")}
                  >
                    <div
                      className={`size-4 rounded-full bg-white dark:bg-slate-200 transition-transform flex flex-row items-center justify-center
                        ${
                          toggles.eventToggled
                            ? "translate-x-3"
                            : "translate-x-0"
                        }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Notifications */}
            <div className="border-t border-slate-100 dark:border-slate-800 transition-colors first:border-t-0 hover:bg-slate-50 hover:dark:bg-slate-800 active:dark:bg-slate-700">
              <div className="flex flex-row items-center justify-between gap-2 px-5 py-4">
                <div className="flex flex-1 flex-col items-start gap-1">
                  <h3 className="text-sm whitespace-nowrap dark:text-white">
                    Other Notifications
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    When disabled, Maya will no longer send you all other
                    notifications
                  </p>
                </div>
                <div className="flex flex-row items-center justify-end gap-1">
                  <div
                    className={`flex w-8 shrink-0 flex-row items-center rounded-full p-0.5 cursor-pointer transition-colors 
                    ${
                      toggles.otherToggled
                        ? "bg-green-500 dark:bg-green-600 justify-end"
                        : "bg-slate-300 dark:bg-slate-700 justify-end"
                    }`}
                    onClick={() => handleToggle("other")}
                  >
                    <div
                      className={`size-4 rounded-full bg-white dark:bg-slate-200 transition-transform flex flex-row items-center justify-center 
                        ${toggles.otherToggled ? "translate-x-3" : "translate-x-0"}`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Agenda */}
            <div className="border-t border-slate-100 dark:border-slate-800 transition-colors first:border-t-0 hover:bg-slate-50 hover:dark:bg-slate-800 active:bg-slate-100 active:dark:bg-slate-700">
              <div className="flex cursor-pointer flex-row items-center justify-between gap-2 px-5 py-4">
                <div className="flex flex-1 flex-col items-start gap-1">
                  <h3 className="text-sm whitespace-nowrap dark:text-white">
                    Daily Agenda
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    When disabled, Maya will stop sending your daily agenda
                  </p>
                </div>
                <button
                  className="px-2 py-1 text-xs text-white font-semibold rounded-md bg-gradient-to-r from-[#9B87F5] to-purple-700 cursor-pointer"
                  
                >
                  Premium
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Notifications;
