import React, { useState } from 'react';
import { NavLink, useNavigate,Link } from "react-router-dom";
import * as bootstrap from "bootstrap";
import { SiIfood } from "react-icons/si";
import { useRef } from 'react';

const Navs = () => {
  const show=useNavigate();
  const use=useRef();
const [check,setCheck]=useState(false);
const run=()=>{
  show(`/Search/${use.current.value}`,{state:{test:use.current.value}})
}
  return (
    <nav className="navbar navbar-expand-md sticky-top bg-white">
      <div className="container  rounded-3  shadow-sm">
        <Link to="/Carousel">
          <a className="navbar-brand">
            <SiIfood className="fs-1" />
          </a>
        </Link>

        <a
          onClick={() => setCheck(!check)}
          aria-expanded={check ? "true" : "false"}
          className="navbar-toggler mb-3 p-2 text-decoration-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
        >
          <i className="ri-list-check "></i>
        </a>
        <form
          className="input-group  input-group-sm"
          style={{ maxWidth: "400px" }}
        >
          <input
          onChange={run}
            ref={use}
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            onClick={run}
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <i className="ri-search-2-line"></i>
          </button>
        </form>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item pb-2">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="nav-item pb-2">
              <NavLink to={"/Maindash"}>Dish</NavLink>
            </li>
            <li className="nav-item pb-2">
              <NavLink to={"/chickenpage"}>Fish</NavLink>
            </li>
            <li className="nav-item pb-2">
              <NavLink to={"/fishpage"}>Chicken</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navs

