import Image from "next/image";
import Link from "next/link";

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
      <Link href={`/recipe/${id}`}>Ver más</Link>
    </div>
  );
};

export default RecipeCard;


