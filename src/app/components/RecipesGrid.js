'use client'

import {useState, useEffect} from 'react';
import RecipeCard from "@/app/components/RecipeCard";
import parsedData from "@/data/recipes.js";
import axios from 'axios';



const RecipesGrid = () => {
const [data, setData] = useState([]);

useEffect(() => {

  const getData = async () => {
    const response = await axios.get('https://dummyjson.com/recipes?limit=20&skip=0');
    const responseData = response.data.recipes;
    setData(responseData);// lo que se le pase como parametro se va a guardar en data
  }

  getData();

}, []);


  return (
    <div className="recipes_grid">
      {data.map(({id, name, image}) => (
        <RecipeCard key={id} id={id} name={name} image={image} />
      ))}
    </div>
  );
};

export default RecipesGrid;
