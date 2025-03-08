import { getAllRecipeByCategories } from "@/lib/fetch"
import CategoryList from "@/components/categoryList/categoryList";

export default async function RecipePage ({params: {strCategory}}: 
  {params: {strCategory: string}}) {

  const result = await getAllRecipeByCategories(strCategory);


  return (
    <div className="bg-[#282c34]  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <CategoryList data={result}/>
    </div>
  )
};