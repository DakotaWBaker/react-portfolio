import React from 'react'
import { useState, useEffect } from 'react'
import App from './App'




export default function Navbar({page, setPage}) {
const [navbar, setNavbar] = useState(false)
const changeBackground = () => {
 if (window.scrollY >= 644) {
   setNavbar(true)
 } else {
   setNavbar(false)
 }
}
useEffect(() => {
  changeBackground()
  window.addEventListener("scroll", changeBackground)
})
  return (
    <div className='container nav'>
        <div className='row'>
    <nav className= {navbar ? " navbar-active navbar-dark pb-3 navbar-expand-xl fixed-top" : "pb-5 nav navbar-light navbar-dark navbar-expand-xl fixed-top"}>
  <div className="container-fluid">
    
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-center pt-3" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <a href = '#aboutscroll'> <button className = 'nav navbtn'>
            About
            </button>
            </a>
        </li>
        <li className="nav-item">
         <a href = '#projectscroll'> <button className = 'nav navbtn'>
            Projects
            </button>
            </a>
        </li>
        <li className="nav-item">
        <a href = '#contactscroll'> <button className = 'nav navbtn'>
            Contact
            </button>
            </a>
        </li>
        <li className="nav-item">
        </li>
      </ul>
    </div>
   
  </div>
</nav>
</div>
</div>
  )
}
