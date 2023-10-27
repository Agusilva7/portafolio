"use client"
import React from 'react'
import SectionHeading from './section-heading';
import {motion} from "framer-motion"

import { useSectionInView } from '@/app/lib/hooks';

function About() {
  const {ref}=useSectionInView("About")

  return (
   <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:0.175}} id="about">
        <SectionHeading>Sobre mi</SectionHeading>
        <p className='mb-3'>
          I am Agustin Silva, I am 20 years old, and I am a passionate 
          <span className='font-medium'> Frontend developer</span><br/>
          My first exposure to programming began when I started studying Computer Science at the National University of Lujan using Python. As it caught my attention, I enrolled in the Codo a Codo 4.0 program, where I gained a solid foundation in this versatile programming language.<br/>

        However, my turning point came when I decided to embark on the programming bootcamp at SoyHenry. During this intensive program, I had the opportunity to work on exciting projects. One of the highlights of my career so far was my internship at <span className='underline'>Calm es Simple</span>, where I worked on the refactoring of their website using modern technologies like Next.js, React, and TypeScript. During this experience, I learned to tackle complex challenges and provided creative solutions to improve the usability and performance of the site.<br/>

      ¡I look forward to contributing to your next project and continuing to grow as a Frontend developer!

        </p>
        
   </motion.section> 
  );
}

export default About