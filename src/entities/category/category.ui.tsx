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
    >{`🟰 ${title}(#${id})`}</button>
  );
};

export default Category;
