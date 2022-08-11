import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../supabase-api/supabase.js";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function handleChange(e) {
    setEmail(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    try {
      alert("Check your email. We have sent a link to your inbox.");
      const response = await supabase.auth.signIn({
        email,
      });
      //console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (supabase.auth.user()) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.containerInfo}>
        <div>
          <h1>Chuck-Norris Jokes APP</h1>
          <h2 className={styles.hh2}>Log Into Jokes APP</h2>

          <input
            type="email"
            name="email"
            placeholder="  chucknorris@example.com..."
            onChange={(e) => handleChange(e)}
            className={styles.loginInput}
          />
          <br />
          <button className={styles.buttonContainer}>Log In</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
