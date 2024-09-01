import React, { useRef, useState } from 'react';
import axios from '../../utils/axios/baseUrl';
import { toast } from 'sonner';
import { useNavigate } from "react-router-dom";
import { resendOtpURL, verifyOtpURL } from '@/utils/axios/apiUrls';

interface OtpInputRef {
  current: HTMLInputElement | null;
}

const Otp: React.FC = () => {
  const otpInputRefs = useRef<OtpInputRef[]>([]);
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);

  const handleBackspace = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      const prevInput = otpInputRefs.current[index - 1];
      if (prevInput) {
        prevInput.focus();
      }
    }
    }
  const handleInputChange = (index: number, value: string,key: any) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    

    if (value.length === 1) {
      const nextInput = otpInputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    } else if (value.length === 0) {
    
      handleBackspace(index,e)
  };
  
   };

  const handleOtp = () => {
    if (otp.join('').length !== 4) {
      toast.error('Invalid OTP');
    } else {
      axios().post<{ message: string }>(
        verifyOtpURL,
        { otp: otp.join('') },
        { withCredentials: true }
      ).then(({ data }) => {
        if (data.message === 'success') {
          toast.success('Register success');

          setTimeout(() => {
            navigate('/login');
          }, 2000);
        } else {
          toast.error('Wrong OTP');
        }
      });
    }
  };

  const resendOtp = async () => {
    axios().post(resendOtpURL).then(({ data }) => {
      if (data.message === 'resendotp') {
        toast.success('OTP sent to your mail');
      } else {
        toast.error(data.message);
      }
    });
  };
  

  return (
    <div>
      <div className="grid grid-cols-9 grid-rows-4 gap-4">
        <div className="col-span-3 row-span-3 col-start-4 row-start-2 lg:mt-5  ">
          <div className='w-10/12 h-96 outline outline-1 rounded outline-gray-500 text-center lg:pt-5'>
            <h1 className='text-4xl font-bold font-roboto '>Enter the OTP</h1>
            <div className='lg:mt-14 ' >
              {otp.map((digit, index) => (
                <input
                  key={index}
                  value={digit}
                  onKeyUp={(e) => {
                    if (e.key === 'Backspace') {
                      handleBackspace(index, e);
                    }
                 }}
                  onChange={(e) => handleInputChange(index, e.target.value, e)}
                  className='bg-transparent outline outline-1 text-center outline-gray-300 w-14 rounded h-14 lg:mr-4 remove-arrow' max={1}
                  type="number"
                  ref={(ref) => (otpInputRefs.current[index] = ref)}
                />
              ))}
              <p onClick={() => resendOtp()} className='hover:cursor-pointer underline lg:mt-8 '>resend otp</p>
              <button onClick={() => handleOtp()} className='w-72 rounded mt-10 bg-white p-2 text-black font-medium'>verify</button>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Otp;