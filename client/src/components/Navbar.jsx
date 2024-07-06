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
        <div style={{ position: "relative" }} >
            <header className='desktopHeader'  >
                <section>
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
                            onClick={()=>nevigate('/auth/login')}
                        >
                            <span className="truncate">Sign in</span>
                        </button>
                    </div>
                </section>
            </header>

            <header>
                <section className="phoneHeader">
                    <div className="" data-icon="List" data-size="24px" data-weight="regular" onClick={() => setMenu(!menu)} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                                d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <img src="/logo.svg" alt="" width={25} height={25} />
                        <h3>Blog.io</h3>
                    </div>
                </section>
            </header>

            {
                menu &&
                <div className='phonesidebar' >
                    <dvv className="phoneMenuBar" >
                        <nav>
                            <ul style={{ listStyle: "none", width: "100px" }} >
                                <li className='common' >
                                    <Link to={'/home'} className='flex'>
                                        <IoHomeSharp />
                                        <p>Home</p>
                                    </Link>
                                </li>
                                <li className='common'>
                                    <Link to={'/allpost'} className='flex'>
                                        <CiSearch />
                                        <p>Explore</p>
                                    </Link>
                                </li>
                                <li className='common'>
                                    <Link to={'/create'} className='flex'>
                                        <RiFolderUploadFill />
                                        <p>Post</p>
                                    </Link>
                                </li>
                                <li className='common'>
                                    <Link to={'/profile'} className='flex' >
                                        <CgProfile />
                                        <p>Profile</p>
                                    </Link>
                                </li>

                                <li className='common'>
                                    <Link to={'/auth/login'} className='flex' >
                                        <CgProfile />
                                        <p>Login</p>
                                    </Link>
                                </li>

                                <button onClick={() => setMenu(!menu)} style={{ padding: ".5rem", width: "90%", marginTop: ".1rem", marginBottom: ".4rem", marginLeft: ".2rem", background: "white", border: "none", display: "flex", placeItems: "center", gap: ".2rem" }} >
                                    <IoIosArrowBack style={{ fontSize: "1rem" }} />
                                    <p>Exit</p>
                                </button>

                            </ul>
                        </nav>
                    </dvv>
                </div>
            }

        </div>
    )
}

export default Navbar;

