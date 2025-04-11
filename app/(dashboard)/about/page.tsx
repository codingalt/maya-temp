import React from "react";
import Link from "next/link";
import {
  FiShare2,
  FiMail,
  FiMessageCircle,
  FiExternalLink,
} from "react-icons/fi";
import Image from "next/image";

const About = () => {
  const logos = [
    { src: "/images/tiktok.png", alt: "Tiktok Logo", link: "/tiktok" },
    { src: "/images/x.png", alt: "Twitter Logo", link: "/twitter" },
    { src: "/images/instagram.png", alt: "Instagram Logo", link: "/instagram" },
    { src: "/images/facebook.png", alt: "Facebook Logo", link: "/facebook" },
    { src: "/images/linkedin.png", alt: "LinkedIn Logo", link: "/linkedIn" },
  ];

  return (
    <div className="flex-1 overflow-x-hidden">
      <div className="flex flex-col">
        <div className="w-full flex flex-row items-center gap-4">
          <div className="font-semibold text-xl flex-1 text-black dark:text-white text-center md:text-start">
            About Maya
          </div>
          <div className="flex-row flex items-center justify-end"></div>
        </div>
        <div className="pt-4">
          <div className="flex flex-col self-stretch">
            <div className="flex overflow-hidden flex-col rounded-xl text-slate-700 dark:text-white border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="border-t border-slate-100 dark:border-slate-800 transition-colors first:border-t-0 hover:bg-slate-50 hover:dark:bg-slate-800 active:bg-slate-100 active:dark:bg-slate-700">
                <div className="flex cursor-pointer flex-row items-center justify-between gap-2 px-5 py-4">
                  <div className="flex flex-1 flex-col items-start gap-1">
                    <h3 className="text-sm whitespace-nowrap dark:text-white">
                      Follow Us
                    </h3>
                  </div>
                  <div className="flex flex-row items-center">
                    {logos.map((logo, index) => (
                      <Link
                        key={index}
                        href={logo.link}
                        className="flex size-10 cursor-pointer flex-row items-center justify-center rounded-lg border border-transparent hover:border-slate-200 hover:bg-white"
                      >
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={24}
                          height={24}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-100 dark:border-slate-800 transition-colors first:border-t-0 hover:bg-slate-50 hover:dark:bg-slate-800 active:bg-slate-100 active:dark:bg-slate-700">
                <div className="flex cursor-pointer flex-row items-center justify-between gap-2 px-5 py-4">
                  <div className="flex flex-1 flex-col items-start gap-1">
                    <h3 className="text-sm whitespace-nowrap dark:text-white">
                      Share with Friends
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      Ever wondered what it&apos;s like to have a personal AI
                      scheduling wizard? Well, I just found out!!
                    </p>
                  </div>
                  <Link
                    href="/share"
                    className="rounded-md flex flex-row items-center gap-1 cursor-pointer bg-blue-50 dark:bg-blue-950 px-2 py-1.5 text-blue-700 dark:text-blue-400 hover:bg-blue-100 hover:dark:bg-blue-900 active:bg-blue-200 active:dark:bg-blue-800 text-xs"
                  >
                    <FiShare2 className="stroke-blue-700 me-1" size={14} />
                    Share
                  </Link>
                </div>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 transition-colors first:border-t-0 hover:bg-slate-50 hover:dark:bg-slate-800 active:bg-slate-100 active:dark:bg-slate-700">
                <div className="flex cursor-pointer flex-row items-center justify-between gap-2 px-5 py-4">
                  <div className="flex flex-1 flex-col items-start gap-1">
                    <h3 className="text-sm whitespace-nowrap dark:text-white">
                      Contact Us
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      Your feedback, feature request, and bug reports are always
                      welcome!
                    </p>
                  </div>
                  <Link
                    href=""
                    className="rounded-md flex flex-row items-center gap-1 cursor-pointer bg-blue-50 dark:bg-blue-950 px-2 py-1.5 text-blue-700 dark:text-blue-400 hover:bg-blue-100 hover:dark:bg-blue-900 active:bg-blue-200 active:dark:bg-blue-800 text-xs"
                  >
                    <FiMail className="stroke-blue-700" size={14} />
                    Email
                  </Link>
                  <Link
                    href=""
                    className="rounded-md flex flex-row items-center gap-1 cursor-pointer bg-blue-50 dark:bg-blue-950 px-2 py-1.5 text-blue-700 dark:text-blue-400 hover:bg-blue-100 hover:dark:bg-blue-900 active:bg-blue-200 active:dark:bg-blue-800 text-xs"
                  >
                    <FiMessageCircle className="stroke-blue-700" size={14} />
                    Feedback
                  </Link>
                </div>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 transition-colors first:border-t-0 hover:bg-slate-50 hover:dark:bg-slate-800 active:bg-slate-100 active:dark:bg-slate-700">
                <div className="flex cursor-pointer flex-row items-center justify-between gap-2 px-5 py-4">
                  <div className="flex flex-1 flex-col items-start gap-1">
                    <h3 className="text-sm whitespace-nowrap dark:text-white">
                      Terms
                    </h3>
                  </div>
                  <div className="flex flex-row items-center gap-1 text-xs">
                    <Link
                      href=""
                      className="rounded-md flex flex-row items-center gap-1 cursor-pointer bg-blue-50 dark:bg-blue-950 px-2 py-1.5 text-blue-700 dark:text-blue-400 hover:bg-blue-100 hover:dark:bg-blue-900 active:bg-blue-200 active:dark:bg-blue-800"
                    >
                      Terms of Use{" "}
                      <FiExternalLink className="size-3 stroke-blue-700" />
                    </Link>
                    <Link
                      href=""
                      className="rounded-md flex flex-row items-center gap-1 cursor-pointer bg-blue-50 dark:bg-blue-950 px-2 py-1.5 text-blue-700 dark:text-blue-400 hover:bg-blue-100 hover:dark:bg-blue-900 active:bg-blue-200 active:dark:bg-blue-800"
                    >
                      Privacy Policy{" "}
                      <FiExternalLink className="size-3 stroke-blue-700" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
