import { useCallback } from 'react';

import { CategoryUpdateInput } from '@features/category-update';

import { Category, useCategoryContext } from '@entities/category';

import styles from './category-list-item.module.scss';

type TProps = {
  id: number;
  title: string;
  isSelected: boolean;
  onClick: () => void;
};

const CategoryListItem = ({ id, title, isSelected, onClick }: TProps) => {
  const { editingCategoryId, setEditingCategoryId } = useCategoryContext();
  const isEditing = editingCategoryId === id;

  const handleStartEditing = useCallback(() => {
    setEditingCategoryId(id);
  }, [id]);

  const handleEndEditing = useCallback(() => {
    setEditingCategoryId(null);
  }, []);

  return (
    <li className={styles.CategoryListItem} onDoubleClick={handleStartEditing}>
      {isEditing ? (
        <CategoryUpdateInput
          id={id}
          title={title}
          onEndEditing={handleEndEditing}
        />
      ) : (
        <Category
          id={id}
          title={title}
          isSelected={isSelected}
          onClick={onClick}
        />
      )}
    </li>
  );
};

export default CategoryListItem;
