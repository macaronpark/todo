import { TCategory } from '@entities/category';
import styles from './CategoryItem.module.scss';

const CategoryItem = ({ id, title }: TCategory) => {
  return <button className={styles.wrapper}>{`${title} (#${id})`}</button>;
};

export default CategoryItem;
