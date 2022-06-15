import React from 'react';
import Logo from '../img/qq.png';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from "react-router-dom"


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark ">
    <Link className='toLink' to="/">
      
        <span className='navbar-brand'>
        <img src={Logo} alt="Logo" className='logo'/> 
        <span className='mar'>Weather App</span>
        </span>
    </Link>
        <Link className='toAbout' to="/about">
          <span>About me</span>
        </Link>
        
      
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
};

export default Nav;


