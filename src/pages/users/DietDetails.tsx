import { Card } from '@/components/ui/card'
import Navbar from '@/components/trainer/TrainerNavbar'
import { axiosPrivet } from '@/utils/axios/baseUrl'
import { dietData } from '@/utils/interface/dietInterface'

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dietDetailURL } from '@/utils/axios/apiUrls'

const dietDetail = () => {
    const [diet,setDiet] = useState<dietData | null>(null);
    let {id} = useParams() 
    useEffect(()=>{
        axiosPrivet.get(dietDetailURL +`${id}`).then(({data})=>{
            console.log(data)
            setDiet(data)
        })
    },[])
  return (
      
    <div className='  flex justify-center  pt-32'>
      <Navbar/>
        <div className=' w-6/12'>

        <img src={diet?.image} alt="" />
       
        <div >
          <p className=' text-2xl'> {diet?.title}</p>
          <p className=' text-xl'> {diet?.description.slice(0,20)}...</p>
        </div>
        </div>
    </div>
  )
}

export default dietDetail