import { Route,Routes } from "react-router-dom"
import Home from "../pages/users/Home"
import Login from "../pages/users/Login"
import Register from "../pages/users/Register"
import Otp from "../pages/users/Otp"
import Trainers from "@/pages/users/Trainers"
import DemoPage from "@/components/ui/page"
import SubscriptionPlan from "@/pages/users/SubscriptionPlan"
import TrainerDetails from "@/pages/users/TrainerDetails"
import ProtectedRoute from "./ProtectedRoute"
import Video from "@/pages/users/Video"
import VideoDetail from "@/pages/users/videoDetail"
import Chat from "@/pages/users/Chat"
import Diets from "@/pages/users/Diet"
import DietDetail from "@/pages/users/DietDetails"
const UserRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/otp" element={<Otp/>}/>
        <Route path="/trainers" element={
          <ProtectedRoute>
             <Trainers/>
          </ProtectedRoute>}/>
        <Route path="/subscriptionplan/:trainerId" element={
          <ProtectedRoute>
          <SubscriptionPlan/>
          </ProtectedRoute>
        }/>
        <Route path="/trainerdetails/:id" element={
          <ProtectedRoute>
          <TrainerDetails/>
          </ProtectedRoute>
        }/>

        <Route path="/video" element={
          <ProtectedRoute>
          <Video/>
          </ProtectedRoute>
        }/>
        <Route path="/diets" element={
          <ProtectedRoute>
          <Diets/>
          </ProtectedRoute>
        }/>

        <Route path="/video/:id" element={
          <ProtectedRoute>
          <VideoDetail/>
          </ProtectedRoute>
        }/>
        <Route path="/diet/:id" element={
          <ProtectedRoute>
          <DietDetail/>
          </ProtectedRoute>
        }/>
        <Route path="/table" element={<DemoPage/>}/>
        <Route path="/message" element={<Chat/>}/>
    </Routes>
  )
}

export default UserRoutes