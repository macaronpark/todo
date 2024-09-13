import { deleteCategory as deleteCategoryFromDB } from '@db/category';

type TArgs = {
  id?: string;
  onSuccess?: () => void;
};

const deleteCategory = async ({ id, onSuccess }: TArgs) => {
  if (!id) return;

  try {
    await deleteCategoryFromDB(id);

    onSuccess?.();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`❌ 카테고리를 삭제할 수 없습니다.: ${error.message}`);
    }

    throw new Error('❌ 알 수 없는 에러가 발생했습니다.');
  }
};

export default deleteCategory;
