"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, planetVariants } from "../app/utils/motion";
import Image from 'next/image';

const WhatsNew = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-5">
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col">
              <motion.h1 
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="font-normal text-[14px] text-secondary-white">
                  What&apos;s New
              </motion.h1>
              <motion.h2 
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="mt-[8px] font-bold md:text-[64px] text-[40px] text-white">
                  What&apos;s new about metaversus?
              </motion.h2>
            <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
              <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px] pr-5">
                <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]">
                  <Image src="/vrpano.svg" alt="vrpano" width={35} height={35} className="object-contain" />
                </div>
                <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">
                  A new world
                </h1>
                <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
                  We have the latest update with new world for you to try never mind.
                </p>
              </div>
              
              <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
                <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]">
                  <Image src="/headset.svg" alt="vrpano" width={35} height={35} className="object-contain" />
                </div>
                <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">
                  More realistic
                </h1>
                <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
                  In the latest update, your eyes are narrow, making the world more realistic than ever.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={planetVariants('right')}
            className="flex-1 flex justify-center items-center">
              <Image src="/whats-new.png" alt="what's new" width={620} height={640} className="w-[90%] h-[90%] object-contain"/>
          </motion.div>
      </motion.div>
    </section>
  )
}

export default WhatsNew