import styles from './category.module.scss';

type TProps = {
  id: number;
  newTitle: string;
  isSelected: boolean;
  onClick: () => void;
};

const Category = ({ id, newTitle, isSelected, onClick }: TProps) => {
  return (
    <button
      className={`${styles.Category} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
    >{`🟰 ${newTitle}(#${id})`}</button>
  );
};

export default Category;
