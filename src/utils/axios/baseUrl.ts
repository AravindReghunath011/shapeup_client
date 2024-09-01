import axios from "axios";
import { baseURL } from "./apiUrls";
import {refreshTokenURL} from './apiUrls'

export default ()=>{
    return axios.create({
        withCredentials:true
    })
};

export const axiosPrivet = axios.create({
        baseURL:baseURL,
        headers: {'Content-Type' : 'application/json'},
        withCredentials : true,
    })

    axiosPrivet.interceptors.request.use(
        config => {
          const accessToken = localStorage.getItem('accessToken');
          if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
          }
          return config;
        },
        error => {
          return Promise.reject(error);
        }
      );


      axiosPrivet.interceptors.response.use(
        (response) => {
          console.log("In interceptor response" , response);
          return response;
        },
        async (error) => {
          console.log("In interceptor error " , error);
          const originalRequest = error.config;
          if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            console.log("inside iff")
            try {
            //   const route = import.meta.env.VITE_ENVIRONMENT == 'dev' ? 'http://localhost:8000/user/refresh-token' : import.meta.env.VITE_REFRESH_ROUTE
            //   console.log("ROute ==>" ,route);
              const refreshResponse = await axiosPrivet.post(refreshTokenURL);
              const newAccessToken = refreshResponse.data.accessToken;
              console.log("New Accesstoken set to localstorage ==>" , newAccessToken);
              localStorage.setItem('accessToken', newAccessToken); // Update in storage
      
              originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
              return axiosPrivet(originalRequest);
            } catch (err) {
              console.log(err);
              alert("Login again")
              console.error('Refresh token failed:', err);
            }
          }
          return Promise.reject(error);
        }
      );