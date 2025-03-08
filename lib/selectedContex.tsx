
import React, { createContext, useState } from 'react';

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface SelectedRecipesContextType {
  selectedRecipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  removeRecipe: (id: string) => void;
}

export const SelectedRecipesContext = createContext<SelectedRecipesContextType | undefined>(undefined);

export const SelectedRecipesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>([]);

  const addRecipe = (recipe: Recipe) => {
    setSelectedRecipes((prev) => [...prev, recipe]);
  };

  const removeRecipe = (id: string) => {
    setSelectedRecipes((prev) => prev.filter((recipe) => recipe.idMeal !== id));
  };

  return (
    <SelectedRecipesContext.Provider value={{ selectedRecipes, addRecipe, removeRecipe }}>
      {children}
    </SelectedRecipesContext.Provider>
  );
};