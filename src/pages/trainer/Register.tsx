
import { useState } from 'react'
import axios from 'axios'
import {  toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { trainerRegister } from '@/utils/axios/apiUrls';


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate()
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let [name,setName] = useState('')
    const onSubmit = async(data:any)=>{
        
        console.log(data)
        const formData = new FormData();
    formData.append('file', data.file[0]);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
        axios.post(trainerRegister,formData,{withCredentials:true}).then((response:any)=>{
            console.log(response.data)
            if(response.data.message=='success'){
                toast.success('Otp is sent to the mail')
                navigate('/trainer/otp')
            }else{
                console.log(response.data.message)
                toast.error(response.data.message)
            }

        })
    }
  return (
    <div>
         <div className="grid grid-cols-9 grid-rows-3 gap-4  ">
        <div className="col-span-3 row-span-4 col-start-4 row-start-1 mt-28" >
            <div className=' h-[75vh] w-11/12 flex justify-center outline outline-1 outline-gray-500 rounded text-center'>
                <div className='mt-10 '>
                    <h1 className='text-6xl font-bold'>Register</h1>  
                    <p className='font-thin text-sm mt-4 '>Enter you name, email and password below</p>
                <form action="" onSubmit={handleSubmit(onSubmit)} >
                <input  type="text"  {...register("name", { required: true })}  className='mt-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72' placeholder='Enter your name'  />
                {errors.name && <p className='font-extralight text-sm h-2 text-red-700'>This field is required</p>}

                <input  type="text "  {...register("email", { required: true })}  className='mt-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72' placeholder='Enter your email'  />
                {errors.email && <p className='font-extralight text-sm h-2 text-red-700'>This field is required</p>}

                <input  type="password" {...register("password", { required: true })}  className='mt-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72' placeholder='Enter your password'  />
                {errors.password && <p className='font-extralight text-sm h-2 text-red-700'>This field is required</p>}

             
                
                <p className='font-extralight text-gray-500'>____________________________________________</p>
            
                <label className='font-light text-sm'> Upload certificate</label> <br />
                <input  type="file" {...register("file", { required: true })} className='mt-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72'   />

                <button type='submit' name='submit' className='w-72 rounded bg-white text-black font-medium p-2 mt-5'>sign up</button>
                <div className='flex  justify-center  text-center  w-full '>
                    <div className='flex gap-2 mt-3'>

                <p className='text-sm'>Already have an account </p>
                <Link to={'/trainer/login'} className='underline text-sm'> login </Link>
                    </div>
                </div>
                </form>
               
                </div>
                
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register