import Navbar from '@/components/trainer/TrainerNavbar'
import { Button } from '@/components/ui/button'
import Sidebar from '@/components/trainer/trainerSideBar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import React, { useEffect, useState } from 'react'
import { axiosPrivet } from '@/utils/axios/baseUrl'
import { useParams } from 'react-router-dom'
import { getSubscribers } from '@/utils/axios/apiUrls'

const SubscribersList = () => {
    const [subscribers,setSubscribers] = useState([])
    let {trainerId} = useParams()
    useEffect(()=>{
        axiosPrivet.get(getSubscribers + `${trainerId}`).then(({data}:any)=>{
            console.log(data,'dataaa')
            setSubscribers(data.subscribers)
        })
    })
  return (
    <div>
        <Navbar/>
        <div className='flex mt-20 '>
        <Sidebar/>
        <div className="flex justify-center w-full pb-10 ">
        <table className='border border-input text-center mt-10 ml-10 '>
            <thead className='border border-input ' >
                <tr >
                    <th className='border border-input w-20 py-2 '>#</th>
                    
                    <th className='border border-input w-60 py-2'>email</th>
                    <th className='border border-input w-60 py-2'>amount</th>
                    <th className='border border-input w-60 py-2'>duration</th>
                </tr>
                
            </thead>
            <tbody>
                {
                    subscribers?.map((subscriber:any,i:number)=>{
                       return  <tr key={subscriber._id}>
                    <td className='border border-input'>{i+1}</td>
                    <td className='border border-input px-3'>{subscriber.email}</td>
                    <td className='border border-input px-3'>{subscriber.amount}</td>
                    <td className='border border-input px-3'>{subscriber.duration}</td>
                    
                   
                </tr>
                    })
                }
                
                
            </tbody>
        </table>
        </div>
        
        
    </div>


    </div>
  )
}

export default SubscribersList