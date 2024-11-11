import { useEffect } from 'react';

import { TCategory } from '@entities/category';

import { TEST_ID } from '@shared/test';
import { useStore } from '@shared/store';

import { CategoryListItem } from './category-list-item';
import styles from './category-list.module.scss';

type TProps = {
  categoryList: TCategory[];
};

const CategoryList = ({ categoryList }: TProps) => {
  const selectedCategory = useStore((state) => state.selectedCategory);
  const setSelectedCategory = useStore((state) => state.setSelectedCategory);

  useEffect(() => {
    if (categoryList.length > 0) {
      setSelectedCategory(categoryList[0]);
    }
  }, [categoryList]);

  return (
    <ol className={styles.CategoryList} data-testid={TEST_ID.category.list}>
      {categoryList?.map((category) => (
        <CategoryListItem
          key={category.id}
          id={category.id}
          title={category.title}
          onClick={() => setSelectedCategory(category)}
          isSelected={selectedCategory?.id === category.id}
        />
      ))}
    </ol>
  );
};

export default CategoryList;
