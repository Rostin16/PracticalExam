import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
     
     <nav className="navbar navbar-expand-lg navbar-light bg-gradient shadow-sm">
  <div className="container">
   
    <a className="navbar-brand mx-auto fw-bold text-dark fs-4" href="/">
      <img
        src="https://via.placeholder.com/40"
        alt="Logo"
        className="me-2"
        style={{ borderRadius: "50%" }}
      />
      MyStore
    </a>

    
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

   
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            className="nav-link text-dark fw-semibold px-3 py-2 rounded hover-link"
            to="/"
          >
            Product Form
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-dark fw-semibold px-3 py-2 rounded hover-link"
            to="/productlist"
          >
            Product List
          </Link>
        </li>
      </ul>
    </div>

    
    <form className="d-flex ms-auto">
      <input
        className="form-control me-2 shadow-sm border-0"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button
        className="btn btn-dark text-white px-4 py-2 rounded-pill shadow-sm"
        type="submit"
      >
        Search
      </button>
    </form>
  </div>
</nav>


    </div>
  );
}

export default Navbar;
