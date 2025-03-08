'use client';
import Image from "next/image"
import { useRouter } from "next/navigation";
import SearchBar from "../searchBar/searchBar";


export interface MealsProps {
    meals: [
        {
            idCategory: string,
            strCategory: string,
            strCategoryThumb: string,
            strCategoryDescription: string,
        }
    ]
};

export default function MealsList ({meals}: MealsProps) {

    const router = useRouter();

    return( 
        <>
      <SearchBar />
        <ul className="w-11/12 max-w-7xl grid grid-cols-3 gap-y-20 gap-x-20 list-none p-0 mt-8 mb-8 ml-auto mr-auto">
           {meals.map((item) => <li key={item.idCategory} 
           className="flex flex-col  w-full rounded-lg transition-all text-[#ddd6cb] bg-[#25200f]">
           <div>
           <div className="relative h-60">
            <Image src={item.strCategoryThumb} alt='Meal image' 
            className="absolute w-full h-full left-0 top-0 right-0 bottom-0 object-cover" width={600} height={600}/>
           </div>
           <div className="pt-2 pb-0 pr-4 pl-4">
           <h2 className="font-mono font-medium text-4xl">{item.strCategory}</h2>
           </div>
           </div>
           <div className="pt-2 pr-4 pl-4 pb-4">
           <p>{item.strCategoryDescription}</p>
           </div>
           <div className="pt-4 pb-4 pr-4 pl-4 text-right ">
          <button className="inline-block bg-[#f9572a] mt-4 pt-2 pb-2 pr-4 pl-4 rounded-lg text-[#fff] font-bold" type="button" onClick={() => {router.push(`/${item.strCategory}`)}}>View details</button>
          </div>
           </li>)} 
        </ul>
        </>
    )
}       
