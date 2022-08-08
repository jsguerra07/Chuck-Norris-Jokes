import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../supabase-api/supabase";
import styles from "./Jokes.module.css";
import { useNavigate } from "react-router-dom";

function Jokes() {
  const navigate = useNavigate();

  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch("/.netlify/functions/junkApi")
      .then((response) => response.json())
      .then((res) => {
        //console.log(res, "useEffect");
        setMessage(res);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(message)
    try {
      const user = supabase.auth.user();
      const result = await supabase.from("Favorite jokes").insert({
        jokes: message.data.value,
        user_id: user.id,
      });
      //console.log(result);
      alert("Joke saved successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Jokes</h1>
        <p>{message.length === 0 ? "loading joke" : message.data.value}</p>
        <button className={styles.buttonContainer}>Add to favorites</button>
      </form>
    </div>
  );
}

export default Jokes;
