import Pizza1 from "../assets/Pizza1.jpg";
import Pizza2 from "../assets/Pizza2.jpg";
import Pizza3 from "../assets/Pizza3.jpg";
import { IRecipe } from "../interfaces/recipe.interface";

export const recipeList: IRecipe[] = [
    { id: 1, name: "Quatro queijos", price: 39, img: Pizza1 },
    { id: 2, name: "Vegana", price: 44, img: Pizza2 },
    { id: 2, name: "Marguerita", price: 39, img: Pizza3 },
];