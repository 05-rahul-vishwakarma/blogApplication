/* eslint-disable no-unused-vars */
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import Navbar from "../Navbar"
import { useContext, useEffect } from "react";
import AuthContext from "../../../context/AuthContext";
import { toast } from "react-toastify";


function MainLayout() {
  const { isValidate } = useContext(AuthContext);
  console.log(isValidate);

  if (isValidate == null) {
    if (isValidate === false) {
      toast.error('Login First')
    }else{
      toast.success('Authenticated')
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )

}

export default MainLayout