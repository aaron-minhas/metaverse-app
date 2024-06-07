"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../app/utils/motion';

const About = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <div className="z-0">
        <motion.div
         variants={staggerContainer()}
         initial="hidden"
         whileInView="show"
         viewport={{once: false, amount: 0.25}}
         className="2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col">
          <motion.h1
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="mt-[8px] font-semibold sm:text-[25px] text-[15px] text-center text-secondary-white underline underline-offset-2">
            About Metaversus
          </motion.h1>
          <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
            <span className="font-semibold text-white">Metaverse</span> is a new thing in the future, 
            where you can enjoy the virtual world by feeling 
            like it&apos;s really real, you can feel what you feel in this metaverse world, because this is
            really the <span className="font-semibold text-white">madness of the metaverse</span> of today, using only VR devices
            you can easily explore the metaverse world you want, turn your dreams into reality. 
            Let&apos;s <span className="font-semibold text-white">explore</span> the madness of the metaverse by scrolling down.
          </motion.p>
          <motion.img
            variants={fadeIn('up', 'tween', 0.3, 1)}
            src="/arrow-down.svg"
            alt="arrow down"
            className="w-[18px] h-[28px] object-contain mt-[28px]" />
        </motion.div>
      </div>
    </section>
  )
}

export default About