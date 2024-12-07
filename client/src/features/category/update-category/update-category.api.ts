export const updateCategory = async ({
  id,
  title,
}: {
  id: string;
  title: string;
}) => {
  const response = await fetch(`http://localhost:3000/categories/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  });

  return response.json();
};
