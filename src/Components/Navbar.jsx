import React from 'react';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { FunctionContext } from "../Context/Context"

function Navbar() {
  const { favorites } = useContext(FunctionContext)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <div className="row w-100 align-items-center">
          <div className="col-auto">
            <Link to={'/'}>
              <img
                className="img-fluid"
                src='src/img/chewbacca-nav-bar-icon.png'
                alt="Chewbacca Logo"
                style={{ width: '100px', height: '75px' }}
              />
            </Link>
          </div>
          <div className="col text-center">
            <h1 className="mb-0" style={{ color: "Yellow" }}>The Force</h1>
          </div>
          <div className="col-auto d-flex align-items-center">
            <form className="d-flex me-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button
                  className="btn btn-outline-success "
                  href="#"
                  id="favoritesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <i className="bi bi-bookmark-heart fs-3"></i>
                </button>
                {favorites.length >= 1 && (
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
                    {favorites.map((item, index) => (
                      <li key={index}>
                        {item.name} <i class="bi bi-bookmark-heart fs-3 d-inline-flex /* justify-content-end */"></i>
                        <span className='float-end'>
                        </span>

                      </li>
                    ))
                    }
                  </ul>
                )}
                {/* <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
                  <li><a className="dropdown-item" href="#">Favorite 1</a></li>
                  <li><a className="dropdown-item" href="#">Favorite 2</a></li>
                  <li><a className="dropdown-item" href="#">Favorite 3</a></li> Put a map here
                </ul> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
