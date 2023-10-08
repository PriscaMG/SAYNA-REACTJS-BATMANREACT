import React from 'react';
import logohome from '../assets/logos/logohome.png';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container">
    <a className="navbar-brand" href='1'>
      <img src={logohome} alt=""/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto"/>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href='1'>HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='1'>GAME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='1'>ESHOP</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='1'>MON COMPTE</a>
        </li>
      <ul/>
    </div>
  </div>
</nav>
  );
}

export default NavBar;
