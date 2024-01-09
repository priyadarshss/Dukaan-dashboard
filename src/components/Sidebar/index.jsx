'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { GoHome } from 'react-icons/go'
import { LuClipboardList } from 'react-icons/lu'
import { BsBox2, BsTruck } from 'react-icons/bs'
import { PiSpeakerHigh } from 'react-icons/pi'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import { MdOutlinePayments } from 'react-icons/md'
import { LuMousePointer2 } from 'react-icons/lu'
import { TbDiscount2 } from 'react-icons/tb'
import { GoPeople } from 'react-icons/go'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { HiOutlineLightningBolt } from 'react-icons/hi'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { CiWallet } from 'react-icons/ci'

const Sidebar = () => {
  const [isListVisible, setIsListVisible] = useState(true)

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible)
  }

  const menuItems = [
    { name: 'Home', icon: <GoHome /> },
    { name: 'Orders', icon: <LuClipboardList /> },
    { name: 'Products', icon: <BsBox2 /> },
    { name: 'Delivery', icon: <BsTruck /> },
    { name: 'Marketing', icon: <PiSpeakerHigh /> },
    { name: 'Analytics', icon: <TbBrandGoogleAnalytics /> },
    { name: 'Payments', icon: <MdOutlinePayments /> },
    { name: 'Tools', icon: <LuMousePointer2 /> },
    { name: 'Discounts', icon: <TbDiscount2 /> },
    { name: 'Audience', icon: <GoPeople /> },
    { name: 'Appearance', icon: <IoColorPaletteOutline /> },
    { name: 'Plugins', icon: <HiOutlineLightningBolt /> },
  ]

  return (
    <div className='w-1/6 h-[100vh] bg-[#1E2640] text-white p-4 flex flex-col justify-between'>
      <div>
        <div
          className='flex items-center justify-between'
          onClick={toggleListVisibility}
        >
          <Image src='images/logo.svg' alt='Logo' width={50} height={50} />
          <div>
            <h1 className='text-md'>Nishyan</h1>
            <p className='text-sm text-gray-400 underline'>Visit Store</p>
          </div>
          <div className='cursor-pointer'>
            {isListVisible ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>
        <div
          className='transition-max-height ease-in-out duration-700 overflow-hidden'
          style={{ maxHeight: isListVisible ? '100vh' : '0' }}
        >
          <ul className='mt-4'>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className='flex items-center space-x-2 hover:bg-[#353C53] rounded-[5px] p-1 cursor-pointer'
              >
                {item.icon}
                <a href='#' className='hover:text-gray-400 my-1'>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='rounded-[5px] bg-[#353C53] h-[70px] w-full flex items-center justify-center gap-3'>
        <div className='flex items-center justify-between rounded-[5px] bg-gray-500 p-1'>
          <CiWallet size={'35px'} />
        </div>
        <div className='flex-col justify-center'>
          <h1 className='text-sm text-gray-300'>Available Credits</h1>
          <p className='text-md'>222.10</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
