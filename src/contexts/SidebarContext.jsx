// src/contexts/SidebarContext.jsx
import { createContext } from 'react';

export const SidebarContext = createContext({
  isSidebarOpen: true,
  toggleSidebar: () => {}
});