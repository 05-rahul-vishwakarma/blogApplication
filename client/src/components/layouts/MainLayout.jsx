/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"


function MainLayout() {

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