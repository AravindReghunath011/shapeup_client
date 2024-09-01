import Navbar from '@/components/trainer/TrainerNavbar'
import { axiosPrivet } from '@/utils/axios/baseUrl'
import { videoData } from '@/utils/interface/videoData'

import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { videoDetailURL } from '@/utils/axios/apiUrls'

const videoDetail = () => {
    const [video,setVideo] = useState<videoData | null>(null);
    let {id} = useParams() 
    useEffect(()=>{
        axiosPrivet.get(videoDetailURL + `${id}`).then(({data})=>{
            console.log(data)
            setVideo(data)
        })
    },[])
  return (
      
    <div className='  flex justify-center  pt-32'>
      <Navbar/>
        <div className=' w-6/12'>

        <video controls src={video?.video} className='  rounded'/>
       
        <div >
          <p className=' text-2xl'> {video?.title}</p>
          <p className=' text-xl'> {video?.description.slice(0,20)}...</p>
        </div>
        </div>
    </div>
  )
}

export default videoDetail