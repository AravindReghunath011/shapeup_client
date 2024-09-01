import { useState } from 'react';
import axios from '@/utils/axios/baseUrl';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { adminLoginURL } from '@/utils/axios/apiUrls';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      const response = await axios().post(
        adminLoginURL,
        { email, password },
        { withCredentials: true }
      );

      console.log(response.data);

      if (response.data.message === 'success') {
        toast.success('Login success');
        navigate('/admin/trainers');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An error occurred during login');
    }
  };

  return (
    <div className='h-[100vh]'>
      <div className='grid grid-cols-9 grid-rows-5 gap-4'>
        <div className='col-span-3 row-span-4 col-start-4 row-start-2 '>
          <div className='w-11/12 h-[60vh] flex justify-center text-center outline rounded outline-1 outline-gray-500'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mt-10 '>
                <h1 className='text-6xl font-bold'>Login</h1>
                <p className='font-thin text-sm mt-4 '>Enter you email and password below</p>

                <input
                  {...register('email', {
                    required: 'Email Required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email',
                    },
                  })}
                  type='text'
                  name='email'
                  className='mt-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72'
                  placeholder='Enter your email'
                />
               

                <input
                  {...register('password', {
                    required: 'Password Required',
                    pattern: {
                      value: /^.{6,}$/,
                      message: 'At least 6 characters',
                    },
                  })}
                  type='password'
                  className='mt-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72'
                  placeholder='Enter your password'
                />
                

                <button
                  type='submit'
                  className='w-72 rounded mt-10 bg-white p-2 text-black font-medium'
                >
                  Login
                </button> <br />
                {errors.email && (
                  <small className='text-red-600'>{errors.email.message}</small>
                )} <br />
                {errors.password && (
                  <small className='text-red-600'>{errors.password.message}</small>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
