import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { FaHeart } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();
  const favorites = store.favorites;

  return (
    <nav className="navbar sticky-top navbar-dark">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
              className="logo"
            ></img>
          </span>
        </Link>
        <div className="ml-auto">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="favorites-icon-wrapper">
                <FaHeart className="icon-favorites" />
                <span className="favorites-count">{favorites.lenght}</span>
              </div>
              <strong>Favorites</strong>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Action</span>
                    <MdDeleteOutline className="icon-delete" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
