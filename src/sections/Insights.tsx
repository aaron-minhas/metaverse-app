"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from "../app/utils/motion";
import InsightCard from '@/components/InsightCard';

export const insightsData = [
  {
    imgUrl: '/planet-06.png',
    title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
    subtitle:
        'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
  },
  {
    imgUrl: '/planet-07.png',
    title: '7 tips to easily master the madness of the Metaverse',
    subtitle:
        'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
  },
  {
    imgUrl: '/planet-08.png',
    title: 'With one platform you can explore the whole world virtually',
    subtitle:
        'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
  },
];

const Insights = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8">
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col mx-auto">
              <motion.h1 
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="font-normal text-[14px] text-secondary-white text-center">
                  Insight
              </motion.h1>
              <motion.h2 
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="mt-[8px] font-bold md:text-[64px] text-[40px] text-white text-center">
                  Insight about metaverse
              </motion.h2>
          </motion.div>
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insightsData.map((insight, index) => (
            <InsightCard
            key={insight.title}
            {...insight}
            title={insight.title}
            subtitle={insight.subtitle}
            imgUrl={insight.imgUrl}
            index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Insights