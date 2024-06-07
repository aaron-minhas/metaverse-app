import React, { useCallback, useState } from 'react'
import HamburgerItem from './HamburgerItem';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
  setIsOpen((value) => !value);
  }, []);

  return (
    <div
    onClick={toggleOpen}
    className="
    p-4
    md:py-1
    md:px-2
    items-center 
    cursor-pointer 
    hover:shadow-md 
    transition
    "
    >
      <img src='/menu.svg' alt='menu' className='w-[24px] h-[24px] object-contain'/>
    
    {isOpen && (
        <div className="absolute rounded-md bg-white shadow-md w-[15vw] overflow-hidden text-gray-900 text-sm right-16 top-13">
            <div className="flex flex-col cursor-pointer">
                <HamburgerItem
                  onClick={() => function(){}}
                  label="About"
                />
                <HamburgerItem
                  onClick={() => function(){}}
                  label="Contact"
                />
                
            </div>
        </div>
    )}
    
    </div>
  )
}

export default Hamburger