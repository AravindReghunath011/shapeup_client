import { Button } from '@/components/ui/button'
import  { useEffect, useState } from 'react'
import { DropdownMenu,DropdownMenuItem,DropdownMenuContent,DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { axiosPrivet } from '@/utils/axios/baseUrl'
import { RequestInterface } from '@/utils/interface/requestInterface'
import Sidebar from '@/components/ui/sidebar'
import AdminNavbar from '@/components/admin/AdminNavbar'
import { acceptRequestURL, getRequests, rejectRequestURL, trainerRequestsURL } from '@/utils/axios/apiUrls'

const TrainersRequests = () => {
    const  [requests, setRequests] = useState<RequestInterface[]>()
    useEffect(()=>{
        fetchRequests()
    },[])

    const fetchRequests = () => {
        axiosPrivet.post(getRequests).then(({ data }: any) => {
            console.log(data, 'data')
            setRequests(data.data)
        })
    }

    const acceptRequest = async(id:string)=>{
        axiosPrivet.put(acceptRequestURL,{requestId:id}).then((response:any)=>{
            console.log(response.data)
        })
         fetchRequests()
    }
    
    const rejectRequest = async(id:string)=>{
        axiosPrivet.put(rejectRequestURL,{requestId:id}).then((response:any)=>{
            console.log(response.data)
        })
    }
     
  return (
    <>
       <AdminNavbar/>
    <div className='flex mt-20 '>
        <Sidebar select={'trainersRequests'}/>
        <div className="flex justify-center w-full pb-10 ">
        <table className='border border-input text-center mt-10 ml-10 '>
            <thead className='border border-input ' >
                <tr >
                    <th className='border border-input w-20 py-2 '>#</th>
                    <th className='border border-input w-20 py-2'>id</th>
                    <th className='border border-input w-60 py-2'>email</th>
                    <th className='border border-input w-60 py-2'>certificate</th>
                    <th className='border border-input w-60 py-2'>actions</th>
                </tr>
                
            </thead>
            <tbody>
                {
                    requests?.length == 0 ? <div> No Requests</div> :
                    requests?.map((request:RequestInterface,i:number)=>{
                       return  <tr key={request._id}>
                    <td className='border border-input'>{i+1}</td>
                    <td className='border border-input px-3'>{request._id}</td>
                    <td className='border border-input'>{request?.email}</td>
                    <td className='border border-input'><Button variant={'link'}>show certificate</Button></td>
                    <td className='border border-input'>
                        <DropdownMenu>
                            <DropdownMenuTrigger className='hover:bg-gray-700  rounded w-7 h-7 text-center '>
                                ...
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='bg-gray-900 hover:cursor-pointer'>

                            <DropdownMenuItem className='border w-32 ' onClick={()=>acceptRequest(request._id)}>Accept</DropdownMenuItem>
                            <DropdownMenuItem className='border px-3' onClick={()=>rejectRequest(request._id)}>Reject</DropdownMenuItem>
                            </DropdownMenuContent>

                        </DropdownMenu>
                    </td>
                </tr>
                    })
                }
                
                
            </tbody>
        </table>
        </div>
        
        
    </div>
    </>
  )
}

export default TrainersRequests