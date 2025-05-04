import Image from "next/image";

const RecipeCard = () => {
  return (
    <div className="recipe_card">
      <Image
        src="/assets/snoopy.jpg"
        width={300}
        height={300} //lo pone como variable tipo number
        alt="Snoopy"
      />
    </div>
  );
};

export default RecipeCard;

//buscar como hacer el fetch con la api para poder traer los objetos y pasar las props a las cards
