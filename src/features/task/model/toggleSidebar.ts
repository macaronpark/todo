import { useState } from 'react';

const useToggleSidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return { isSidebarVisible, toggleSidebar };
};

export default useToggleSidebar;
