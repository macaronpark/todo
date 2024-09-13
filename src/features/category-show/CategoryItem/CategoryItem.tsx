import type { TCategory } from '@entities/category';
import styles from './CategoryItem.module.scss';

type TProps = TCategory & {
  isSelected: boolean;
  onClick: () => void;
};

const CategoryItem = ({ id, title, isSelected, onClick }: TProps) => {
  return (
    <button
      className={`${styles.wrapper} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
    >{`${title} (#${id})`}</button>
  );
};

export default CategoryItem;
