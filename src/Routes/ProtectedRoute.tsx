
import { Route, Routes,Navigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const ProtectedRoute = ({children}:{children:any}) => {
  const user = useSelector((state:any) =>state.persisted.user.user.name ); 
  if(!user) {
    toast.error('Login Required')
    return <Navigate to="/login"  />
  }
return children

};


export default ProtectedRoute;


