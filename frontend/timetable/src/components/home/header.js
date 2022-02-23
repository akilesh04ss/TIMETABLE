import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import logo from "../../assets/logo.fw.png";
import "./header.css";
import Button from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
function Header() {
  return (
    // <div style={{ display: "block", width: 700, padding: 30 }}>
    //   <Navbar className="bar1">
    //     <Navbar.Brand href="#home">
    //       <img
    //         src={logo}
    //         alt="Sample Brand Logo"
    //         width="350"
    //         className="align-top d-inline-block"
    //         height="70"
    //       />
    //       <button type="button" class="btn btn-info btn1">
    //         Login
    //       </button>
    //       <button type="button" class="btn btn-outline-info">
    //         Info
    //       </button>
    //     </Navbar.Brand>
    //   </Navbar>
    // </div>
    <div>
      {/* <nav class="navbar navbar-expand-sm bg-light">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link 1
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link 2
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link 3
            </a>
          </li>
        </ul>
        <button type="button" class="btn btn-light btn1">
          Light
        </button>
      </nav> */}
      {/* <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
      {/* <nav class="navbar navbar-expand-md bg-dark navbar-dark"> */}
      {/* <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container">
        <h3>Collapsible Navbar</h3>
        <p>
          In this example, the navigation bar is hidden on small screens and
          replaced by a button in the top right corner (try to re-size this
          window).
        </p>
        <p>
          Only when the button is clicked, the navigation bar will be displayed.
        </p>
        <p>
          Tip: You can also remove the .navbar-expand-md class to ALWAYS hide
          navbar links and display the toggler button.
        </p>
      </div> */}
      {/* <ul className="nav justify-content-end">
          <li className="nav-item">
            <img src={logo} alt="logo" />
          </li> */}
      {/* <li
            className="nav-item justify-content-end"
            style={{ background: "red" }}
          > */}
      {/* <button
            className="btn btn-success"
            type="submit"
            style={{ background: "red", height: 200 }}
          >
            Login
          </button> */}
      {/* </li> */}
      {/* </ul> */}
      {/* </nav> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" style={{ width: 250 }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <form class="form-inline my-2 my-lg-0">
            <button
              class="btn btn-outline-success my-2 my-sm-0 text-dark font-weight-bold h1 btn-lg 
              rounded-pill rounded-lg font-size-lg position-relative full-left"
              type="submit"
            >
              LOGIN
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
