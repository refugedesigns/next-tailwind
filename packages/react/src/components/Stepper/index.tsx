'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import findMatch from '../utils/findMatch';
import objectsToString from '../utils/objectsToString';
import { useTheme } from '../../context/theme';
import type {
  activeStep,
  alternativeLabel,
  connector,
  nonLinear,
  orientation,
  className,
  children,
  color,
} from '../../types/components/stepper';
import {
  propTypesOrientation,
  propTypesActiveStep,
  propTypesAlternativeLabel,
  propTypesChildren,
  propTypesConnector,
  propTypesNonLinear,
  propTypesClassName,
  propTypesColor,
} from '../../types/components/stepper';

import { StepperContextProvider } from './StepperContext';
import clsx from 'clsx';

export interface StepperProps extends React.ComponentProps<'div'> {
  activeStep?: activeStep;
  alternativeLabel?: alternativeLabel;
  connector?: connector;
  nonLinear?: nonLinear;
  orientation?: orientation;
  className?: className;
  children?: children;
  color?: color;
}

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      activeStep,
      alternativeLabel,
      connector,
      nonLinear,
      orientation,
      className,
      children,
      color,
      ...rest
    },
    ref,
  ) => {
    //1. init
    const { stepper } = useTheme();
    const {
      defaultProps,
      valid,
      styles: { base },
    } = stepper;

    //2. set default props
    activeStep = activeStep ?? defaultProps.activeStep;
    alternativeLabel = alternativeLabel ?? defaultProps.alternativeLabel;
    connector = connector ?? defaultProps.connector;
    nonLinear = nonLinear ?? defaultProps.nonLinear;
    orientation = orientation ?? defaultProps.orientation;
    className = className ?? defaultProps.className;
    color = color ?? defaultProps.color;

    const childrenArray = React.Children.toArray(children).filter(Boolean);
    const steps = childrenArray.map((child: React.ReactElement, index) => {
      return React.cloneElement(child, {
        index,
        last: childrenArray.length - 1 === index,
        ...child.props,
      });
    });

    const contextValue = React.useMemo(
      () => ({
        activeStep,
        alternativeLabel,
        connector,
        nonLinear,
        orientation,
        color,
      }),
      [activeStep, alternativeLabel, connector, nonLinear, orientation, color],
    );

    //3. styles
    const baseStyles = objectsToString(base.initial);
    const orientationStyles = objectsToString(base.orientation[orientation]);
    const colorStyles = objectsToString(
      base?.color[findMatch(valid.colors, color, 'primary')],
    );

    const classes = twMerge(
      clsx(
        baseStyles,
        orientationStyles,
        colorStyles,
        alternativeLabel && 'flex-start',
      ),
      className,
    );

    return (
      <StepperContextProvider value={contextValue}>
        <div ref={ref} className={classes} {...rest}>
          {steps}
        </div>
      </StepperContextProvider>
    );
  },
);

Stepper.propTypes = {
  activeStep: propTypesActiveStep,
  alternativeLabel: propTypesAlternativeLabel,
  connector: propTypesConnector,
  nonLinear: propTypesNonLinear,
  orientation: PropTypes.oneOf(propTypesOrientation),
  className: propTypesClassName,
  children: propTypesChildren,
  color: PropTypes.oneOf(propTypesColor),
};

Stepper.displayName = 'Stepper';
