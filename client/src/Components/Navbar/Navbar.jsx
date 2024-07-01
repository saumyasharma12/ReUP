
import React from 'react';
import './Navbar.css';
import { FaSearch, FaCaretDown, FaPhone, FaShoppingCart } from 'react-icons/fa';
import loginImg from '../../assets/image/login.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="dropdown">
          <button className="dropbtn">
            <FaCaretDown /> 
          </button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <img src="" alt="Logo" className="logo" /> 
      </div>
      <div className="navbar-center">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit"><FaSearch /></button> 
        </div>
      </div>
      <div className="navbar-right">
        <button className="icon-btn">
          <FaPhone />
        </button>
        <button className="icon-btn">
          <FaShoppingCart />
        </button>
        <button className="login-btn">
          <img src={loginImg} alt="Login" className="login-logo" /> 
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
