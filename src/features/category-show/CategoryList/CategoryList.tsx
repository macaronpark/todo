import styles from './CategoryList.module.scss';
import CategoryItem from '../CategoryItem';
import { useCategoryContext } from '@app/providers/CategoryProvider';

const CategoryList = () => {
  const { categoryList, selectedCategory, handleSelectCategory } =
    useCategoryContext();

  return (
    <div className={styles.wrapper}>
      {categoryList.map((category) => (
        <CategoryItem
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
