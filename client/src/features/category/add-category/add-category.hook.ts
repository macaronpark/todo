import { TNewCatergory } from '@entities/category';
import { useMutation } from '@tanstack/react-query';

export const useAddCategory = () => {
  const addCategory = useMutation({
    mutationKey: ['addCategory'],
    mutationFn: async (newCategory: TNewCatergory) => {
      const response = await fetch('http://localhost:3000/categories', {
        method: 'POST',
        body: JSON.stringify(newCategory),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.json();
    },
  });

  return { addCategory };
};
