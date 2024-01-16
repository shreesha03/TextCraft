import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import { useState } from "react";

export default function Navbar(props) {
  
  const [activePage, setActivePage] = useState("Home");

  const handleActive = (current) => {
      setActivePage(current)
  }
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary" data-bs-theme={props.mode}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${activePage==='Home'?'active':''}`} to="/" onClick={() => handleActive("Home")} aria-current={activePage==='Home'?'page':undefined}>
                  Homepage
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activePage==='About'?'active':''}`} to="/About" onClick={() => handleActive("About")} aria-current={activePage==='About'?'page':undefined}>
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'white'}`}>
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };
