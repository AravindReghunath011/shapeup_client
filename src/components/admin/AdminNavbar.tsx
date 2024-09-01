
import { Link,useNavigate } from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux'
import { clearUser } from '@/redux/userSlice'
const Navbar = () => {

    const navigate = useNavigate()
    const user = useSelector((state:any)=>state.persisted.trainer.trainer)
    console.log(user.name)
    const dispatch = useDispatch()
  return (
    <>  
    <div className='sm:hidden'>
      navbar
    </div>
    
      <div className='h-14  hover:text-white   inset-0 bg-black bg-opacity-85 backdrop-blur-lg z-50 sm:h-14  border-gray-600 hidden sm:flex   xl:h-20 border-b fixed top-0  w-full justify-between xl:pr-8 items-center     '>
      <Link to="/"><img src="/logo.png" className='h-14 xl:ml-5' alt="" /></Link>

      <div className='flex items-center gap-4'>
      {
         <button  className='border  xl:w-32 xl:h-12 hover:ring-1 transition-all duration-100  ring-white'>PROFILE</button> 

      }
      </div>
    </div>
    </>
    
  )
}

export default Navbar