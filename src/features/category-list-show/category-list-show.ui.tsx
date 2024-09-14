import { Category, useCategoryContext } from '@entities/category';

import styles from './category-list-show.module.scss';

const CategoryList = () => {
  const { categoryList, selectedCategory, handleSelectCategory } =
    useCategoryContext();

  return (
    <div className={styles.wrapper}>
      {categoryList.map((category) => (
        <Category
          key={category.id}
          id={category.id}
          title={category.title}
          onClick={() => handleSelectCategory(category)}
          isSelected={selectedCategory?.id === category.id}
        />
      ))}
    </div>
  );
};

export default CategoryList;
