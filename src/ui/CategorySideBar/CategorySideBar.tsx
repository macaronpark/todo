import { addCategory } from '../../db/category';
import styles from './CategorySideBar.module.scss';

const CategorySideBar = () => {
  const handleAddCategory = async () => {
    const newCategory = { title: '제목없는 카테고리' };

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
      <p>lsb</p>
      <button onClick={handleAddCategory}>+ 카테고리</button>
    </div>
  );
};

export default CategorySideBar;
