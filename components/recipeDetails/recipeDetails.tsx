import Image from "next/image";

interface RecipeProps {
    data: {
        meals: [
            {
                idMeal: string;
                strMeal: string;
                strCategory: string;
                strArea: string;
                strInstructions: string;
                strMealThumb: string;
                strYoutube: string;
            }
        ]
    }
};

export default function RecipeDetails ({data}: RecipeProps) {
    return (
        <div>
            {data ? data.meals.map((item) => <article key={item.idMeal}>
        <header className="flex pt-8 pb-8 pr-4 pl-4 gap-12 m-auto max-w-7xl">
        <div className="relative w-96 h-96 ">
        <Image src={item.strMealThumb} alt='Meal photo' className="w-full h-full absolute top-0 bottom-0 right-0 left-0" width={600} height={600} />
        </div>
        <div className="pb-0 pt-2 pr-4 pl-4  max-w-7xl text-[#ddd6cb]">
        <h1 className="text-5xl uppercase shadow-sm">{item.strMeal}</h1>
        <p className="text-center text-2xl">{item.strCategory}</p>
        </div>
        </header>
        <main>
        <p className="text-[#13120f] shadow-2xl bg-[#6e6464] max-w-4xl mt-8 mb-8 ml-auto mr-auto rounded-lg pt-8 pb-8 pr-8 pl-8 text-2xl ">{item.strInstructions}</p>
        </main>
            </article> 
        ) : <></>}
        </div>
    )
}