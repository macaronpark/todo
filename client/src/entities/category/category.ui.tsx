import { Bars3Icon } from '@heroicons/react/20/solid';

import styles from './category.module.scss';

type TProps = {
  id: number;
  title: string;
  isSelected: boolean;
  onClick: () => void;
};

const Category = ({ id, title, isSelected, onClick }: TProps) => {
  return (
    <button
      className={`${styles.Category} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
    >
      <Bars3Icon className={styles.icon} />
      <span>{`${title}(#${id})`}</span>
    </button>
  );
};

export default Category;
