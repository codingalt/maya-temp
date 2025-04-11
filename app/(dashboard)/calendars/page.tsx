
import { LuCalendarArrowUp } from "react-icons/lu";
import { IoMdCalendar } from "react-icons/io";
import Image from "next/image";

const Calendar = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row items-center gap-4">
        <div className="font-semibold text-xl flex-1 text-black dark:text-white text-center md:text-start">
          Calendars
        </div>
        <div className="flex-row flex items-center justify-end"></div>
      </div>
      <div className="pt-4">
        <div className="flex flex-col gap-6">
          <section className="flex flex-col self-stretch">
            <div className="flex overflow-hidden flex-col rounded-xl text-slate-700 dark:text-white border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="border-t border-slate-100 dark:border-slate-800 transition-colors first:border-t-0 hover:bg-slate-50 hover:dark:bg-slate-800 active:bg-slate-100 active:dark:bg-slate-700 py-8 flex relative gap-4 flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-0.5">
                <LuCalendarArrowUp 
                
                    size={48}
                    className="text-slate-700 dark:text-white"
                />
                  <div className="mt-2 text-lg text-black dark:text-white">
                    Default Calendar
                  </div>
                  <p className="text-base text-slate-500 dark:text-slate-300">
                    Events will be created here.
                  </p>
                </div>
              </div>
              <div className="border-t border-slate-100 dark:border-slate-800 transition-colors first:border-t-0 hover:bg-slate-50 hover:dark:bg-slate-800 active:bg-slate-100 active:dark:bg-slate-700">
                <div className="flex cursor-pointer flex-row items-center justify-between gap-1 px-4 py-2">
                  <Image src="/images/maya-logo.png" alt="Maya Logo" width={48} height={48}>

                  </Image>
                  <div className="flex flex-1 flex-col items-start gap-1">
                    <h3 className="text-sm whitespace-nowrap dark:text-white">
                      Maya
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      Maya Calendar
                    </p>
                  </div>
                  <span className="text-xs">Change</span>
                  <IoMdCalendar
                    size={24}
                    className="text-slate-500 dark:text-white"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col self-stretch">
            <div className="flex overflow-hidden flex-col rounded-xl text-slate-700 dark:text-white border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="flex flex-col items-center gap-4 py-6">
                <div className="flex flex-row items-center justify-center gap-2">
                <Image src="/svgs/google.svg" alt="Maya Logo" width={48} height={48}/>
                  
                </div>
                <p className="px-6 text-center text-sm text-slate-500 dark:text-slate-400">
                  Let Maya keep your calendars organized!
                </p>
                <button className="text-sm px-6 h-10 rounded-full bg-black text-white hover:opacity-80 active:opacity-60 transition-opacity">
                  Add Calendar Account
                </button>
              </div>
              <div className="border-t border-slate-100 dark:border-slate-800 transition-colors first:border-t-0 hover:bg-slate-50 hover:dark:bg-slate-800 active:bg-slate-100 active:dark:bg-slate-700">
                <div className="flex cursor-pointer flex-row items-center justify-between gap-2 px-5 py-4">
                  <div className="flex flex-1 flex-col items-start gap-1">
                    <h3 className="text-sm whitespace-nowrap dark:text-white">
                      Maya Premium Can Help!
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      You can connect up to 1 calendar account. Upgrade to Maya
                      Premium to unlock more.
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
    </div>
  );
};

export default Calendar;
