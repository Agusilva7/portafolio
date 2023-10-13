"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import {useSectionInView} from "@/app/lib/hooks"
import { useActiveSectionContext } from "@/context/active-section-context";


function Intro() {
  const{ref}=useSectionInView('Home',0.5);
  const { setActiveSection,setTimeOfLastClick}=useActiveSectionContext();

  return (
    <section className="mb-28 max-w-[50rem]  text-center sm:mb-0 scroll-mt-[100rem]"  ref={ref} id="home">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="https://iili.io/Jd48Oil.jpg"
              alt="Agus"
              width={"192"}
              height={"192"}
              quality={"95"}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shodow-xl"
            />
          </motion.div>

          <motion.span
            className=" absolute bottom-0 right-0 text-2xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffnes: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold ">{`Hello,I'm Agustin silva.`}</span>
        {"I'm a "}
        <span className="font-bold">full-stack developer</span>
        <br />
        <span className="font-bold">
          Disfruto creando sitios y aplicaciones.{" "}
        </span>
        <br />
        <span className="italic">mi enfoque es </span>
        <span className="underline">React (Next.js)</span>
      </motion.h1>
      <motion.div className="flex flex-col sm:flex-row items-center gap-2 px-4 text-lg font-medium" initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{delay:0.1}}>
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={()=>{
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now)
          }}
        >
          Contact me here <BsArrowRight className="opacity-79 group-hover:translate-x-1 transition" />
       
        </Link>
        <a className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" href="/CV.pdf" download>
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
        </a>
        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:sacle-110 hover:scale-110  hover:text-gray-950 active:scale-105 transition cursor pointer borderBlack" href="https://www.linkedin.com/in/agustinsilva7/" target="_blank"><BsLinkedin/></a>

        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:sacle-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor pointer borderBlack"><FaGithubSquare/></a>
      </motion.div>
    </section>
  );
}

export default Intro;