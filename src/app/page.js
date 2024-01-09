import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Landing from '../components/Landing'

export default function Home() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full h-full'>
        <Header />
        <Landing />
      </div>
    </div>
  )
}
