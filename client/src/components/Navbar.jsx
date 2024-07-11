import { Link, useNavigate } from 'react-router-dom';
import '../style/navbar.css'
import { IoHomeSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { RiFolderUploadFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from 'react';

function Navbar() {

    const [menu, setMenu] = useState(false);
    const nevigate = useNavigate();

    return (
        <header className='desktopHeader'  >
            <section style={{display:"flex",justifyContent:"space-between",placeItems:"center",width:"100%"}} >
                <div className="logoBox">
                    <div className="logo">
                        <img src={'/logo.svg'} alt="logo" />
                    </div>
                    <h2>Blog.io</h2>
                </div>
                <div className="sideMenus">
                    <div>
                        <Link to="/home" className="myText" >Home</Link>
                        <Link to="/allPost" className="myText" >Explore</Link>
                        <Link to="/create" className="myText" >Create</Link>
                        <Link to="/profile" className="myText" >Profile</Link>
                    </div>
                    <button
                        className="my-button"
                        onClick={() => nevigate('/auth/login')}
                    >
                        <span className="truncate">Sign in</span>
                    </button>
                </div>
            </section>
        </header>


    )
}

export default Navbar;

