import { useEffect } from "react";
import axios from "axios";

export const axiosPrivate = axios.create({
  baseURL: 'https://blogapplicatonbackend.onrender.com',
  // baseURL: 'http://localhost:8000',
  headers: {
    "content-Type": "application/json",
  },
  withCredentials: true,
});

function useAxiosPrivate() {

  useEffect(() => {
    const reqIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        const token = getCookie("token");
        if (!config.headers["Authorization"]) {
          // console.log(getCookie('token'));
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        console.log(error);
        Promise.reject(error)
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(reqIntercept);
    };
  }, []);
  return axiosPrivate;
}

export default useAxiosPrivate;

function getCookie(name) {
  const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return cookieValue ? cookieValue.pop() : '';
};
