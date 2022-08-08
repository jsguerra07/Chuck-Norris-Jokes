import React from "react";
import { useEffect } from "react";
import { supabase } from "../supabase-api/supabase";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    //console.log(supabase.auth.user())
    if (!supabase.auth.user()) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className={styles.container}>
      {/* <button onClick={() => supabase.auth.signOut()}>Logout</button> */}
      <Link to="/jokes">
        <button className={styles.buttonContainer}>Get Jokes</button>
      </Link>
      <Link to="/favorites">
        <button className={styles.buttonContainer}>My Favorite Jokes</button>
      </Link>
    </div>
  );
}

export default Home;
