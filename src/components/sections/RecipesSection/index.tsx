import { recipeList } from "../../../data/recipes.data";
import { RecipeCard } from "./RecipeCard";
import styles from "./style.module.css";

export function RecipesSection() {
   return (
      <section id="sabores" className="background-yellow section-p">
         <div className="container">
            <h2 className="title two">Sabores especiais</h2>
            <ul className={styles.list}>
               {recipeList.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
               ))}
            </ul>
         </div>
      </section>
   );
}
