import { useCallback, useState } from 'react';

import { UpdateCategoryInput } from '@features/category/update-category';
import { DeleteCategoryButton } from '@features/category/delete-category';

import { TEST_ID } from '@shared/test';
import { useStore } from '@shared/store';

import styles from './category-header.module.scss';

const CategoryHeader = () => {
  const [isEditing, setIsEditing] = useState(false);
  const handleStartEditing = useCallback(() => setIsEditing(true), []);
  const handleEndEditing = useCallback(() => setIsEditing(false), []);

  const selectedCategory = useStore((state) => state.selectedCategory);
  if (!selectedCategory) return null;

  return (
    <div
      className={styles.CategoryHeader}
      onClick={handleStartEditing}
      data-testid={TEST_ID.category.header}
    >
      {isEditing ? (
        <UpdateCategoryInput
          id={selectedCategory.id}
          title={selectedCategory.title}
          onEndEditing={handleEndEditing}
        />
      ) : (
        <button className={styles.titleButton}>{selectedCategory.title}</button>
      )}
      <DeleteCategoryButton
        categoryId={selectedCategory.id}
        categoryTitle={selectedCategory.title}
      />
    </div>
  );
};

export default CategoryHeader;
