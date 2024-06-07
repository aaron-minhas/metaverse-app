"use client";
import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from "../app/utils/motion";
import ExploreCard from '@/components/ExploreCard';

const ExploreWorldData = [
  { 
      id: 'world-01',
      title:"The Hogwarts",
      imgUrl: "/planet-01.png",
  },
  { 
    id: 'world-02',
    title:"The Upside Down",
    imgUrl: "/planet-02.png",
},
{ 
  id: 'world-03',
  title:"Paradise Island",
  imgUrl: "/planet-03.png",
},
{ 
  id: 'world-04',
  title:"Knowhere",
  imgUrl: "/planet-04.png",
},
{ 
  id: 'world-05',
  title:"Hawkins Lab",
  imgUrl: "/planet-05.png",
},
  
]

const Explore = () => {
  const [active, setActive] = useState('world-02');
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12"
      id="explore">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col">
        <motion.h1
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-semibold sm:text-[25px] text-[15px] text-center text-secondary-white underline underline-offset-2">
            The World
        </motion.h1>
        <h2 className="mt-[8px] font-bold sm:text-[58px] text-[46px] text-center text-white">
          Choose the world you want <br className="md: block-hidden" /> to explore
        </h2>
        <div className="flex lg:flex-row flex-col min-h-[70vh] gap-5 mt-[50px]">
          
          {ExploreWorldData.map((world, index) => (
              <ExploreCard
               key={world.id}
               {...world}
               index={index}
               title={world.title}
               imgUrl={world.imgUrl}
               active={active}
               handleClick={setActive}
                />
            ))
          }

        </div>
      </motion.div>
    </section>
  )
}

export default Explore