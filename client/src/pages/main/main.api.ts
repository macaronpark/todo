export const fetchCategories = async () => {
  const response = await fetch('http://localhost:3000/categories');
  return response.json();
};
