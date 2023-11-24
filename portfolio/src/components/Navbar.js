
import React from "react"


export default function Navbar() {
  return (
    <header id="navbar">
    <div class="header-div">
        <div>
          <a href="#about">
            <img src="images/name-small.png" alt="name logo" />
          </a>
        </div>
        <nav>
          <a href="#about" class="nav-link">About </a>
          <a href="#projects" class="nav-link">
            Projects
          </a>
          <a href="#contact" class="nav-link">
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/julia-lassig"
            target="_blank"
            rel="noreferrer">
            <img src="images/linkedin.png" alt="linked-in logo" />
          </a>
        </nav>
        </div>
    </header>
  )
}
