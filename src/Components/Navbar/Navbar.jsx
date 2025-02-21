import React, { useState } from 'react';
import '@/Components/Navbar/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://pbs.twimg.com/profile_images/1816709217379618816/kafj8RzG_400x400.jpg"
          alt="Logo"
        />
        <h1>Camelq</h1>
      </div>

      {/* Toggle Button for Mobile */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {/* Navigation Links */}
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  );
}

export default Navbar;
