import { addCategory } from '@db/category';
import styles from './CategorySidebar.module.scss';
import { TCategory } from '@entities/category';
import CategoryItem from '../CategoryItem';
import CategoryList from '../CategoryList';

const CategorySidebar = () => {
  const [categoryList, setCategoryList] = useState<TCategory[]>([]);

    try {
      const response = await addCategory(newCategory);
      // todo: 카테고리 추가 성공
      console.log(response);
    } catch (error) {
      // todo: 카테고리 추가 실패
      console.log(error);
    }
  };

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
    </div>
  );
};

export default CategorySidebar;
