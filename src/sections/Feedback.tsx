"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, zoomIn } from "../app/utils/motion";
import Image from 'next/image';

const Feedback = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8">
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col 
            sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative">
              <div className="feedback-gradient" />
              <div>
                <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
                  Aaron M. Minhas
                </h4>
                <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
                  Founder Metaversus
                </p>
              </div>
              <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
                &quot;With the development of today&apos;s technology, metaverse is very useful for today&apos;s work, or can
                be called Web 3.0. By using metaverse you can use it as anything.&quot;
              </p>
          </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="relative flex-1 flex justify-center items-center">
            <Image src="/planet-09.png" alt="planet-09" width={1200} height={1200}
             className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
            <motion.div
              variants={zoomIn(0.4, 1)}
              className="lg:block hidden absolute -left-[10%] top-[3%]">
                <Image src="/stamp.png" alt="stamp" width={155} height={155} className="w-[155px] h-[155px] object-contain" />
            </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Feedback