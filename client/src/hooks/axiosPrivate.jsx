import { useEffect } from "react";
import axios from "axios";

export const axiosPrivate = axios.create({
    baseURL: 'https://blogapplicatonbackend.onrender.com',
    headers: {
      "content-Type": "application/json",
    },
    withCredentials: true,
  });

function useAxiosPrivate() {
  
  useEffect(() => {
    const reqIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${ getCookie("token") }`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosPrivate.interceptors.request.eject(reqIntercept);
    };
  }, []);
  return axiosPrivate;
}

export default useAxiosPrivate;

function getCookie(name){
  const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return cookieValue ? cookieValue.pop() : '';
};