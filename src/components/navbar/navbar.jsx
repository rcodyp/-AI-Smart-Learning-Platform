import React, { useEffect } from "react";

import "./navbar.css"; // Make sure to include your custom CSS file or embedded style

const Navbar = () => {
  return (
    <div id="nav">
      <div class="nav-con"></div>
      <div>
        <a href="/">Get Started</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
};

export default Navbar;
