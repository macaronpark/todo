import styles from './CategoryHeader.module.scss';
import { ReactNode } from 'react';

type TProps = {
  id?: string;
  title?: string;
  children: ReactNode | ReactNode[];
};

const CategoryHeader = ({ id, title, children }: TProps) => {
  const categoryTitle = id ? `${title} (#${id})` : '-';

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{categoryTitle}</h3>
      {children}
    </div>
  );
};

export default CategoryHeader;
