// @ts-nocheck
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/users/Navbar';
import { getPurchasedSubscriptionURL, getSubscriptionURL, subscribeURL } from '@/utils/axios/apiUrls';
import { axiosPrivet } from '@/utils/axios/baseUrl';
import  { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

interface SubPlan {
  _id: string;
  trainerId: string;
  weekly:number,
  monthly:number,
  yearly:number
}

const loadScript = (src: string) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};



const SubscriptionPlan = () => {
  let {trainerId} = useParams()
  let user = useSelector((state:any)=>state.persisted.user.user)
  const [purchasedSubscription,setPurchasedSubscription] = useState()
  useEffect(()=>{
    axiosPrivet.get(getSubscriptionURL +`${trainerId}`).then(({data}:any)=>{
      console.log(data,'data')
      setSubPlan(data.data)
    })

    axiosPrivet.post(getPurchasedSubscriptionURL,{userId:user.id,trainerId:trainerId}).then(({data}:any)=>{
      console.log('subscribed ',data.pruchasedSubscription)
      setPurchasedSubscription(data.pruchasedSubscriptions)
    })
  
  },[])
  let User = useSelector((state: any) => state.persisted.user.user);
  console.log(User, 'user from subscription');
  const [subPlan, setSubPlan] = useState<SubPlan[]>();

 
  const displayRazorpay = async (amount:number): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
      if (!res) {
        toast.error('Razorpay not working');
        reject(false);
        return;
      }
  
      const options = {
        key: 'rzp_test_GEbMbQd9xNslRS',
        currency: 'INR',
        amount: amount * 100,
        name: 'ShapeUp',
        description: 'Thanks',
        prefill: {
          name: 'Shapeup',
        },
        handler: function (response: any) {
          // Handle successful payment
          resolve(true);
      },
      };
  
      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on('payment.failed', function (response: any) {
        // Handle failure logic here
        reject(false);
      });
  
      paymentObject.open();
    });
  };

  const handleSub = async (amount:number,duration:string) => {
   
    let payment = await displayRazorpay(amount)
    console.log(payment,'paymetn')
    if(payment){
      let currentDate = new Date();
      var expire
      if(duration == 'weekly'){
        expire = new Date(currentDate.getTime() + (7 * 24 * 60 * 60 * 1000));
        
      }
      if(duration == 'monthly'){
        expire = new Date(currentDate.getTime() + (30 * 24 * 60 * 60 * 1000));
        
      }
      if(duration == 'yearly'){
        expire = new Date(currentDate.getTime() + (365 * 24 * 60 * 60 * 1000));
        
      }
      
      
        let data = {
            userId: User.id,
            duration:duration,
            trainerId: trainerId,
            createdAt:currentDate,
            expiresAt:expire
          };
          axiosPrivet.post(subscribeURL, { data }).then((response) => {
            console.log(response.data);
          });
    }
    
  };

  return (
    <div>
      <Navbar/>
      
        
          return(
            <div className='flex flex-col items-center justify-center mt-20'>

          
              {
                purchasedSubscription?.duration == 'weekly' ? 
                <Card className='w-5/12 h-40 p-5 mt-10'>
              <h2 className='text-2xl text-gray-400 '>Weekly</h2>
              <div className="flex items-center justify-between">
  
              <h1 className='text-4xl font-semibold mt-3' >&#8377; {subPlan?.weekly}<span className='font-light'>/week</span></h1> 
              Active
              </div>
              <p className='text-gray-400 mt-2'>{Math.ceil((new Date(purchasedSubscription?.expiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24))} days left </p>
            </Card> :
            <Card className='w-5/12 h-40 p-5 mt-10'>
              <h2 className='text-2xl text-gray-400 '>Weekly</h2>
              <div className="flex items-center justify-between">
  
              <h1 className='text-4xl font-semibold mt-3' >&#8377; {subPlan?.weekly}<span className='font-light'>/week</span></h1> 
              <Button variant={'outline'} className='w-20 rounded' onClick={()=>handleSub(subPlan.weekly,'weekly')}> Buy</Button>
              </div>
              <p className='text-gray-400 mt-2'>&#8377;0.99 per day</p>
            </Card>
              }


              {
               purchasedSubscription?.duration == 'monthly' ?
               <Card className='w-5/12 h-40 p-5 mt-10'>
              <h2 className='text-2xl text-gray-400 '>Monthly</h2>
              <div className="flex items-center justify-between">
  
              <h1 className='text-4xl font-semibold mt-3' >&#8377; {subPlan?.monthly}<span className='font-light'>/month</span></h1>
              Active 
              </div>
              <p className='text-gray-400 mt-2'>{Math.ceil((new Date(purchasedSubscription?.expiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24))} days left </p>
            </Card>  : 
            <Card className='w-5/12 h-40 p-5 mt-10'>
              <h2 className='text-2xl text-gray-400 '>Monthly</h2>
              <div className="flex items-center justify-between">
  
              <h1 className='text-4xl font-semibold mt-3' >&#8377; {subPlan?.monthly}<span className='font-light'>/month</span></h1> 
              <Button variant={'outline'} className='w-20 rounded' onClick={()=>handleSub(subPlan.monthly,'monthly')}> Buy</Button>
              </div>
              <p className='text-gray-400 mt-2'>&#8377;0.99 per day</p>
            </Card>
              }
              {
                purchasedSubscription?.duration == 'yearly' ?
                <Card className='w-5/12 h-40 p-5 mt-10'>
              <h2 className='text-2xl text-gray-400 '>Yearly</h2>
              <div className="flex items-center justify-between">
  
              <h1 className='text-4xl font-semibold mt-3' >&#8377; {subPlan?.yearly}<span className='font-light'>/year</span></h1> 
              Active
              </div>
              <p className='text-gray-400 mt-2'>{Math.ceil((new Date(purchasedSubscription?.expiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24))} days left</p>
            </Card>  :
            <Card className='w-5/12 h-40 p-5 mt-10'>
              <h2 className='text-2xl text-gray-400 '>Yearly</h2>
              <div className="flex items-center justify-between">
  
              <h1 className='text-4xl font-semibold mt-3' >&#8377; {subPlan?.yearly}<span className='font-light'>/year</span></h1> 
              <Button variant={'outline'} className='w-20 rounded' onClick={()=>handleSub(subPlan.yearly,'yearly')}> Buy</Button>
              </div>
              <p className='text-gray-400 mt-2'>&#8377;0.99 per day</p>
            </Card>
              }
         
        </div>
          )
        
      
      
    </div>
  );
};

export default SubscriptionPlan;
