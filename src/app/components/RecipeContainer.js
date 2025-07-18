"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/app/components/Loading";

const RecipeContainer = ({ id }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
        const responseData = response.data;
        console.log(responseData);
        setData(responseData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    getData();
  }, []);

  return (
    <div className="recipe_container">
      {!loading && !error && (
        <section className="recetaIndividual">
          <Image
            className="recetaIndividualImage"
            src={data.image}
            alt={data.name}
            width={600}
            height={400}
          />

          <div className="boxedRecipe">
            <h1 className="data">{data.name}</h1>
            <h5 className="data">
              Preparation time: {data.prepTimeMinutes} minutes
            </h5>

            <h5 className="ingredients data">Ingredients:</h5>
            <p>{data.ingredients.join(", ")}</p>

            <h2 className="data">Instructions:</h2>
            <ul>
              {data.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>

            <h4 className="cookingTime">
              Cooking time: {data.cookTimeMinutes} minutes
            </h4>
            <p className="bold">Servings: {data.servings}</p>
            <p className="bold">Difficulty: {data.difficulty}</p>
            <p className="bold">Rating: {data.rating}</p>

            <button className="data">
              <Link href="/">Volver</Link>
            </button>
          </div>
        </section>
      )}

      {loading && <Loading />}
      {error && <p>HUBO UN ERROR</p>}
    </div>
  );
};

export default RecipeContainer;
