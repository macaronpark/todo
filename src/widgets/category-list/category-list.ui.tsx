import { useEffect } from 'react';

import { Category } from '@entities/category';

import { TEST_ID } from '@shared/test';

import useCategoryListShow from './category-list.hook';
import styles from './category-list.module.scss';

const CategoryList = () => {
  const {
    categoryList,
    selectedCategory,
    setSelectedCategory,
    getCategoryList,
  } = useCategoryListShow();

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <ol className={styles.CategoryList} data-testid={TEST_ID.category.list}>
      {categoryList.map((category) => (
        <Category
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
