import { recipeList } from "../../../data/recipes.data";
import { RecipeCard } from "./RecipeCard";

export function RecipesSection() {
   return (
      <section id="sabores">
         <h2>Sabores especiais</h2>
         <ul>
            {recipeList.map((recipe) => (
               <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
         </ul>
      </section>
   );
}
