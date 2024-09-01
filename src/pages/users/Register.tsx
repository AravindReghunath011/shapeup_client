
import {useState} from 'react'
import Navbar from '../../components/users/Navbar'
import {  toast } from 'sonner';
import axios from '../../utils/axios/baseUrl';
import {Link, useNavigate} from 'react-router-dom'
import { registerURL } from '@/utils/axios/apiUrls';

const Register = () => {
  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')

  const handleregister = ()=>{
    console.log(email,password,'body')
    axios().post(registerURL, {
      email:email,
      password:password,
      name:name
    },{withCredentials:true})
    .then(function ({data}) {
        if(data.message=='Verify your email'){
          toast.success(data.message)
          navigate('/otp')
        }
        toast.error(data.message)
      console.log(data.otp,'helo');

    })
    .catch(function (error) {
      console.log(error.message);
      toast.error(error.message)
    });
  }
  return (
      <>
      
      <Navbar/>
      
    <div className='font-mono xl:mt-40'>
        <h1 className='font-mono font-bold text-5xl ml-8 mt-14 sm:text-8xl sm:mt-36 sm:ml-24 lg:mt-20 lg:ml-56'>Registrations</h1>
        <div className='ml-32 mt-64 sm:ml-80 sm:mt-96 lg:ml-[55vw] lg:mt-44 '>
            <input onChange={(e)=>setName(e.target.value)} className='bg-transparent outline mb-3 h-8 sm:h-16 sm:w-96 pl-2 sm:text-2xl sm:pl-5 lg:h-10 lg:w-80 lg:text-base outline-gray-500 outline-1 ' placeholder='Enter your name'  type="text" /><br />
            <input onChange={(e)=>setEmail(e.target.value)} className='bg-transparent outline mb-3 h-8 sm:h-16 sm:w-96 pl-2 sm:text-2xl sm:pl-5 lg:h-10 lg:w-80 lg:text-base outline-gray-500 outline-1 ' placeholder='Enter your email'  type="text" /><br />
            <input onChange={(e)=>setPassword(e.target.value)} className='bg-transparent outline  h-8 pl-2 sm:h-16 sm:w-96 sm:text-2xl sm:pl-5 outline-gray-500 outline-1 lg:h-10 lg:w-80 lg:text-base  xl:mb-3' placeholder='Enter your password' type="password" /> <br />
            <button onClick={()=>handleregister()} className='bg-yellow-400 text-black outline font-bold h-8 pl-2 lg:h-10  lg:w-80 lg:text-base outline-gray-500 outline-1 w-56 sm:h-16  sm:w-96 sm:text-2xl '  type="submit" > sign up</button>
            <div className='flex'>
            <p className='text-sm ml-5 mb-3 font-thin   sm:text-xl sm:ml-12 lg:text-base lg:ml-10'>Already have an account?</p>
                <Link className='lg:ml-2  text-sm font-thin sm:text-xl lg:text-base underline' to="/login">login</Link>
                
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Register