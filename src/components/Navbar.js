import React from 'react';
import "../styles/navbar.css"
import kfs from '../images/kfs.svg'
import { Link, withRouter } from "react-router-dom";
import { createBrowserHistory } from 'history';





function Navbar(){

return (
    <nav className="navbar transparent navbar-expand-lg navbar-light ">
    <div className="container-fluid act">
     <img src={kfs} alt="kfs" className="logo"/>
      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse nav-div navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active"   aria-current="page" href="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="#">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="#">Work</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="#">Members</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="#">Contact Us</Link>
          </li>
         
          
         </ul>
       
      </div>
    </div>
    <button type="button" className="button">Blogs</button>
  </nav>
)

}

export default Navbar;