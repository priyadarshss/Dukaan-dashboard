"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import TransactionsTable from '@/components/TransactionsTable'

const Index = () => {
  const [position, setPosition] = useState('Last Month')

  return (
    <div className='bg-gray-50 h-full pt-5 px-10'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-medium text-gray-900'>Overview</h1>
        <div className='flex justify-center items-center border-[1px] border-gray-300 rounded-[5px] pr-3'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className='border-none'>
              <Button variant='outline'>{position}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
              <DropdownMenuLabel>Time Period</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value='Last Month'>
                  Last Month
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value='Last 6 Months'>
                  Last 6 Months
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value='Last Year'>
                  Last Year
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <FaChevronDown />
        </div>
      </div>
      <div className='flex space-x-4 justify-center items-center mt-5'>
        <div className='bg-white w-1/2 p-4 rounded shadow-md h-[100px] cursor-pointer'>
          <h2 className='text-lg font-medium text-gray-600'>Online orders</h2>
          <p className='text-2xl font-semibold text-gray-900 mt-4'>231</p>
        </div>
        <div className='bg-white w-1/2 p-4 rounded shadow-md h-[100px] cursor-pointer'>
          <h2 className='text-lg font-medium text-gray-600'>Amount received</h2>
          <p className='text-2xl font-semibold text-gray-900 mt-4'>₹23,92,312.19</p>
        </div>
      </div>
      <TransactionsTable />
    </div>
  )
}

export default Index
