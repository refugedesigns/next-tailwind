'use client';
import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
import { twMerge } from 'tailwind-merge';
import objectsToString from '../utils/objectsToString';
import { useTheme } from '../../context/theme';
import type {
  active,
  completed,
  className,
  error,
  icon,
  color,
} from '../../types/components/stepIcon';

import {
  propTypesActive,
  propTypesCompleted,
  propTypesError,
  propTypesIcon,
  propTypesClassName,
  propTypesColor,
} from '../../types/components/stepIcon';

import { useStepperContext } from '../Stepper/StepperContext';
import CheckCircle from '../../svg-icons/CheckCircle';
import Warning from '../../svg-icons/Warning';
import clsx from 'clsx';
import findMatch from '../utils/findMatch';

export interface StepIconProps extends React.ComponentProps<typeof SvgIcon> {
  active?: active;
  completed?: completed;
  error?: error;
  icon?: icon;
  className?: className;
  color?: color;
}

const StepIcon = React.forwardRef<SVGSVGElement, StepIconProps>(
  ({ active, completed, error, icon, className, color, ...rest }, ref) => {
    // 1. init
    const { stepper } = useTheme();
    const {
      styles: {
        stepIcon: { defaultProps, styles, valid },
      },
    } = stepper;
    const { base, text } = styles;
    const { color: colorContext, nonLinear } = useStepperContext();

    // 2. set default props
    active = active ?? defaultProps?.active;
    completed = completed ?? defaultProps?.completed;
    error = error ?? defaultProps?.error;
    icon = icon ?? defaultProps?.icon;
    className = className ?? defaultProps?.className;
    color = color ?? colorContext ?? defaultProps?.color;

    // 3. set styles
    const rootClasses = objectsToString(base.initial);
    const initialColorClasses = objectsToString(base.colors[color].initial);
    const activeClasses = objectsToString(base.colors[color].active);
    const completedClasses = objectsToString(base.colors[color].completed);
    const errorClasses = objectsToString(base.colors.error.initial);
    const rootTextClasses = objectsToString(text.initial);
    const textColorClasses = objectsToString(
      text.colors[findMatch(valid.colors, color, 'primary')],
    );

    if (typeof icon === 'number' || typeof icon === 'string') {
      let classes = clsx(rootClasses);

      if (error) {
        classes = twMerge(classes, errorClasses, className);
        return <Warning ref={ref} {...rest} className={classes} />;
      }

      if (completed && !nonLinear) {
        classes = twMerge(classes, completedClasses, className);
        return <CheckCircle ref={ref} {...rest} className={classes} />;
      }
    }

    const classes = twMerge(
      clsx(rootClasses, initialColorClasses, active && activeClasses),
      className,
    );

    const textClasses = clsx(rootTextClasses, textColorClasses);

    return (
      <SvgIcon size="lg" ref={ref} className={classes} {...rest}>
        <circle cx="12" cy="12" r="12" />
        <text
          x="12"
          y="12"
          textAnchor="middle"
          dominantBaseline="central"
          className={textClasses}
        >
          {icon}
        </text>
      </SvgIcon>
    );
  },
);

StepIcon.propTypes = {
  active: propTypesActive,
  completed: propTypesCompleted,
  error: propTypesError,
  icon: propTypesIcon,
  className: propTypesClassName,
  color: PropTypes.oneOf(propTypesColor),
};

StepIcon.displayName = 'StepIcon';

export default StepIcon;
