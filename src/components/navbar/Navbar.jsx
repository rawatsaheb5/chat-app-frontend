import React, { useState, useEffect } from "react";
import "./navbar.css";
import { useAuth } from "../../context/Auth";
const Navbar = () => {
  const { auth, setAuth } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-links">
        {auth ? (
          <button className="profile-button">Profile</button>
        ) : (
          <>
            <button className="auth-button">Login</button>
            <button className="auth-button">Register</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
