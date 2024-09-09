import { getCategoryList as getCategoryListFromDB } from '@db/category';

const getCategoryList = async () => {
  try {
    const categoryList = await getCategoryListFromDB();
    return categoryList;
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
