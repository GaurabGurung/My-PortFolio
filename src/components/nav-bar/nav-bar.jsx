import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./nav-bar.module.css";
import MenuIcon from "../../assets/nav/menuIcon.png";
import CloseIcon from "../../assets/nav/closeIcon.png";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Conditionally render links based on the current pathname
  const renderLinks = () => {
    if (location.pathname === "/contact") {
      return (
        <ul className={`${styles.menuItems}`}>
          <li>
            <Link to="/">Go Back</Link>
          </li>
        </ul>
      );
    }

    return (
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? CloseIcon : MenuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
          <li>
            <a href="/#qualification">My Qualification</a>
          </li>
          <li>
            <a href="/#experience">My Skills</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <Link to="/contact" className={styles.containerBtn}>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <nav className={styles.navbar}>
        <a className={styles.title} href="/#">
          Gaurab <span className={styles.lastName}>Gurung</span>
        </a>
        {renderLinks()}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
