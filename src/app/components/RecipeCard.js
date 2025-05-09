import Image from "next/image";

const RecipeCard = ({id, name, image}) => {
  return (
    <div className="receta">
      <Image
        src={image}
        width={300}
        height={300} //lo pone como variable tipo number
        alt={name}
      />
      <div>{name}</div>
      <a href={`/recipe?id=${id}`}>Ver más</a>
    </div>
  );
};

export default RecipeCard;


