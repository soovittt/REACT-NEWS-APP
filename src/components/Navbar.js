

import React, { Component } from 'react'
import "./Navbar.css";
import Category from './Category'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import { ProgressBar } from 'react-fetch-progressbar';


export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark sticky-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" id='NavbarMainHeading'>Newsgram</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
        {/* <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
        </div> */}
        {/* <div className="progress" style={{ height: "1px" }}>
          <div className="progress-bar bg-danger" role="progressbar" style={{ width: "25%", color: "red" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div> */}
        {/* <ProgressBar style={{ backgroundColor: 'red', height: '10px' }}/> */}

      </>
    )
  }
}