import styles from './category-header-show.module.scss';
import { ReactNode } from 'react';

type TProps = {
  categoryId?: string;
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
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{categoryTitle}</h3>
      {children}
    </div>
  );
};

export default CategoryHeader;
