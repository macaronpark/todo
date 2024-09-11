import { useCallback, useEffect, useState } from 'react';
import type { TCategory } from '@entities/category';
import { CategoryItem } from '@features/category/ui';
import { addCategory, getCategoryList } from '@features/category/model';
import styles from './Sidebar.module.scss';

type TProps = {
  selectedCategoryId?: string;
  onCategorySelect: ({ id, title }: TCategory) => void;
};

const Sidebar = ({ selectedCategoryId, onCategorySelect }: TProps) => {
  const [categoryList, setCategoryList] = useState<TCategory[]>([]);

  const queryCategoryList = useCallback(async () => {
    try {
      const categoryList = await getCategoryList();
      setCategoryList(categoryList ?? []);

      if (categoryList.length > 0) {
        const newTargetCategory = categoryList[0];

        onCategorySelect({
          id: newTargetCategory.id,
          title: newTargetCategory.title,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        window.alert(error.message);
      }
    }
  }, []);

  useEffect(() => {
    queryCategoryList();
  }, []);

  const handleAddCategoryButtonClick = () => {
    addCategory({ onSuccess: queryCategoryList });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.listWrapper}>
        {categoryList.map((category) => (
          <CategoryItem
            key={category.id}
            id={category.id}
            title={category.title}
            onClick={() => onCategorySelect(category)}
            isSelected={selectedCategoryId === category.id}
          />
        ))}
      </div>
      <button
        className={styles.addCategoryButton}
        onClick={handleAddCategoryButtonClick}
      >
        + 카테고리 추가
      </button>
    </div>
  );
};

export default Sidebar;
