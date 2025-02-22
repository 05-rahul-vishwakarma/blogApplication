/* eslint-disable react/prop-types */
// components/PrivateRoute.js
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        let res = await axios.get('/isAuthenticated');
        if (res?.data?.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          toast.error("login first")
        }
      } catch {
        setIsAuthenticated(false);
        toast.error("login first")
      }
    };

    checkAuth();
  }, []);

  console.log(isAuthenticated);
  
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
