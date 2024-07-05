import { IRecipe } from "../../../../interfaces/recipe.interface";

interface Props {
   recipe: IRecipe;
}

export function RecipeCard({ recipe }: Props) {
   return (
      <li>
         <img src={recipe.img} alt={`Foto da pizza ${recipe.name}`} />
         <h3>{recipe.name}</h3>
         <p>
            {recipe.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
         </p>
      </li>
   );
}
