import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { toast } from 'react-toastify';


const AuthContext = createContext({});

export const Authprovider = ({ children }) => {
  const [isValidate, setValidate] = useState(null);

  const isAuth = async () => {
    let res = await axios.get('/auth');
    if (res?.data?.status === 200) {
      console.log(res?.data);
      toast.success("Authenticated")
      setValidate(true)
    } else {
      toast.error("Authenticat Please");
    }
  }

  useEffect(() => {
    isAuth();
  },[])


  return (
    <AuthContext.Provider value={{ isValidate, setValidate }}>
      {children}
    </AuthContext.Provider>
  );
};

Authprovider.propTypes = {
  children: PropTypes.node,
};

export default AuthContext;