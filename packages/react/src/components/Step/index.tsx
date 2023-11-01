'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import findMatch from '../utils/findMatch';
import objectsToString from '../utils/objectsToString';
import { useTheme } from '../../context/theme';
import type {
  active,
  children,
  className,
  completed,
  disabled,
  expanded,
  index,
  last,
} from '../../types/components/step';
import {
  propTypesActive,
  propTypesChildren,
  propTypesClassName,
  propTypesCompleted,
  propTypesDisabled,
  propTypesExpanded,
  propTypesIndex,
  propTypesLast,
} from '../../types/components/step';

import { useStepperContext } from '../Stepper/StepperContext';
import StepContextProvider from './StepContext';
import type { StepContextType } from './StepContext';

export interface StepProps extends React.ComponentProps<'div'> {
  active?: active;
  children?: children;
  className?: className;
  completed?: completed;
  disabled?: disabled;
  expanded?: expanded;
  index?: index;
  last?: last;
}

export const Step = React.forwardRef<HTMLDivElement, StepProps>(
  (
    {
      active: activeProp,
      children,
      className,
      completed: completedProp,
      disabled: disabledProp,
      expanded,
      index,
      last,
      ...rest
    },
    ref,
  ): React.ReactElement => {
    //1. init
    const { stepper } = useTheme();
    const {
      defaultProps,
      styles: { step },
    } = stepper;

    //2. set default props
    expanded = expanded ?? defaultProps.expanded;
    index = index ?? defaultProps.index;
    last = last ?? defaultProps.last;

    const {
      activeStep,
      connector,
      nonLinear,
      orientation,
      alternativeLabel,
      color,
    } = useStepperContext();

    let [
      active = defaultProps.active,
      completed = defaultProps.completed,
      disabled = defaultProps.disabled,
    ] = [activeProp, completedProp, disabledProp];

    if (activeStep === index) {
      active = activeProp !== undefined ? activeProp : true;
    } else if (!nonLinear && activeStep > index) {
      completed = completedProp !== undefined ? completedProp : true;
    } else if (!nonLinear && activeStep < index) {
      disabled = disabledProp !== undefined ? disabledProp : true;
    }

    const contextValue = React.useMemo(
      () => ({
        active,
        completed,
        disabled,
        expanded,
        index,
        last,
        icon: index + 1,
      }),
      [active, completed, disabled, expanded, index, last],
    );

    //3. set styles
    const stepRootClasses = objectsToString(step.base);
    const stepOrientationClasses = objectsToString(
      step.orientation[orientation],
    );

    const classes = twMerge(
      clsx(stepRootClasses, stepOrientationClasses),
      className,
    );

    const newChildren = (
      <div ref={ref} {...rest} className={classes}>
        {connector && alternativeLabel && index !== 0 ? connector : null}
        {children}
      </div>
    );

    return (
      <StepContextProvider value={contextValue}>
        {connector && !alternativeLabel && index !== 0 ? (
          <React.Fragment>
            {connector}
            {newChildren}
          </React.Fragment>
        ) : (
          newChildren
        )}
      </StepContextProvider>
    );
  },
);

Step.displayName = 'Step';

Step.propTypes = {
  active: propTypesActive,
  children: propTypesChildren,
  className: propTypesClassName,
  completed: propTypesCompleted,
  disabled: propTypesDisabled,
  expanded: propTypesExpanded,
  index: propTypesIndex,
  last: propTypesLast,
};

export { StepContextProvider };
export type { StepContextType };

export default Step;
