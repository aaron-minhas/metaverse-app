"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { footerVariants } from "../app/utils/motion";

export const socialsData = [
  {
    name: 'twitter',
    url: '/twitter.svg',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
  },
];

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="sm:p-16 xs:p-8 px-6 py-8 relative">
        <div className="footer-gradient" />
        <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8">
          <div className="flex items-center justify-between flex-wrap gap-5">
            <h4 className="font-bold md:text-[64px] text-[44px] text-white">
              Enter the Metaverse
            </h4>
            <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">
              <img src="/headset.svg" alt="headset" className="w-[24px] h-[24px] object-contain" />
              <span className="font-normal text-[16px] text-white">ENTER METAVERSE</span>
            </button>
          </div>
          <div className="flex flex-col">
            <div className="mb-[50px] h-[2px] bg-secondary-white opacity-10ty" />
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h4 className="font-extrabold text-[24px] text-white">
                Metaversus
              </h4>
              <p className="font-normal text-[14px] text-white opacity-50">
                Copyright &#169; 2021-2022 Metaversus. All rights reserved.
              </p>
              <div className="flex gap-4">
                {socialsData.map((social) => (
                  <img
                    key={social.name}
                    src={social.url}
                    alt={social.name}
                    className="w-[24px] h-[24px] object-contain cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
    </motion.footer>
  )
}

export default Footer