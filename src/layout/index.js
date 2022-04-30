import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
export default function Layout() {
  return (
    <div  className='text-white  min-h-[100vh] flex flex-col justify-items-stretch bg-indigo-500 dark:bg-black'>
      <Header />
      <div className='grow'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}