import type { TCategory } from './category.type';
import styles from './category.module.scss';

type TProps = TCategory & {
  isSelected: boolean;
  onClick: () => void;
};

const Category = ({ id, title, isSelected, onClick }: TProps) => {
  return (
    <li className={styles.Category}>
      <button
        className={isSelected ? styles.selected : ''}
        onClick={onClick}
      >{`🟰 ${title}(#${id})`}</button>
    </li>
  );
};

export default Category;
