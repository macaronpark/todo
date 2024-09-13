import styles from './DeleteCategoryButton.module.scss';

type TProps = {
  onClick: () => void;
};

const DeleteCategoryButton = ({ onClick }: TProps) => {
  return (
    <button className={styles.deleteCategoryButton} onClick={onClick}>
      삭제
    </button>
  );
};

export default DeleteCategoryButton;
