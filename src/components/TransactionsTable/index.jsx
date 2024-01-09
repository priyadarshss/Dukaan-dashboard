import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon } from 'lucide-react'
import React, { useState } from 'react'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { BiSortAlt2 } from 'react-icons/bi'
import { MdOutlineFileDownload } from 'react-icons/md'

const Index = () => {
  const [data, setData] = useState([
    { id: '#821909', date: '7 July, 2023', amount: '₹1,000.23', fees: '₹22' },
    { id: '#821910', date: '7 July, 2023', amount: '₹2,258.23', fees: '₹22' },
    { id: '#821999', date: '7 July, 2023', amount: '₹4,288.23', fees: '₹22' },
    { id: '#821903', date: '7 July, 2023', amount: '₹8,278.23', fees: '₹22' },
    { id: '#821902', date: '7 July, 2023', amount: '₹2,178.23', fees: '₹22' },
    { id: '#821902', date: '7 July, 2023', amount: '₹2,178.50', fees: '₹22' },
  ])
  const [sortConfig, setSortConfig] = useState(null)
  const [toggleId, setToggleId] = useState(false)
  const [togglePrice, setTogglePrice] = useState(false)

  const sortedData = React.useMemo(() => {
    let sortableData = [...data]
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
    }
    return sortableData
  }, [data, sortConfig])

  const requestSort = (key) => {
    let direction = 'ascending'
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  return (
    <div className='bg-gray-50 h-full pt-10'>
      <h1 className='text-xl font-medium text-gray-900 mb-4'>
        Transactions | This Month
      </h1>
      <div className='container mx-auto bg-white p-4 rounded shadow-lg'>
        <div className='flex justify-between items-center mb-4'>
          <input
            type='text'
            placeholder='Search by order ID...'
            className='p-[6px] border rounded w-1/4'
          />
          <div>
            <button className='px-3 py-[6px] rounded text-black border-gray-300 border-[1px] '>
              <BiSortAlt2 className='inline-block mr-2 h-5 w-5' />
              Sort
            </button>
            <button className='px-4 py-[6px] rounded text-black ml-4 border-gray-300 border-[1px]'>
              <MdOutlineFileDownload className='inline-block h-6 w-6' />
            </button>
          </div>
        </div>

        <table className='min-w-full bg-white'>
          <thead>
            <tr>
              <th
                className='py-2 px-3 border-b cursor-pointer flex justify-start bg-gray-100'
                onClick={() => {
                  requestSort('id')
                  setToggleId(!toggleId)
                }}
              >
                Order ID
                {toggleId ? (
                  <ChevronUpIcon className='inline-block ml-1 mt-[2px] h-5 w-5' />
                ) : (
                  <ChevronDownIcon className='inline-block ml-1 mt-[2px] h-5 w-5' />
                )}
              </th>
              <th
                className='py-2 px-10 border-b cursor-pointer bg-gray-100'
                // onClick={() => requestSort('date')}
              >
                Order Date
              </th>
              <th
                className='py-2 px-10 border-b cursor-pointer bg-gray-100'
                onClick={() => {
                  requestSort('amount')
                  setTogglePrice(!togglePrice)
                }}
              >
                Order Amount
                {togglePrice ? (
                  <ChevronUpIcon className='inline-block ml-1 mt-[2px] h-5 w-5' />
                ) : (
                  <ChevronDownIcon className='inline-block ml-1 mt-[2px] h-5 w-5' />
                )}
              </th>
              <th
                className='py-2 px-3 border-b cursor-pointer flex justify-end bg-gray-100'
                // onClick={() => requestSort('fees')}
              >
                Transaction Fees
                <IoIosInformationCircleOutline className='inline-block ml-1 mt-[2px] h-5 w-5' />
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr key={index}>
                <td className='py-3 text-sm px-3 border-b text-blue-700'>{item.id}</td>
                <td className='py-3 text-sm px-3 border-b text-center'>
                  {item.date}
                </td>
                <td className='py-3 text-sm px-3 border-b text-center'>
                  {item.amount}
                </td>
                <td className='py-3 text-sm px-3 border-b text-right'>
                  {item.fees}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex justify-center items-center mt-4'>
          <div className='flex items-center'>
            <button className='flex justify-center items-center px-2 py-1 rounded border border-gray-300 mr-2'>
              <ChevronLeftIcon className='h-5 w-5' /> Previous
            </button>
            <div className='flex items-center'>
              <button className='px-2 py-1 rounded border border-gray-300 mr-1'>
                1
              </button>
              <span className='mr-1'>...</span>
              <button className='px-2 py-1 rounded border border-blue-800 bg-blue-700 text-white mr-1'>
                10
              </button>
              {Array.from({ length: 9 }, (_, i) => i + 11).map((page) => (
                <button
                  key={page}
                  className='px-2 py-1 rounded border border-gray-300 mr-1'
                >
                  {page}
                </button>
              ))}
            </div>
            <button className='flex justify-center items-center px-2 py-1 rounded border border-gray-300 ml-2'>
              Next <ChevronRightIcon className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
