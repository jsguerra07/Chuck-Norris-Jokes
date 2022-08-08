import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../supabase-api/supabase";
import styles from "./Favorites.module.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const getFavorites = async () => {
    const result = await supabase.from("Favorite jokes").select();
    console.log(result.data);
    setFavorites(result.data);
    //console.log(favorites, "favorites")
  };

  useEffect(() => {
    getFavorites();
    console.log(favorites, "favorites");
  }, []);

  return (
    <div className={styles.container}>
      <h1>Favorites</h1>
      {favorites.length > 0 ? (
        favorites.map((f, index) => <p key={index}>{f.jokes}</p>)
      ) : (
        <h1>Not Favorite jokes jet </h1>
      )}
    </div>
  );
}

export default Favorites;
