import Navbar from '@/components/users/Navbar'
import axios from '../../utils/axios/baseUrl'
import { useEffect, useState } from 'react'
import { DataTable } from '@/components/ui/dataTable'
import { userColumn } from '@/components/ui/column'
import Sidebar from '@/components/ui/sidebar'
import { toast } from 'sonner'
import { usersListURL } from '@/utils/axios/apiUrls'

const UserList = () => {
  const [user,setUsers] = useState([])
  useEffect(()=>{
    axios().get(usersListURL).then((response:any)=>{

	try {
		console.log(response.data,'nnnnnnn')
      if(response.data.message=='success'){
        setUsers(response.data.users)
      }else{
		console.log(response.data.message,'jjj')
        toast.error(response.data.message)
      }
	} catch (error:any) {
		toast.error(error.message)
	}
      
    })
  },[])
  
  return (
    <>
    <Navbar/>
    
    <div className="flex flex-grow w-full lg:mt-24 ">
        
        <Sidebar select='Users'/>
        
       
<div className='flex justify-center w-full '>

<div className='w-11/12 lg:mt-14' >

<DataTable  columns={userColumn} data={user} />
</div>
</div>



    </div>
    </>
  )
}

export default UserList
