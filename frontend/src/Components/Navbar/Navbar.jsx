


import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
// import {FiSettings , FiUser} from "react-icons";
import { IoMdSettings } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";

function Navbar() {

  // for the links 
  const links = [
    { name: "Tasks", path: "/" },
    { name: "Focus", path: "/focus" },
    { name: "Archive", path: "/archive" }
  ];

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>ZenTask</h2>

      <ul className={styles.navlinks}>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <motion.div
                      layoutId="navbar-underline"
                      className={styles.underline}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <button className={styles.iconBtn}> <IoMdSettings></IoMdSettings></button>
        <button className={styles.iconBtn}> <FaUserAlt /></button>
      </div>
    </nav>
  );
}

export default Navbar;