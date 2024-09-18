import styles from './ui.module.scss';

const NoCategory = () => {
  return (
    <div className={styles.noCategoryWrapper}>
      <div className={styles.image}>😶‍🌫️</div>
      <div className={styles.desc}>
        카테고리를 추가하고
        <br />
        태스크를 관리해보세요.
      </div>
    </div>
  );
};

export default NoCategory;
