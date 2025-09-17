import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/home">E-Commerce</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

          <li className="nav-item active">
            <a className="nav-link" href="/product">Product <span class="sr-only"></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/basket">Basket <span class="sr-only"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin/home">Admin Page </a>
          </li>
        </ul>
      </div>
    </nav>
    // <nav style={{ padding: "20px", background: "#f0f0f0" }}>
    //   <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
    //   <Link to="/product">Product</Link>
    //   <Link to="/basket">Basket</Link>
    // </nav>
  )
}

export default Navbar