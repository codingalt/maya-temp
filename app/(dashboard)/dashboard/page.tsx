import React from "react";
import Link from "next/link";
import { IoIosInformationCircleOutline } from "react-icons/io";

const YourPlan = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row items-center gap-4">
        <div className="font-semibold text-xl flex-1 text-black dark:text-white text-center md:text-start">
          Your Plan
        </div>
        <div className="flex-row flex items-center justify-end"></div>
      </div>

      <div className="pt-4">
        <div className="flex flex-col gap-6">
          <section className="flex flex-col self-stretch">
            <div className="flex overflow-hidden flex-col rounded-xl text-slate-700 dark:text-white border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="w-full px-5 py-4 flex flex-col gap-8">
                <div>
                  <div className="flex flex-row items-center gap-1">
                    <h3 className="text-[#94A3B8] text-sm">Current plan</h3>
                    <div className="flex-1"></div>
                  </div>
                  <div className="font-semibold text-xl">Free</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center gap-1">
                    <h3 className="text-[#94A3B8] text-sm">Usage</h3>
                    <i className="size-5 rounded-full text-[#94A3B8]">
                      <IoIosInformationCircleOutline />
                    </i>
                    <div className="flex-1"></div>
                    <div className="text-xs text-[#94A3B8]">
                      Resets on <span>April 9 at 03:16:00</span>
                    </div>
                  </div>
                  <div className="border-t border-slate-100 dark:border-slate-700">
                    <div className="pt-3 pb-4 flex flex-col gap-2">
                      <div className="flex flex-row items-center">
                        <div>Events per week</div>
                        <div className="flex-1"></div>
                        <div className="flex flex-row items-center gap-0.5 text-sm">
                          <span className="font-semibold">0</span>
                          <span>/</span>
                          <span>7</span>
                        </div>
                      </div>
                      <div className="w-full h-1.5 bg-black/10 dark:bg-white/10 rounded-sm flex flex-row justify-end">
                        <div
                          className="rounded-sm h-full bg-[#64758B]"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="pt-3 pb-4 flex flex-col gap-2">
                      <div className="flex flex-row items-center">
                        <div>WhatsApp reminders</div>
                        <div className="flex-1"></div>
                        <div className="flex flex-row items-center gap-0.5 text-sm">
                          <span className="font-semibold">0</span>
                          <span>/</span>
                          <span>15</span>
                        </div>
                      </div>
                      <div className="w-full h-1.5 bg-black/10 dark:bg-white/10 rounded-sm flex flex-row justify-end">
                        <div
                          className="rounded-sm h-full bg-[#64758B]"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Link
            href="/upgrade"
            className="w-40 rounded-full bg-gradient-to-r from-[#9B87F5] to-purple-700 py-2.5 text-white text-center mx-auto"
          >
              Upgrade Now
          </Link>

          <div className="flex flex-row items-center justify-center">
            <Link href="/help" className="text-[#94A3B8] text-sm bg-transparent border-none">Need help?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourPlan;
