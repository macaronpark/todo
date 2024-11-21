import { useCallback } from 'react';

import { UpdateCategoryInput } from '@features/category/update-category';
import { CategoryTaskCount } from '@features/category/show-category-task-count';

import { Category } from '@entities/category';

import { TEST_ID } from '@shared/test';
import { useStore } from '@shared/store';

import styles from './category-list-item.module.scss';

type TProps = {
  id: string;
  title: string;
  isSelected: boolean;
  onClick: () => void;
};

const CategoryListItem = ({ id, title, isSelected, onClick }: TProps) => {
  const editingCategory = useStore((state) => state.editingCategory);
  const setEditingCategory = useStore((state) => state.setEditingCategory);

  const isEditing = editingCategory?.id === id;

  const handleStartEditing = useCallback(() => {
    setEditingCategory({ id, title });
  }, [id, title]);

  const handleEndEditing = useCallback(() => {
    setEditingCategory(null);
  }, []);

  return (
    <li
      className={`${styles.CategoryListItem} ${
        isSelected ? styles.selected : ''
      }`}
      onDoubleClick={handleStartEditing}
      data-testid={TEST_ID.category.listItem}
    >
      {isEditing ? (
        <UpdateCategoryInput
          id={id}
          title={title}
          onEndEditing={handleEndEditing}
        />
      ) : (
        <Category id={id} title={title} onClick={onClick} />
      )}
      <CategoryTaskCount categoryId={id} isSelected={isSelected} />
    </li>
  );
};

export default CategoryListItem;
