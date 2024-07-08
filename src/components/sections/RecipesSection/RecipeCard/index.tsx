import { IRecipe } from "../../../../interfaces/recipe.interface";
import styles from "./style.module.css";

interface Props {
   recipe: IRecipe;
}

export function RecipeCard({ recipe }: Props) {
   return (
      <li className={styles.item}>
         <img src={recipe.img} alt={`Foto da pizza ${recipe.name}`} />
         <h3 className="title three">{recipe.name}</h3>
         <p className="text">
            {recipe.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
         </p>
      </li>
   );
}
