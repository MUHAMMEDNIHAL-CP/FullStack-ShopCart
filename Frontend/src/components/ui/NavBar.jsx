import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styles from './NavBar.module.css';
import NavBarLink from "./NavBarLink";
import pic from "../../assets/shopcart.png";
import { FaSearch } from "react-icons/fa";

const NavBar = ({ numCartItems }) => {
  const handleSearch = () => {
    const query = document.getElementById('searchInput').value;
    alert(`Searching for: ${query}`); // Replace this with actual search logic
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2 ${styles.stickyNavbar}`}>
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={pic} style={{ width: '46px' }} alt="Logo" />
        </Link>
      
        {/* Toggle Button for Small Screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        

        {/* Navigation Links and Cart */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          
          {/* Search Bar */}
        <div className="d-flex flex-grow-1 justify-content-center">
          <div className="input-group" style={{ maxWidth: '400px', width: '100%' }}>
            <input
              type="text"
              id="searchInput"
              placeholder="Search..."
              className="form-control"
              aria-label="Search"
            />
            <button
              className="btn btn-dark"
              onClick={handleSearch}
              aria-label="Search button"
            >
              <FaSearch />
            </button>
          </div>
        </div>
        <NavBarLink />
          <Link
            to="/cart"
            style={{ backgroundColor: 'black', color: 'white' }}
            className={`btn ms-3 rounded-pill position-relative ${styles.responsiveCart}`}
          >
            <FaCartShopping />
            {numCartItems > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                style={{ fontSize: '0.85rem', padding: '0.5em 0.65em', backgroundColor: '#6050DC' }}
              >
                {numCartItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
