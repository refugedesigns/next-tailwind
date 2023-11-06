'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import objectsToString from '../utils/objectsToString';
import { useTheme } from '../../context/theme';
import { useIsomorphicLayoutEffect } from 'framer-motion';
import type {
  error,
  children,
  labelProps,
  icon,
  iconProps,
  optional,
  className,
  stepIconComponent,
} from '../../types/components/stepLabel';
import {
  propTypesError,
  propTypesChildren,
  propTypesClassName,
  propTypesIcon,
  propTypesIconProps,
  propTypesLabelProps,
  propTypesOptional,
  propTypesStepIconComponent,
} from '../../types/components/stepLabel';

import { useStepContext } from '../Step/StepContext';
import { useStepperContext } from '../Stepper/StepperContext';
import StepIcon from '../StepIcon';
import clsx from 'clsx';

export interface StepLabelProps extends React.ComponentPropsWithRef<'div'> {
  icon?: icon;
  iconProps?: iconProps;
  labelProps?: labelProps;
  className?: className;
  error?: error;
  children?: children;
  optional?: optional;
  stepIconComponent?: stepIconComponent;
}

export const StepLabel = React.forwardRef<HTMLDivElement, StepLabelProps>(
  (
    {
      icon,
      iconProps,
      labelProps,
      className,
      error,
      children,
      optional,
      stepIconComponent: StepIconComponentProp,
      ...rest
    },
    ref,
  ) => {
    //1. init
    const { stepper } = useTheme();
    const {
      defaultProps,
      styles: { stepLabel },
    } = stepper;
    const { active, completed, disabled, icon: iconContext } = useStepContext();
    const { alternativeLabel, orientation } = useStepperContext();

    //2. set defaults
    icon = icon ?? iconContext ?? defaultProps?.icon;
    iconProps = iconProps ?? defaultProps?.iconProps;
    labelProps = labelProps ?? defaultProps?.labelProps;
    className = className ?? defaultProps?.className;
    optional = optional ?? defaultProps?.optional;
    StepIconComponentProp =
      StepIconComponentProp ?? defaultProps?.stepIconComponent;

    let StepIconComponent = StepIconComponentProp;
    if (icon && !StepIconComponent) {
      StepIconComponent = StepIcon;
    }

    //3. set styles
    const rootContainerClasses = twMerge(
      clsx(
        objectsToString(stepLabel.base),
        alternativeLabel && 'flex-col',
        disabled && 'cursor-default',
        orientation === 'vertical' && 'text-left px-8',
      ),
      className,
    );
    const labelClasses = twMerge(
      clsx(
        objectsToString(stepLabel.label.initial),
        active && objectsToString(stepLabel.label.states.active),
        completed && objectsToString(stepLabel.label.states.completed),
        error && objectsToString(stepLabel.label.states.error),
        alternativeLabel && 'mt-[16px]',
      ),
      labelProps?.className,
    );

    const stepIconContainerClasses = clsx(
      objectsToString(stepLabel.iconContainer),
      alternativeLabel && 'pr-0',
    );

    const stepLabelContainerClasses = clsx(
      objectsToString(stepLabel.labelContainer),
      alternativeLabel && 'text-center',
    );
    return (
      <div {...rest} ref={ref} className={rootContainerClasses}>
        {(icon || StepIconComponent) && (
          <div className={stepIconContainerClasses}>
            <StepIconComponent
              active={active}
              completed={completed}
              error={error}
              icon={icon}
              {...iconProps}
            />
          </div>
        )}
        <div className={stepLabelContainerClasses}>
          {children && (
            <span className={labelClasses} {...labelProps}>
              {children}
            </span>
          )}
          {optional}
        </div>
      </div>
    );
  },
);

StepLabel.propTypes = {
  children: propTypesChildren,
  className: propTypesClassName,
  error: propTypesError,
  icon: propTypesIcon,
  iconProps: propTypesIconProps,
  labelProps: propTypesLabelProps,
  optional: propTypesOptional,
  stepIconComponent: propTypesStepIconComponent,
};

StepLabel.displayName = 'StepLabel';

export default StepLabel;
