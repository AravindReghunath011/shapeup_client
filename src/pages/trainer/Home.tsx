import Navbar from "@/components/trainer/TrainerNavbar"
import Sidebar from "@/components/trainer/trainerSideBar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {  getSubscribers, getsubscriptionplan } from "@/utils/axios/apiUrls"
import { axiosPrivet } from "@/utils/axios/baseUrl"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const [subscriptionPlan,setSubscriptionPlan] = useState('')
  const [subscription,setSubscription] = useState([])
  const [weekly,setWeekly] = useState('')
  const [monthly,setMonthly] = useState('')
  const [yearly,setYearly] = useState('')
  let trainer = useSelector((state:any)=>state.persisted.trainer.trainer)
  useEffect(()=>{
    axiosPrivet.get(getSubscribers + trainer._id).then(({data})=>{
      console.log(data,'purchased subsssss')
      setSubscription(data.data)
      let weekly = data.data.filter((obj)=>obj.duration == 'weekly')
      setWeekly(weekly.length)
      let monthly = data.data.filter((obj)=>obj.duration == 'monthly')
      setMonthly(monthly.length)
      let yearly = data.data.filter((obj)=>obj.duration == 'yearly')
      setYearly(yearly.length)
    })
    
    axiosPrivet.get(getsubscriptionplan + trainer._id).then(({data})=>{
      console.log(data,'subscription plan')
      setSubscriptionPlan(data.data)
    })
  },[])
  
  return (
    
    <div>
      <Navbar/>
      <div className=" flex">
      <Sidebar/>
      <div className="mt-20 ml-5">
        {
          subscriptionPlan == null ?
           <Card className="w-96 border-input text-center  justify-between p-5  mt-10 flex">
              <h1>Create subscriptionPlan</h1>
              <Button className="rounded " onClick={()=>navigate('/trainer/subscriptionplan/create')}>create</Button>
          </Card> : ''
        } 

      {!trainer._id ? <h1>Your request is sent to admin you will get notification when it is accepted. Thank you for your patience</h1>: 
      <div>
      <div className="flex gap-8">
        <Card className="h-40 w-60 text-center mt-5 "> 
            <h2 className="text-lg  mt-3">Total subscribers</h2>
            <h2 className="text-5xl  mt-3">{subscription.length}</h2>

      </Card>
        <Card className="h-40 w-60 text-center mt-5 "> 
            <h2 className="text-lg  mt-3">Weekly subscribers</h2>
            <h2 className="text-5xl  mt-3">{weekly}</h2>
      </Card>
        <Card className="h-40 w-60 mt-5 "> 
            <h2 className="text-lg text-center mt-3">Monthly subscribers</h2>
            <h2 className="text-5xl text-center mt-3">{monthly}</h2>
      </Card>
        <Card className="h-40 w-60 mt-5 "> 
            <h2 className="text-lg text-center mt-3">Yearly subscribers</h2>
            <h2 className="text-5xl text-center mt-3">{yearly}</h2>
      </Card>

      </div>
      <div>
      <table className="border-input mt-10 w-full rounded">
    <tr className="border ">
        <th className="border py-2">#</th>
        <th className="border py-2">UserId</th>
        <th className="border py-2">Duration</th>
        <th className="border py-2">Created Date</th>
    </tr>

    {
      subscription.map((data,index)=>{
       return <tr className="border text-center ">
        <td className="border py-2">{index + 1}</td>
        <td className="border py-2">{data.userId}</td>
        <td className="border py-2">{data.duration}</td>
        <td className="border py-2">{data.createdAt}</td>
    </tr>
      })
    }
    
   
    
</table>
      </div>
        
      </div>

      
      }
      </div>
      </div>

    </div>
  )
}

export default Home