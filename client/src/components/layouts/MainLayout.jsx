/* eslint-disable no-unused-vars */
import { Outlet, useNavigate } from "react-router-dom"
import "../../style/home.css"
import Navbar from "../Navbar"
import Footer from "../Footer"

function MainLayout() {
  return (
    <>
      <Navbar />
      <main >
        <Outlet />
      </main>
      <Footer />
    </>
  )

}

export default MainLayout