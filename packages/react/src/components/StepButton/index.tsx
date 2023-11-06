'use client';
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../context/theme';
import findMatch from '../utils/findMatch';
import objectsToString from '../utils/objectsToString';
import { useStepperContext } from '../Stepper/StepperContext';
import { useStepContext } from '../Step/StepContext';
import type {
  icon,
  children,
  className,
  color,
  optional,
} from '../../types/components/stepButton';
import {
  propTypesIcon,
  propTypesChildren,
  propTypesClassName,
  propTypesColor,
  propTypesOptional,
} from '../../types/components/stepButton';
import StepLabel from '../StepLabel';

export interface StepButtonProps extends React.ComponentPropsWithRef<'button'> {
  icon?: icon;
  children?: children;
  className?: className;
  color?: color;
  optional?: optional;
}

export const StepButton = React.forwardRef<HTMLButtonElement, StepButtonProps>(
  ({ icon, children, className, color, optional, ...rest }, ref) => {
    // 1. init
    const { stepper } = useTheme();
    const {
      styles: { stepButton },
    } = stepper;
    const { defaultProps, valid, styles } = stepButton;
    const { active, disabled } = useStepContext();
    const { orientation, color: contextColor } = useStepperContext();

    // 2. set default props
    icon = icon ?? defaultProps?.icon;
    children = children ?? defaultProps?.children;
    className = className ?? defaultProps?.className;
    color = color ?? contextColor ?? defaultProps?.color;
    optional = optional ?? defaultProps?.optional;

    const childProps = {
      icon,
      optional,
    };

    const child = React.isValidElement(children) ? (
      React.cloneElement(children, childProps)
    ) : (
      <StepLabel {...childProps}>{children}</StepLabel>
    );

    // 3. set styles
    const rootClasses = objectsToString(styles.base.initial);
    const colorClasses = objectsToString(
      styles.colors[findMatch(valid.colors, color, 'primary')],
    );

    const classes = twMerge(
      clsx(
        rootClasses,
        colorClasses,
        orientation === 'vertical' && 'justify-start p-[8px] m-[-8px]',
      ),
      className,
    );

    return (
      <button
        {...rest}
        disabled={disabled}
        type="button"
        aria-current={active ? 'step' : undefined}
        ref={ref}
        className={classes}
      >
        {child}
      </button>
    );
  },
);

StepButton.propTypes = {
  icon: propTypesIcon,
  children: propTypesChildren,
  className: propTypesClassName,
  color: PropTypes.oneOf(propTypesColor),
  optional: propTypesOptional,
};

StepButton.displayName = 'StepButton';

export default StepButton;
