import React from "react";
import "./Nav.css";

function Nav(props) {
  const { links, logo } = props;

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} width={75} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              {links.map(link => {
                const liElement = (
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      {link}
                    </a>
                  </li>
                );
                return liElement;
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
