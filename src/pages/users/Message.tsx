import React, { useState } from "react";

const Message = () => {
  const [status,setStatus] = useState('down')
  const toggleHeight = (status:string)=>{
    
    if(status == 'down'){
      setStatus("down")
      document.getElementById('message')?.classList.remove('h-96')
      document.getElementById('message')?.classList.add('h-20')
    }else{
      setStatus('up')
      document.getElementById('message')?.classList.remove('h-20')
      document.getElementById('message')?.classList.add('h-96')
      
    }
  }
  return (
    <div id="message" className=" rounded-t scroll-auto  w-72 bg-black z-10 text-center border-input border  absolute right-3 bottom-0">
      <div className="flex justify-between px-5">
        <p>message</p>
        {status=='up' ? <button onClick={()=>toggleHeight('down')}>down</button> :<button onClick={()=>toggleHeight('up')}>up</button>}
        
      </div>
      
      <div className="w-full  h-12 flex  justify-start  mt-5 hover:cursor-pointer">
        <img
        src="https://i.pinimg.com/736x/b3/8f/c6/b38fc63ba586ac8b38cb406ed612aa98.jpg"
          className="h-10 w-10 mr-2 ml-2 rounded-full"
          alt=""
        />
        <div className="border-b w-full text-start">user 1</div>
        
      </div>
      <div className="w-full  h-12 flex  justify-start  mt-5">
        <img
        src="https://i.pinimg.com/736x/b3/8f/c6/b38fc63ba586ac8b38cb406ed612aa98.jpg"
          className="h-10 w-10 mr-2 ml-2 rounded-full"
          alt=""
        />
        <div className="border-b w-full text-start">user 1</div>
        
      </div>
      <div className="w-full  h-12 flex  justify-start  mt-5">
        <img
        src="https://i.pinimg.com/736x/b3/8f/c6/b38fc63ba586ac8b38cb406ed612aa98.jpg"
          className="h-10 w-10 mr-2 ml-2 rounded-full"
          alt=""
        />
        <div className="border-b w-full text-start">user 1</div>
        
      </div>
      
    </div>
  );
};

export default Message;
