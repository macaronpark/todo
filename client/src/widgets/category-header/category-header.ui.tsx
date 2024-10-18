import { useCallback, useState } from 'react';

import { UpdateCategoryInput } from '@features/category/update-category';
import { DeleteCategoryButton } from '@features/category/delete-category';

import styles from './category-header.module.scss';
import { TEST_ID } from '@shared/test';

type TProps = {
  selectedCategoryId?: number;
  selectedCategoryTitle?: string;
};

const CategoryHeader = ({
  selectedCategoryId,
  selectedCategoryTitle,
}: TProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleStartEditing = useCallback(() => setIsEditing(true), []);
  const handleEndEditing = useCallback(() => setIsEditing(false), []);

  if (!selectedCategoryId || !selectedCategoryTitle) return null;

  return (
    <div
      className={styles.CategoryHeader}
      onClick={handleStartEditing}
      data-testid={TEST_ID.category.header}
    >
      {isEditing ? (
        <UpdateCategoryInput
          id={selectedCategoryId}
          title={selectedCategoryTitle}
          onEndEditing={handleEndEditing}
        />
      ) : (
        <button className={styles.titleButton}>{selectedCategoryTitle}</button>
      )}
      <DeleteCategoryButton
        categoryId={selectedCategoryId}
        categoryTitle={selectedCategoryTitle}
      />
    </div>
  );
};

export default CategoryHeader;
