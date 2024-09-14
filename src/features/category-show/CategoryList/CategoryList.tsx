import styles from './CategoryList.module.scss';
import { Category } from '@entities/category';
import { useCategoryContext } from '@app/providers/CategoryProvider';

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
