export const deleteCategories = async (categoryId: string) => {
  const response = await fetch(
    `http://localhost:3000/categories/${categoryId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return response.json();
};
