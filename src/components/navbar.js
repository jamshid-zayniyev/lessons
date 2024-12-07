import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">

        <Link to={'/'} className="nav-link">Home</Link>
        {/* <Link to={'/about'} className="nav-link">About</Link>
        <Link to={'/service'} className="nav-link">Service</Link>
        <Link to={'/contact'} className="nav-link">Contact</Link> */}
        <Link to={'/timer'} className="nav-link">Timer</Link>
        <Link to={'/numbers'} className="nav-link">Numbers</Link>
        <Link to={'/games'} className="nav-link">Games</Link>
        <Link to={'/swiper'} className="nav-link">Swiper</Link>
        <Link to={'/movies'} className="nav-link">Movies</Link>
        <Link to={'/lessons'} className="nav-link">Lessons</Link>
        <Link to={'/memo'} className="nav-link">Memo</Link>

        {/* <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Service</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Lessons</a></li> */}
      </ul>
    </header>
  </div>
  )
}

export default Navbar