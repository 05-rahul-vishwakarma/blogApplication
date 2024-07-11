import React, { useState } from 'react';
import '../style/Footer.css'
import { FaHome } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Footer = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="container">
      <input
        type="checkbox"
        id="toggle"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label className="button" htmlFor="toggle">
        <nav className={`nav ${isChecked ? 'hidden' : ''}`}>
          <ul>
            <li><Link to="/home"> <FaHome style={{ fontSize: "1.65rem" }} /> </Link></li>
            <li><Link to="/profile"><BsPersonCircle style={{ fontSize: "1.65rem" }} /></Link></li>
            <li><Link to="/create"><MdOutlineDriveFolderUpload style={{ fontSize: "2rem" }} /></Link></li>
            <li><Link to="/auth/login"><CiLogin style={{ fontSize: "2rem" }} /></Link></li>
          </ul>
        </nav>
      </label>
    </div>
  );
};

export default Footer;
