import { type TCategory, getCategoryListFromDB } from '@entities/category';

type TArgs = {
  onSuccess: (categoryList: TCategory[]) => void;
};

const getCategoryList = async ({ onSuccess }: TArgs) => {
  try {
    const categoryList = await getCategoryListFromDB();
    onSuccess(categoryList);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `❌ 카테고리 목록을 불러올 수 없습니다.: ${error.message}`
      );
    }

    throw new Error('❌ 알 수 없는 에러가 발생했습니다.');
  }
};

export default getCategoryList;
