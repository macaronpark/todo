import styles from './category-header-show.module.scss';
import { ReactNode } from 'react';

type TProps = {
  categoryId?: number;
  categoryTitle?: string;
  children: ReactNode | ReactNode[];
};

const CategoryHeader = ({
  categoryId: id,
  categoryTitle: title,
  children,
}: TProps) => {
  const categoryTitle = id ? `${title} (#${id})` : '-';

  return (
    <div className={styles.CategoryHeader}>
      <h1 className={styles.title}>{categoryTitle}</h1>
      {children}
    </div>
  );
};

export default CategoryHeader;
