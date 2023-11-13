import React from 'react';

import type { contextValue, children } from '../../types/components/menu';
import {
  propTypesContextValue,
  propTypesChildren,
} from '../../types/components/menu';

export interface MenuContextProviderProps {
  value: contextValue;
  children: children;
}

export const MenuContext = React.createContext<contextValue | null>(null);
MenuContext.displayName = 'MenuContext';

export const useMenu = () => {
  const context = React.useContext(MenuContext);

  if (context === null) {
    throw new Error(
      'useMenu() must be used within a Menu. It happens when you use Menu component outside the MenuCore, MenuItem, MenuHandler or MenuList compoents outside the Menu component.',
    );
  }
  return context;
};

export const MenuContextProvider = ({
  value,
  children,
}: MenuContextProviderProps) => {
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

MenuContextProvider.propTypes = {
  value: propTypesContextValue,
  children: propTypesChildren,
};
