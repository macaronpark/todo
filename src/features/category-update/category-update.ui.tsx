import { useCallback, useRef, useState } from 'react';
import useCategoryUpdate from './category-update.hook';

type TProps = {
  id: number;
  title: string;
  onEndEditing: () => void;
};

const CategoryUpdateInput = ({ id, title, onEndEditing }: TProps) => {
  const [newTitle, setNewTitle] = useState(title);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputRef = useCallback((input: HTMLInputElement) => {
    if (!input) return;

    input.focus();
    input.select();
    inputRef.current = input;
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      inputRef.current?.blur();
    }
  };

  const { updateCategory } = useCategoryUpdate();
  const handleInputBlur = async () => {
    if (title === newTitle) {
      onEndEditing();
      return;
    }

    const newCategory = { title: newTitle, id };
    await updateCategory({
      newCategory,
      onError: (error: Error) => {
        setNewTitle(title);
        window.alert(`❌ 카테고리 수정에 실패했습니다.: ${error.message}`);
      },
      onFinally: () => {
        onEndEditing();
      },
    });
  };

  return (
    <input
      ref={handleInputRef}
      value={newTitle}
      onChange={(e) => setNewTitle(e.target.value)}
      onKeyDown={handleKeyDown}
      onBlur={handleInputBlur}
    />
  );
};

export default CategoryUpdateInput;
