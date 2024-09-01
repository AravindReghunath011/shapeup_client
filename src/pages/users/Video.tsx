// @ts-nocheck
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Navbar from '@/components/users/Navbar'
import { getVideosURL } from '@/utils/axios/apiUrls'
import  axios  from '@/utils/axios/baseUrl'
import { videoData } from '@/utils/interface/videoData'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Video = () => {
    const [videos,setVideos] = useState([])

    useEffect(()=>{
        axios().get(getVideosURL).then(({data}:any)=>{
            console.log(data,'data')
            setVideos(data.videos)
        })
    },[])

    const getData = ()=>{

    }
    const navigate = useNavigate()
  return (
    <>
    <Navbar/>
    {/* <Input type='search' name='Search' onChange={()=>getData()} placeholder='Search...' className='rounded w-72 pl-2 py-2 ml-40 mt-32'/> */}

    <div className="flex justify-center mt-32 w-full ">
    <div className="flex ml-10 mt-10 w-10/12 flex-wrap flex-grow   gap-10   mb-10">
      {
        videos.map((video:videoData)=>{
            return  <Card className="h-64 w-80 hover:ring-2 rounded border-none p-4 flex-col justify-center" >
            <div >
              <video  onClick={()=>navigate(`/video/${video._id}`)} className="object-cover object-center rounded h-44 w-72 " src={`${video.video}`}  />
            </div>
            <div className="text-start p-2 font-semibold">
              <p>
                {video.title}
              </p>
              <p>
                {video.description.slice(0,25)}...
              </p>
             
            </div>
          </Card>
        })
      }
     
     
    </div>
    </div>
    
    </>
  )
}

export default Video