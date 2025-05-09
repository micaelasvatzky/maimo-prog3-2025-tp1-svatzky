import RecipeCard from "@/app/components/RecipeCard";
import parsedData from "@/data/recipes.js";

//const API_URL = "https://dummyjson.com/recipes?limit=20&skip=0";

/* const getRecipes = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.recipes;
};  */

const RecipesGrid = () => {
  //const recipes = await getRecipes();

  return (
    <div className="recipes_grid">
      {parsedData.recipes.map(({id, name, image}) => (
        <RecipeCard key={id} id={id} name={name} image={image} />
      ))}
    </div>
  );
};

export default RecipesGrid;
