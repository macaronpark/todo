import { Bars3Icon } from '@heroicons/react/20/solid';

import styles from './category.module.scss';

type TProps = {
  id: number;
  title: string;
  onClick: () => void;
};

const Category = ({ id, title, onClick }: TProps) => {
  return (
    <button className={styles.Category} onClick={onClick}>
      <Bars3Icon className={styles.icon} />
      <span>{title}</span>
      <span>{`(#${id})`}</span>
    </button>
  );
};

export default Category;
