import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { supabase } from "../supabase-api/supabase";

function Navbar() {
  return (
    <div className={styles.container}>
      <Link to="/">
        <span className={styles.navTitle}>Chuck-Norris Jokes APP</span>
      </Link>
      <button
        className={styles.buttonContainer}
        onClick={() => supabase.auth.signOut()}
      >
        logout
      </button>
    </div>
  );
}

export default Navbar;
