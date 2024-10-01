import { useCallback, useState } from 'react';

import { CategoryUpdateInput } from '@features/category-update';
import { CategoryDeleteButton } from '@features/category-delete';

import styles from './category-header.module.scss';

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
    <div className={styles.CategoryHeader} onClick={handleStartEditing}>
      {isEditing ? (
        <CategoryUpdateInput
          id={selectedCategoryId}
          title={selectedCategoryTitle}
          onEndEditing={handleEndEditing}
        />
      ) : (
        <button className={styles.titleButton}>{selectedCategoryTitle}</button>
      )}
      <CategoryDeleteButton
        categoryId={selectedCategoryId}
        categoryTitle={selectedCategoryTitle}
      />
    </div>
  );
};

export default CategoryHeader;
