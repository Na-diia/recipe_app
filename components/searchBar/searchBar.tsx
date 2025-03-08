import React, { useState } from 'react';
import { getRecipebyName } from '@/lib/fetch';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const findRecipe = async (name: string) => {
     const response = await getRecipebyName(name);
     return response;
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = setQuery(e.target.value);
    if(typeof name === 'string') {
        findRecipe(name);
    }
     return;
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="Search recipes..."
      className="border p-2 rounded"
    />
  );
};

export default SearchBar;