import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShieldAlt, FaChevronLeft } from "react-icons/fa";

const Account = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row items-center gap-4">
        <div className="font-semibold text-xl flex-1 text-black dark:text-white text-center md:text-start">
          Account
        </div>
        <div className="flex-row flex items-center justify-end"></div>
      </div>

      <div className="pt-4">
        <div className="flex flex-col gap-6">
          {/* Account Info Section */}
          <section className="flex flex-col self-stretch">
            <div className="flex overflow-hidden flex-col rounded-xl text-slate-700 dark:text-white border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="flex flex-col items-center py-5 overflow-hidden">
                <Image
                  src="/images/maya-logo.png"
                  alt="User Avatar"
                  width={80}
                  height={80}
                  className="object-cover w-[80px] h-[80px] rounded-full"
                />
                <div className="flex w-full flex-col gap-2 items-center">
                  <h2 className="text-lg px-6 break-all text-center leading-none dark:text-white flex flex-row items-center gap-2">
                    <span className="font-semibold py-2">UserName</span>
                  </h2>
                  <div className="text-xs text-center px-8 break-all text-slate-400 dark:text-slate-500">
                    example@gmail.com
                  </div>
                </div>
                <div className="px-6 text-center text-xs text-slate-400 dark:text-slate-500">
                  Your journey with Maya started on{" "}
                  <span className="font-semibold">Mar 19, 2025</span>
                </div>
              </div>

              {/* Preferred Name */}
              <div className="border-t border-slate-100 dark:border-slate-800 transition-colors hover:bg-slate-50 hover:dark:bg-slate-800 active:bg-slate-100 active:dark:bg-slate-700">
                <div className="flex cursor-pointer flex-row items-center justify-between gap-2 px-5 py-4">
                  <div className="flex flex-1 flex-col items-start gap-1">
                    <h3 className="text-sm whitespace-nowrap dark:text-white">
                      Preferred Name
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      Maya will address you by this name
                    </p>
                  </div>
                  <form className="flex grow-0 flex-row items-center justify-end gap-2">
                    <input
                      className="w-24 focus:pe-1 transition-all h-10 bg-transparent text-end text-sm"
                      value="UserName"
                      readOnly
                      aria-label="Preferred name"
                    />
                  </form>
                </div>
              </div>

              {/* Email */}
              <div className="border-t border-slate-100 dark:border-slate-800 transition-colors hover:bg-slate-50 hover:dark:bg-slate-800 active:bg-slate-100 active:dark:bg-slate-700">
                <div className="flex cursor-pointer flex-row items-center justify-between gap-2 px-5 py-4">
                  <div className="flex flex-1 flex-col items-start gap-1">
                    <h3 className="text-sm whitespace-nowrap dark:text-white">
                      Email
                    </h3>
                  </div>
                  <div className="flex flex-row items-center gap-1 text-sm overflow-hidden text-green-700">
                    <FaShieldAlt className="size-4 shrink-0 fill-green-50" />
                    <span className="truncate">example@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Plan */}
              <div className="border-t border-slate-100 dark:border-slate-800 transition-colors hover:bg-slate-50 hover:dark:bg-slate-800 active:bg-slate-100 active:dark:bg-slate-700">
                <Link
                  href="/dashboard"
                  className="flex flex-row items-center justify-between gap-2 px-5 py-4 overflow-hidden w-full"
                >
                  <div className="flex flex-1 flex-col items-start gap-1">
                    <h3 className="text-sm whitespace-nowrap dark:text-white">
                      Your Plan
                    </h3>
                  </div>
                  <div className="flex flex-row items-center justify-end overflow-hidden text-sm text-slate-500 dark:text-slate-400">
                    Free
                    <FaChevronLeft className="size-5 ms-1 stroke-slate-500 dark:stroke-slate-400" />
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* Feedback Section */}
          {/* <section className="flex flex-col self-stretch">
            <header className="px-5 flex flex-row items-center justify-between gap-1 pb-2 text-xs uppercase text-dola-darkgray dark:text-dola-lightgray">
              Give Us Feedback<div className="flex-1"></div>
            </header>
            <div className="flex overflow-hidden flex-col rounded-xl text-slate-700 dark:text-white border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="p-4 flex flex-row items-center gap-1 md:gap-2">
                <span className="flex-1 text-sm">How do you feel?</span>
                {["😃", "🙂", "😐", "🙁", "😣"].map((emoji, index) => (
                  <button
                    key={index}
                    className="size-8 shrink-0 select-none cursor-pointer text-center text-base flex flex-col items-center justify-center rounded-full transition-colors bg-slate-500/20 hover:bg-slate-500/40"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </section> */}

          {/* Footer Buttons */}
          <div className="flex flex-col items-start gap-2 text-xs">
            {/* <button className="text-slate-500">Export Calendar Data</button> */}
            <Link
              href="/account/deactive"
              className="flex cursor-pointer flex-row items-center gap-2 text-red-500"
            >
              Delete Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
