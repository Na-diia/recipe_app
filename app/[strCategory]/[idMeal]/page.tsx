import { getRecipe } from "@/lib/fetch";
import RecipeDetails from "@/components/recipeDetails/recipeDetails";

export default async function IdMealPage  ({params: {idMeal}}: 
    {params: {idMeal: string}}) {

    const result = await getRecipe(idMeal);

    return (
        <div className="bg-[#282c34]  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <RecipeDetails data={result}/>
        </div>
    )
}