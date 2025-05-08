import RecipeCard from "@/app/components/RecipeCard";

const API_URL = "https://dummyjson.com/recipes?limit=20&skip=0";

const getRecipes = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.recipes;
};

const RecipesGrid = async () => {
  const recipes = await getRecipes();

  return (
    <div className="recipes_grid">
      {recipes.map((recipe) => (
        <RecipeCard key ={recipe.id} id={recipe.id} name={recipe.name} image={recipe.image} />
      ))}
    </div>
  );
};

export default RecipesGrid;
