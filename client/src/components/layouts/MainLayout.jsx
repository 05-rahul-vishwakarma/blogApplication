/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import AuthContext from "../../../context/AuthContext";
import { useContext, useEffect } from "react";
import axios from "axios";

function MainLayout() {
  // const {isValidate} = useContext(AuthContext);
  // const render = isValidate;
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout