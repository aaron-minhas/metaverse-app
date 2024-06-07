"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from "../app/utils/motion";

const World = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
     <div className="flex flex-col">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8">
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col mx-auto">
              <motion.h1 
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="font-normal text-[14px] text-secondary-white text-center">
                  People on the World
              </motion.h1>
              <motion.h2 
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="mt-[8px] font-bold md:text-[64px] text-[40px] text-white text-center">
                  Track friends around you and invite them to play together in the same world
              </motion.h2>
          </motion.div>
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.3, 1)}
        className="mt-[68px] flex h-[550px] 2xl:max-w-[1280px] w-full mx-auto">
          <img src="/map.png" alt="map" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute top-1/2 left-36 w-[70px] p-[6px] rounded-full bg-[#5d6690]">
        <img src="/people-01.png" alt="people" className="w-full h-full" />
      </div>
      <div className="absolute top-[55%] left-[50%] w-[70px] p-[6px] rounded-full bg-[#5d6690]">
        <img src="/people-02.png" alt="people" className="w-full h-full" />
      </div>
      <div className="absolute top-3/4 left-[45%] w-[70px] p-[6px] rounded-full bg-[#9ba6d6]">
        <img src="/people-03.png" alt="people" className="w-full h-full" />
      </div>
     </div>
    </section>
  )
}

export default World