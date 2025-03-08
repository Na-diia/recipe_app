'use client';
// import ArrowPrev from '../../public/arrow-left.svg';
// import ArrowNext from '../../public/arrow-right.svg';
// import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
// import ReactPaginate from "react-paginate";
import Image from "next/image";

export interface MealsProps {
    data: {
        meals: [
            {
                idMeal: string,
                strMeal: string,
                strMealThumb: string,
            }
        ]
    },
};

// interface PaginationEvent {
//     selected: number;
// };

export default function CategoryList ({data}: MealsProps) {

    // const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();
    const pathname = usePathname();

    // const currentPage = parseInt('1', 10) || 1;
    // const itemsPerPage = 6;
    // const pageCount = Math.ceil(data.meals.length / itemsPerPage);
  
    // const currentItems = data.meals.slice((currentPage -1) * itemsPerPage, currentPage * itemsPerPage);

    // useEffect(() => {
    //     if(!data.meals) return;
          
    //     setIsLoading(false);
    //   }, [data.meals]);

    //   const handlePageClick = (event: PaginationEvent) => {
    //     const newPage = event.selected + 1;
    //     const newPath = `/${category}/${newPage}`;
    //     router.push(newPath);
    //   };
    

    return( 
        <>
        <ul className="w-11/12 max-w-7xl grid grid-cols-3 gap-y-20 gap-x-20 list-none p-0 mt-8 mb-8 ml-auto mr-auto">
           {data.meals.map((item) => <li key={item.idMeal} 
           className="flex flex-col  w-full rounded-lg transition-all text-[#ddd6cb] bg-[#25200f]">
           <div>
           <div className="relative h-60">
            <button type="button" onClick={() => {router.push(`${pathname}/${item.idMeal}`)}}>
            <Image src={item.strMealThumb} alt='Meal image' 
            className="absolute w-full h-full left-0 top-0 right-0 bottom-0 object-cover" width={600} height={600}/>
           </button>
           </div>
           <div className="pt-2 pb-0 pr-4 pl-4">
           <h2 className="font-mono font-medium text-4xl">{item.strMeal}</h2>
           </div>
           </div>
           </li>)} 
        </ul>
        {/* <div className=''>
        <ReactPaginate
          forcePage={1 - 1}
          pageRangeDisplayed={1}
          pageCount={pageCount}
        //   containerClassName=''
        //   pageClassName=''
        //   pageLinkClassName=''
        //   breakLinkClassName=''
        //   activeClassName=''
        //   disabledClassName=''
        //   breakClassName=''
          breakLabel="..."
        //   nextClassName=''
          nextLabel={<ArrowNext className='' />}
          onPageChange={handlePageClick}
        //   previousClassName=''
          previousLabel={<ArrowPrev className='' />}
          renderOnZeroPageCount={null}
          hrefBuilder={page => `/${category}/${page}`}
        />
      </div> */}
      </>
        
    )
}  