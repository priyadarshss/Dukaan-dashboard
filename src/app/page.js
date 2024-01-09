import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className='flex'>
      <Sidebar />
      <Header />
    </div>
  )
}
