import type { TCategory } from './category.type';
import styles from './category.module.scss';

type TProps = TCategory & {
  isSelected: boolean;
  onClick: () => void;
};

const Category = ({ id, title, isSelected, onClick }: TProps) => {
  return (
    <button
      className={`${styles.wrapper} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
    >{`${title} (#${id})`}</button>
  );
};

export default Category;
