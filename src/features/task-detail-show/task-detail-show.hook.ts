import { useState } from 'react';

const useToggleTaskDetail = () => {
  const [isVisible, setVisible] = useState(true);

  const handleToggle = () => {
    setVisible((prev) => !prev);
  };

  return { isVisible, handleToggle };
};

export default useToggleTaskDetail;
