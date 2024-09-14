import { addCategoryToDB } from '@entities/category';

const addCategory = async ({ onSuccess }: { onSuccess?: () => void }) => {
  try {
    const newCategory = { title: '새 카테고리' };
    await addCategoryToDB(newCategory);

    onSuccess?.();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`❌ 새 카테고리를 만들 수 없습니다.: ${error.message}`);
    }

    throw new Error('❌ 알 수 없는 에러가 발생했습니다.');
  }
};

export default addCategory;
