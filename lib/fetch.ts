import axios from 'axios';

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/';

export const getAllMeals = async () => {
    try {
      const response = await axios.get('1/categories.php');
      return response.data;
    } catch (error) {
      console.log(error);
    }
};

export const getAllRecipeByCategories = async (name: string) => {
    try {
        const response = await axios.get(`1/filter.php?c=${name}`);
        return response.data;
    } catch (error) {
       console.log(error); 
    }
};

export const getRecipe = async (id: string) => {
    try {
        const response = await axios.get(`1/lookup.php?i=${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getRecipebyName = async (name: string) => {
    try {
        const response = await axios.get(`1/search.php?s=${name}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
