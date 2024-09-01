
import { Routes,Route } from 'react-router-dom'
import UserRoutes from './Routes/UserRoutes'
import AdminRoutes from './Routes/AdminRoutes'
import TrainerRoutes from './Routes/TrainerRoute'
import { Toaster } from 'sonner';


function App() {
  

  return (
    <>
    <Toaster />
    <Routes>
      <Route path='/admin/*' element={<AdminRoutes/>}/>
      <Route path='/trainer/*' element={<TrainerRoutes/>}/>
      <Route path='/*' element={<UserRoutes/>}/>
    </Routes>
    </>
  )
}

export default App
