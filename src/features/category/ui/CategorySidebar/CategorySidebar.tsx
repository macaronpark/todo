import { addCategory, getCategoryList } from '@features/category/model';
import styles from './CategorySidebar.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { TCategory } from '@entities/category';
import CategoryItem from '../CategoryItem';
import CategoryList from '../CategoryList';

const CategorySidebar = () => {
  const [categoryList, setCategoryList] = useState<TCategory[]>([]);

  const query = useCallback(async () => {
    try {
      const categoryList = await getCategoryList();
      setCategoryList(categoryList ?? []);
    } catch (error) {
      if (error instanceof Error) {
        window.alert(error.message);
      }
    }
  }, []);

  useEffect(() => {
    query();
  }, []);

  return (
    <div className={styles.wrapper}>
      <CategoryList>
        {categoryList.map((category) => (
          <CategoryItem
            key={category.id}
            id={category.id}
            title={category.title}
          />
        ))}
      </CategoryList>

      <button onClick={() => addCategory({ onSuccess: query })}>
        + 카테고리
      </button>
    </div>
  );
};

export default CategorySidebar;
