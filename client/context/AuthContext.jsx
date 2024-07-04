import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from 'axios';


const AuthContext = createContext({});

export const Authprovider = ({ children }) => {
  const [isValidate, setValidate] = useState();

  const isAuth = async () => {
    let res = await axios.get('/auth');
    if (res?.data?.status !== 200) {
     setValidate(false)
    }else{
     setValidate(true)
    }
  }

  useEffect(() => {
    isAuth();
  })

  return (
    <AuthContext.Provider value={{ isValidate , setValidate }}>
      {children}
    </AuthContext.Provider>
  );
};

Authprovider.propTypes = {
  children: PropTypes.node,
};

export default AuthContext;