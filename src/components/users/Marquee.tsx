import { motion, } from 'framer-motion'
import Marquee from 'react-fast-marquee'

interface MarqueeProps{
  PropText:string,
  direction:string
}

const MarqueeComponent = ({PropText,direction}:MarqueeProps) => {
    const zoomOutVariants = {
        hidden: {
          opacity:0,
          y:0,
    
        },
        visible: {
          opacity: 1,
          y:-80,
          transition:{
            duration:0.8,
            when:'afterChildren'
          }
    
        },
      };
      
  return (
    <div>
        <motion.div initial="hidden"
      animate="visible"
      variants={zoomOutVariants}  >

            <Marquee speed={30} direction={direction as "left" | "right" } className='overflow-hidden'>
            <h1 className='font-black text-9xl font-jeju text-white'>&nbsp;{`${PropText}`} </h1> 
            <p className='font-black  text-9xl  font-jeju font-outline-2 text-transparent  '>&nbsp;{`${PropText}`}</p> 
            <h1 className='font-black text-9xl font-jeju text-white'>&nbsp;{`${PropText}`}  </h1> 
            <h1 className='font-black  text-9xl font-outline-2 text-transparent font-jeju '>&nbsp;{`${PropText}`}  </h1> 

            </Marquee>
        </motion.div>
    </div>
  )
}

export default MarqueeComponent