import Navbar from '../../components/users/Navbar'
import MarqueeComponent from '../../components/users/Marquee'
import Message from './Message'
import { Card } from '@/components/ui/card'


const Home = () => {
 
 
  return (
    <>
    <Navbar/>
    {/* <Message/> */}
    <div  className='bg-hero-pattern bg-no-repeat bg-cover h-[100vh] xl:pt-80 overflow-hidden  '>
    <MarqueeComponent PropText="EXCLUSIVE" direction='left'/>
    <MarqueeComponent PropText="FITNESS" direction='right'/>
    <MarqueeComponent PropText="COMMUNITY" direction='left'/>

    </div>

    <div className='flex items-center h-[100vh]'>
      <div className='w-6/12 pl-44'>
          <h1 className='text-5xl font-bold mb-5'>WORKOUTS POSTED <br /> DAILY</h1>
          <div className='text-xl text-gray-400 gap-2'>

          <p className='mb-8'> 
          Whether you're training to make it to the Olympia <br /> stage, or simply looking to shred a few pounds… <br />There's a workout for everyone.
          </p>
          <p >
            These programs are hand designed by CBUM to <br /> challenge you physically and mentally, no matter what <br /> stage of your journey you're at. Choose from a variety <br /> of workout splits that fits your preferred training style.
          </p>
          </div>
      </div>
      <div className='w-6/12'>
          <img className='h-80' src="frame.png" alt="" />
      </div>
    </div>

    <div className='xl:h-[70vh] text-center flex flex-col   items-center'>
      <h1 className='font-jeju  font-bold xl:text-6xl xl:mb-6 xl:mt-10'>TRACK YOUR NUTRITION</h1>
      <div className='xl:w-7/12  text-lg '>

      <p className='font-jeju text-gray-400'>When you've got your sights set on a goal, training is only a piece of the puzzle.  Nutrition is<br />
       king when it comes to bringing your vision to life, and we strive to keep you on track in all areas of your journey.</p>
       <p className='xl:mt-5 font-jeju text-gray-400'>Choose your goal, and we'll do the heavy lifting from there. Track your food intake <br /> daily to hit your assigned nutrition goals, and see your consistency pay off in the mirror <br /> one day at a time.</p>
      </div>
    </div>


   
<div className='h-[100vh] '>

    
<div className="grid grid-cols-12 grid-rows-12 gap-5 ">
    <div className="col-span-8 row-span-3 col-start-3  h-72 mt-10 ">
      <Card className='h-full w-full border-input flex justify-center items-center'>
          <div className=' w-9/12 pl-10'>
            <h1 className='text-3xl font-bold '>HUNDRED OF TRAINING VIDEOS</h1>
            <p className='text-gray-400 mt-5'>Dive into endless workout options! Our extensive library of training videos is here to <br />energize your fitness routine and keep you motivated.</p>
          </div>
          <div className='pl-10 h-full  w-4/12'>
            <img  className=' h-52 mt-20 rounded-br-xl' src="videoImg.svg" alt="" />
          </div>
      </Card>
    </div>
    <div className="col-span-4 row-span-4 col-start-3  row-start-4">
    <Card className='h-full w-full border-input flex justify-center'>
      <div className='w-9/12'> 

      <h1 className='text-3xl font-bold text-center mt-10'>WORKOUTS <br /> UPDATED  DAILY</h1>
      <p className='text-gray-400 text-center gap-3 mt-5 '>Enjoy a variety of routines that keep your workouts interesting and your  results on track.</p>

      <img className='h-48 mt-5 ml-10' src="workoouts.png" alt="" />
      </div>
    </Card>
    </div>
    <div className="col-span-2 row-span-2 col-start-7  row-start-4">
    <Card className='h-full w-full border-input text-center'>
      <h1 className='text-3xl font-bold mt-3'>WEIGHT <br /> TRACKER</h1>
      <div className='w-full flex justify-center pt-5'>

      <img className='h-20' src="weight.svg" alt="" />
      </div>
</Card>
    </div>
    <div className="col-span-2 row-span-2 col-start-9  row-start-4">
    <Card className='h-full w-full border-input'>
    <h1 className='text-3xl text-center mt-3 font-bold'>MACRO <br />  CALCULATOR</h1>
    <div className='w-full flex justify-center'>
      <img className='h-24' src="macroCalc.svg" alt="" />
    </div>
</Card>
    </div>
    <div className="col-span-2 row-span-2 col-start-7  row-start-6">
    <Card className='h-full w-full border-input'>
    <h1 className='text-3xl text-center mt-5 font-bold'>BLOG ACCESS</h1>
    <div className='flex w-full justify-center'>
      <img className='mt-12  h-20' src="blogs.png" alt="" />
    </div>

</Card>
    </div>
    <div className="col-span-2 row-span-2 col-start-9  row-start-6">
    <Card className='h-full w-full border-input'>
    <h1 className='text-3xl text-center mt-5 font-bold'>FOOD DIARY</h1>
    <div className='flex w-full justify-center'>
      <img className='mt-12  h-20' src="diet.svg" alt="" />
    </div>
</Card>
    </div>
    <div className="col-span-4 row-span-2 col-start-3  row-start-8">
    <Card className='h-full w-full border-input flex justify-center'>
      <div className='ml-5'>

    <h1 className='text-3xl  mt-5 font-bold'>EARLY ACCESS TO <br /> APPAREL DROPS</h1>
    <p className='text-gray-400  gap-3 mt-5 '>Enjoy exclusive early access to the latest  apparel drops.</p>
      </div>
      <img src="merch.png" alt="" />
    
    
</Card>
    </div>
    <div className="col-span-4 row-span-2 col-start-7  row-start-8">
    <Card className='h-full w-full border-input flex justify-center '>
    <div className='ml-5'>

<h1 className='text-3xl  mt-5 font-bold'>TRANSFORMATION CONTEST</h1>
<p className='text-gray-400  gap-3 mt-5 '>Participate in fun and rewarding transformation contests</p>
  </div>
  <img className='h-36 mt-8' src="transfromation.png" alt="" />

</Card>
    </div>
</div>
    
</div>

<div className='mt-96 '>
  <Card className='h-80 bg-black border-l-0  border-b-0 rounded-none'>
      <div className='flex'>
        <div className='w-4/12  h-80'>
            <img src="logo.png" className='h-28 m-24' alt="" />
        </div>
        <div className='w-8/12  h-80'>
            <div className='h-24 w-10/12 mt-20 border-t'>

            <h3 className='text-lg text-gray-400 mt-5'>Questions + Support</h3>
            <h1 className='text-3xl   font-black mt-5'>SHAPEUP@FITNESS.COM</h1>
            <div className='flex justify-between'>

            <p className='text-sm font-bold text-gray-500 mt-10'>&#169; 2024 SHAPEUP. ALL RIGHTS RESERVED.</p>
            <p className='text-sm font-bold text-gray-500 mt-10'>TERMS AND CONDITIONS</p>
            <p className='text-sm font-bold text-gray-500 mt-10'>PRIVACY POLICY</p>
            </div>
            </div>

        </div>
      </div>
  </Card>
</div>
    </>
   
  )
}

export default Home