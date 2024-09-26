import React, { useEffect } from 'react';

import './navbar.css'; // Make sure to include your custom CSS file or embedded style

const Navbar = () => {

 

  return (
    <nav id="nav">
      <div>Logo</div>
      <div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
