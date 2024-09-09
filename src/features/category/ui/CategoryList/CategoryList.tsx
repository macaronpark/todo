import styles from './CategoryList.module.scss';

type TProps = {
  children: JSX.Element | JSX.Element[];
};

const CategoryList = ({ children }: TProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default CategoryList;
