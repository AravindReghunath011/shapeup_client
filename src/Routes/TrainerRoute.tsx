import Login from "@/pages/trainer/Login"
import Otp from "@/pages/trainer/Otp"
import Register from "@/pages/trainer/Register"
import CreateSubscriptionPlan from "@/pages/trainer/createSubscriptionPlan"
import Home from "@/pages/trainer/Home"
import SubscribersList from "@/pages/trainer/SubscribersList"
import VideoUpload from "@/pages/trainer/VideoUpload"
import { Route,Routes } from "react-router-dom"
import TrainerProtected from "./TrainerProtected"
import Video from "@/pages/users/Video"
import Chat from "@/pages/trainer/Chat"
import DietUpload from "@/pages/trainer/DietUpload"
import Profile from "@/pages/trainer/profile"
import { useSelector } from "react-redux"



const UserRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/otp" element={<Otp/>}/>
        <Route path="/message" element={<Chat/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/diet/upload" element={<DietUpload/>}/>
        <Route path="/subscriptionplan/create" element={
          <TrainerProtected>
          <CreateSubscriptionPlan/>
          </TrainerProtected>
        }/>
        <Route path="/subscribers/:trainerId" element={
          <TrainerProtected>
          <SubscribersList/>
          </TrainerProtected>
        }/>
        <Route path="/video/upload" element={
          <TrainerProtected>
          <VideoUpload/>
          </TrainerProtected>
        }/>
        
        
        
    </Routes>
  )
}

export default UserRoutes