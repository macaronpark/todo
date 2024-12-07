import { TCategory } from '@entities/category';

export const fetchCategories = async (): Promise<TCategory[]> => {
  const response = await fetch('http://localhost:3000/categories');

  return response.json();
};
