"use client";

import { useState, useEffect } from "react";
import RecipeCard from "@/app/components/RecipeCard";
import axios from "axios";

const RecipesGrid = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://dummyjson.com/recipes?limit=20&skip=0"
        );
        const responseData = response.data.recipes;
        setData(responseData); // lo que se le pase como parametro se va a guardar en la variable data
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    getData();
  }, []);

  return (
    <div className="recipes_grid">
      {!loading &&
        data.map(({ id, name, image }) => (
          <RecipeCard key={id} id={id} name={name} image={image} />
        ))}

      {loading && "Loading..."}

      {error && "HUBO UN ERROR"}
    </div>
  );
};

export default RecipesGrid; 