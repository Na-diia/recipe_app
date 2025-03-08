import { getAllMeals } from "@/lib/fetch";
import MealsList from '../components/mealsList/mealsList';

export default async function Home() {

  const result = await getAllMeals();

  return (
    <div className="bg-[#282c34] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <h1 className="text-[#fff] font-bold text-7xl">Categories</h1>
    <MealsList meals={result.categories}/>
    </div>
  );
}