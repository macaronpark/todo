import { useEffect } from 'react';

import { Category } from '@entities/category';

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
    <div className={styles.CategoryList}>
      {categoryList.map((category) => (
        <Category
          key={category.id}
          id={category.id}
          title={category.title}
          onClick={() => setSelectedCategory(category)}
          isSelected={selectedCategory?.id === category.id}
        />
      ))}
    </div>
  );
};

export default CategoryList;
