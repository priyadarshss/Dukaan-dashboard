import React from 'react'
import { Input } from '@/components/ui/input'
import { GoQuestion } from 'react-icons/go'
import { BsChatLeftDotsFill } from 'react-icons/bs'
import { FaSortDown } from 'react-icons/fa6'
import { CiSearch } from 'react-icons/ci'

const index = () => {
  return (
    <div className='flex justify-between items-center w-full h-[75px] bg-white border-b-2 px-10 '>
      <div className='flex items-center justify-center gap-4'>
        <h3 className='text-md text-gray-800 font-medium'>Payments</h3>
        <div className='flex justify-between items-center gap-1'>
          <GoQuestion className='text-gray-500' />
          <p className='text-md text-gray-500'>How it works</p>
        </div>
      </div>
      <div className='flex justify-between items-center w-1/3 bg-gray-200 rounded-[5px]'>
        <CiSearch className='text-gray-500 h-[20px] w-[20px] ml-2' />
        <Input
          placeholder='Search features, tutorials, etc.'
          className='bg-gray-200 w-full border-none rounded-[5px] text-gray-700 '
        />
      </div>
      <div className='flex gap-2 w-1/12'>
        <div className='w-[40px] h-[40px] bg-gray-200 flex items-center justify-center rounded-[50%] cursor-pointer '>
          <BsChatLeftDotsFill />
        </div>
        <div className='w-[40px] h-[40px] bg-gray-200 flex items-center justify-center rounded-[50%] cursor-pointer '>
          <FaSortDown />
        </div>
      </div>
    </div>
  )
}

export default index
