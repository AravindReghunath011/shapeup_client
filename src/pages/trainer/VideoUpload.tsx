import React from 'react'
import Sidebar from '../../components/trainer/trainerSideBar'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { axiosPrivet } from '@/utils/axios/baseUrl';
import { toast } from 'sonner';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Navbar from '@/components/trainer/TrainerNavbar';
import { videoUpload } from '@/utils/axios/apiUrls';


const VideoUpload = () => {
  const trainer = useSelector((state:any)=>state.persisted.trainer.trainer)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async(data:any)=>{
        
    console.log(data,'jj')
    const formData = new FormData();
formData.append('file', data.file[0]);
formData.append('title', data.title);
formData.append('bodypart', data.bodypart);
formData.append('description', data.description);
formData.append('trainerId', trainer._id);
    axios.post(videoUpload,formData,{withCredentials:true}).then((response:any)=>{
        console.log(response.data)
        if(response.data.message=='success'){
            toast.success('Video uploaded successfully')
            
        }else{
            console.log(response.data.message)
            toast.error(response.data.message)
        }

    })
}
  return (
    <div className='flex'>
      <Navbar/>
        <Sidebar/>
        <div className='pl-10 pt-32 w-5/12  ' >
          <h1 className='text-5xl font-bold mb-5'>Video Upload</h1>
         
          <form action="" onSubmit={handleSubmit(onSubmit)} >
            <div className='flex'>
              <div>

            <label > Title </label> <br /> 
                <input  type="text"  {...register("title", { required: true })}  className='mb-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72' placeholder='Enter video title'  /> 
                {errors.title && <p className='font-extralight text-sm h-2  text-red-700'>This field is required</p>}
              </div>
              <div className='ml-5'>

              <label > Bodypart</label>  <br />

                <input  type="text "  {...register("bodypart", { required: true })}  className='mb-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72' placeholder='Enter bodypart'  /> <br />
                {errors.bodypart && <p className='font-extralight  text-sm h-2 text-red-700'>This field is required</p>}
              </div>

            </div>
              
              <label> description</label> <br />

                <textarea   {...register("description", { required: true })} placeholder='Enter description'  className='mb-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-full  h-32'  > </textarea>
                {errors.description && <p className='font-extralight text-sm h-2  text-red-700'>This field is required</p>}

                <br />
                <input  type="file" {...register("file", { required: true })} className='mb-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72'   /> <br />

                <button type='submit' name='submit' className='w-72 rounded bg-white text-black font-medium p-2 mt-5'>Upload</button>
                <div className='flex  justify-center  text-center  w-full '>
                    
                </div>
                </form>
        </div>
    </div>
  )
}

export default VideoUpload