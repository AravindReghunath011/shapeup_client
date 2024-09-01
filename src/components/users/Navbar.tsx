
import { Link,useNavigate } from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux'
import { clearUser } from '@/redux/userSlice'
const Navbar = () => {

    const navigate = useNavigate()
    const user = useSelector((state:any)=>state.persisted.user.user)
    console.log(user.name)
    const dispatch = useDispatch()
  return (
    <>  
    <div className='sm:hidden'>
      navbar
    </div>
    
      <div className='h-14  hover:text-white   inset-0 bg-black bg-opacity-85 backdrop-blur-lg z-50 sm:h-24  border-gray-600 hidden sm:flex   xl:h-24 border-b fixed top-0  w-full justify-between xl:pr-8 items-center     '>
      <Link to="/"><img src="/logo.png" className='h-14 xl:ml-5' alt="" /></Link>
      <ul className='font-sans  font-bold flex gap-28  '>
        <li className='text-gray-300 hover:text-white hover:cursor-pointer '><Link to={'/'}>HOME </Link></li>
        {/* <li className='text-gray-300 hover:text-white hover:cursor-pointer '><Link to={'/trainer/subscription'}>ABOUT</Link></li> */}
        <li className='text-gray-300 hover:text-white hover:cursor-pointer '><Link to={'/trainers'}>TRAINERS</Link></li>
        <li className='text-gray-300 hover:text-white hover:cursor-pointer '><Link to={'/video'}>  VIDEOS</Link></li>
      </ul>
      <div className='flex items-center gap-4'>
      <Link  to="/trainer/register" className='font-roboto text-gray-300 hover:text-white'>BECOME A TRAINER</Link>
      {
        user.name ? <button onClick={()=>dispatch(clearUser())} className='border  xl:w-32 xl:h-12 hover:ring-1 transition-all duration-100  ring-white'>PROFILE</button> :
      <button onClick={()=>navigate('/login')} className='border  xl:w-32 xl:h-12 hover:ring-1 transition-all duration-100  ring-white'>SIGN IN</button>

      }
      </div>
    </div>
    </>
    
  )
}

export default Navbar