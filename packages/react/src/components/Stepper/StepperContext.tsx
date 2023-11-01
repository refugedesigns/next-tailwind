import React from 'react';
import PropTypes from 'prop-types';
import type {
  activeStep,
  alternativeLabel,
  connector,
  nonLinear,
  orientation,
  color,
} from '../../types/components/stepper';
import { propTypesOrientation } from '../../types/components/stepper';

export interface StepperContextType {
  activeStep: activeStep;
  alternativeLabel: alternativeLabel;
  connector: connector;
  nonLinear: nonLinear;
  orientation: orientation;
  color: color;
}

export interface StepperContextProviderProps {
  value: StepperContextType;
  children: React.ReactNode;
}

export const StepperContext = React.createContext<StepperContextType | {}>({});

if (process.env.NODE_ENV !== 'production') {
  StepperContext.displayName = 'StepperContext';
}

export function useStepperContext(): StepperContextType {
  const context = React.useContext(StepperContext);
  if (context === null) {
    throw new Error(
      'useStepperContext() must be used within a Stepper. It happens when you use Step component outside the Stepper component.',
    );
  }
  return context as StepperContextType;
}

export const StepperContextProvider = ({
  value,
  children,
}: StepperContextProviderProps) => {
  return (
    <StepperContext.Provider value={value}>{children}</StepperContext.Provider>
  );
};

if (process.env.NODE_ENV !== 'production') {
  StepperContextProvider.displayName = 'StepperContextProvider';
}

StepperContextProvider.propTypes = {
  value: PropTypes.shape({
    activeStep: PropTypes.number,
    alternativeLabel: PropTypes.bool,
    connector: PropTypes.func,
    nonLinear: PropTypes.bool,
    orientation: PropTypes.oneOf(propTypesOrientation),
  }),
  children: PropTypes.node.isRequired,
};

export default StepperContext;
