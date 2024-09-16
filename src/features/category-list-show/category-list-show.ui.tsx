import { Category } from '@entities/category';

import useCategoryListShow from './category-list-show.hook';
import styles from './category-list-show.module.scss';
import { useEffect } from 'react';

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
    <div className={styles.wrapper}>
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
