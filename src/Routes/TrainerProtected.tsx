
import { Route, Routes,Navigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const TrainerProtected = ({children}:{children:any}) => {
  const user = useSelector((state:any) =>state.persisted.trainer.trainer.name ); 
  if(!user) {
    toast.error('Login Required')
    return <Navigate to="/trainer/login"  />
  }
return children

};


export default TrainerProtected;


