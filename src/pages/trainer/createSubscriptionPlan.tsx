import { useState } from 'react';
import axios, { axiosPrivet } from '@/utils/axios/baseUrl';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { subscriptionPlan } from '@/utils/axios/apiUrls';

const CreateSubscriptionPlan = () => {
  const trainer =  useSelector((state:any) => state.persisted.trainer.trainer)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data:any) => {

    let submitData = {
        ...data,
        trainerId:trainer._id
        
    }
    try {
      const response = await axiosPrivet.post(
        subscriptionPlan,
        submitData
      );

      console.log(response.data);

      if (response.data.message === 'success') {
        toast.success('Create subscription plan successfully!');
        navigate('/trainer')
        
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error ', error);
      toast.error('An error occurred during creating subscription');
    }
  };

  return (
    <div className='h-[100vh]'>
      <div className='grid grid-cols-9 grid-rows-5 gap-4'>
        <div className='col-span-3 row-span-4 col-start-4 row-start-2 '>
          <div className='w-11/12 h-[60vh] flex justify-center text-center outline rounded outline-1 outline-gray-500'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mt-10 '>
                <h1 className='text-4xl font-bold'>Subscription Plan </h1>
                <p className='font-thin text-sm mt-4 '>Enter price in rupees</p>

                <input
                  {...register('weekly', {
                    required: 'weekly price Required',
                    pattern: {
                        value: /^[0-9]+$/,
                      message: 'Enter a valid price',
                    },
                  })}
                  type='number'
                  name='weekly'
                  className='mt-5 bg-transparent outline remove-arrow outline-1 outline-gray-500 text-sm rounded p-2 w-72'
                  placeholder='Weekly price'
                />
                
                <br />
                {errors.weekly && (
                  <small className='text-red-600 '>{errors.weekly.message}</small>
                )}  <br />

                <input
                  {...register('monthly', {
                    required: 'monthly price is required',
                    pattern: {
                      value: /^[0-9]+$/,
                      message: 'Enter a valid price',
                    },
                  })}
                  type='number'
                  className='mt-1 bg-transparent outline remove-arrow outline-1 outline-gray-500 text-sm rounded p-2 w-72'
                  placeholder='Monthly price'
                />
                
                <br />
                {errors.monthly && (
                    <small className='text-red-600'>{errors.monthly.message}</small>
                    )}
                    <br />
                <input
                  {...register('yearly', {
                    required: 'yearly price required',
                    pattern: {
                      value: /^[0-9]+$/,
                      message: 'Enter a valid price',
                    },
                  })}
                  type='number'
                  className='mt-1 bg-transparent outline remove-arrow outline-1 outline-gray-500 text-sm rounded p-2 w-72'
                  placeholder='Yearly price'
                />
                <br />
                    {errors.yearly && (
                      <small className='text-red-600'>{errors.yearly.message}</small>
                    )} <br />
                 
                

                <button
                  type='submit'
                  className='w-72 rounded mt-10 bg-white p-2 text-black font-medium'
                >
                  create
                </button> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSubscriptionPlan;
