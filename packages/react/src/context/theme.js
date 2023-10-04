import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import merge from 'deepmerge';
import combineMerge from '../utils/combineMerge';
import theme from '../theme/index';

const NextTailwindTheme = createContext(theme);

NextTailwindTheme.displayName = 'NextTailwindThemeProvider';

function ThemeProvider({ value = theme, children }) {
  const mergedValue = merge(theme, value, { arrayMerge: combineMerge });

  return (
    <NextTailwindTheme.Provider value={mergedValue}>
      {children}
    </NextTailwindTheme.Provider>
  );
}

const useTheme = () => useContext(NextTailwindTheme);

ThemeProvider.propTypes = {
  value: PropTypes.object, // Replace 'object' with the appropriate type for the 'value' prop
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, useTheme };
