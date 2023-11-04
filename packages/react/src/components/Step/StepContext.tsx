import React from 'react';
import PropTypes from 'prop-types';
import type { ReactNode } from 'react';

import type {
  active,
  index,
  last,
  expanded,
  disabled,
  completed,
} from '../../types/components/step';

export interface StepContextType {
  active: active;
  index: index;
  last: last;
  expanded: expanded;
  disabled: disabled;
  completed: completed;
  icon: ReactNode;
}

export interface StepProviderProps {
  value: StepContextType;
  children: ReactNode;
}

export const StepContext = React.createContext<StepContextType | {}>({});

if (process.env.NODE_ENV !== 'production') {
  StepContext.displayName = 'StepContext';
}

export function useStepContext(): StepContextType {
  const context = React.useContext(StepContext);
  if (context === null) {
    throw new Error(
      'useStepContext() must be used within a Step. It happens when you use Step component outside the Step component.',
    );
  }
  return context as StepContextType;
}

const StepContextProvider = ({ value, children }: StepProviderProps) => {
  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};

if (process.env.NODE_ENV !== 'production') {
  StepContextProvider.displayName = 'StepContextProvider';
}

StepContextProvider.propTypes = {
  value: PropTypes.shape({
    active: PropTypes.bool,
    index: PropTypes.number,
    last: PropTypes.bool,
    expanded: PropTypes.bool,
    disabled: PropTypes.bool,
    completed: PropTypes.bool,
  }),
  children: PropTypes.node,
};

export default StepContextProvider;
