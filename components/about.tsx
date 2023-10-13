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
            Soy Agustin silva tengo 20 años y soy un apasionado 
            <span className='font-medium'>desarrollador Frontend </span><br/>

            Mi primer acercamiento en la programacion comenzó estudiando Licenciatura en sistemas en la universidad Nacional de Lujan con Python. Como me llamo la atenciòn participé en el curso Codo a Codo 4.0, donde obtuve una sólida base en este lenguaje de programación versátil.<br/>

            Sin embargo, mi punto de inflexión llegó cuando decidí embarcarme en el bootcamp de programación SoyHenry. Durante este intensivo programa tuve la oportunidad de trabajar en proyectos emocionantes.

            Uno de los momentos destacados de mi carrera hasta ahora fue mi participación en una pasantía en Calm es Simple, donde trabajé en la refactorización de su sitio web utilizando tecnologías modernas como Next.js, React y TypeScript. Durante esta experiencia, aprendí a enfrentar desafíos complejos y aporté soluciones creativas para mejorar la usabilidad y el rendimiento del sitio.<br/>


            ¡Espero poder contribuir a tu próximo proyecto y seguir creciendo como desarrollador Frontend!
        
        </p>
        
   </motion.section> 
  );
}

export default About