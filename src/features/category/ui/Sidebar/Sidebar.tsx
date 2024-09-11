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

  const queryCategoryList = useCallback(
    async ({
      onSuccess,
    }: {
      onSuccess: ({ categoryList }: { categoryList: TCategory[] }) => void;
    }) => {
      try {
        const categoryList = await getCategoryList();
        setCategoryList(categoryList ?? []);

        onSuccess({ categoryList });
      } catch (error) {
        if (error instanceof Error) {
          window.alert(error.message);
        }
      }
    },
    []
  );

  useEffect(() => {
    queryCategoryList({
      onSuccess: ({ categoryList }) => {
        if (categoryList.length > 0) {
          const targetCategory = categoryList[0];

          onCategorySelect({
            id: targetCategory.id,
            title: targetCategory.title,
          });
        }
      },
    });
  }, []);

  const handleAddCategoryButtonClick = () => {
    addCategory({
      onSuccess: () =>
        queryCategoryList({
          onSuccess: ({ categoryList }) => {
            const newCategory = categoryList[categoryList.length - 1];

            onCategorySelect({
              id: newCategory.id,
              title: newCategory.title,
            });
          },
        }),
    });
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
