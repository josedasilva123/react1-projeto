import { recipeList } from "../../../data/recipes.data";
import { RecipeCard } from "./RecipeCard";

export function RecipesSection() {
   return (
      <section id="sabores" className="background-yellow">
         <h2 className="title two">Sabores especiais</h2>
         <ul>
            {recipeList.map((recipe) => (
               <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
         </ul>
      </section>
   );
}
