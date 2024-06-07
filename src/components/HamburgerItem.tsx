"use client";
import React from 'react'

interface HamburgerItemProps {
    onClick: () => void;
    label: any;
  }

const HamburgerItem: React.FC<HamburgerItemProps> = ({onClick, label}) => {
  return (
    <div
     onClick={onClick}
     className="
     px-4 
     py-3 
     hover:bg-neutral-100 
     transition
     font-semibold
     "
    >
        {label}
    </div>
  )
}

export default HamburgerItem