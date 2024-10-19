import { useCallback } from 'react';

import { UpdateCategoryInput } from '@features/category/update-category';
import { CategoryTaskCount } from '@features/category/show-category-task-count';

import { Category, useCategoryContext } from '@entities/category';

import styles from './category-list-item.module.scss';
import { TEST_ID } from '@shared/test';

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
