"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, planetVariants } from "../app/utils/motion";

const GetStarted = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8">
          <motion.div
            variants={planetVariants('left')}
            className="flex-1 flex justify-center items-center">
              <img src="/get-started.png" alt="get started" className="w-[90%] h-[90%] object-contain"/>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col">
              <motion.h1 
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="font-normal text-[14px] text-secondary-white">
                  How Metaversus Works
              </motion.h1>
              <motion.h2 
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="mt-[8px] font-bold md:text-[64px] text-[40px] text-white">
                  Get started with just a few clicks
              </motion.h2>
            <div>
              <div className="flex justify-center items-center flex-row pb-3 pt-2">
                <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]">
                  <p className="font-bold text-[20px] text-white">
                    01
                  </p>
                </div>
                <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
                  Find a world that suits you and you want to enter
                </p>
              </div>
              <div className="flex justify-center items-center flex-row pb-3">
                <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]">
                  <p className="font-bold text-[20px] text-white">
                    02
                  </p>
                </div>
                <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
                  Find a world that suits you and you want to enter
                </p>
              </div>
              <div className="flex justify-center items-center flex-row pb-3">
                <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]">
                  <p className="font-bold text-[20px] text-white">
                    03
                  </p>
                </div>
                <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
                  Find a world that suits you and you want to enter
                </p>
              </div>
            </div>
          </motion.div>
      </motion.div>
    </section>
  )
}

export default GetStarted