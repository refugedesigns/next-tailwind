import React from 'react';
import PropTypes from 'prop-types';
import type { NewAnimatePresenceProps } from '../../types/generics';
import objectsToString from '../utils/objectsToString';
import { useTheme } from '../../context/theme';
import merge from 'deepmerge';
import type {
  expanded,
  children,
  className,
  transitionDuration,
  animation,
  color,
} from '../../types/components/stepContent';
import {
  propTypesExpanded,
  propTypesChildren,
  propTypesClassName,
  propTypesTransitionDuration,
  propTypesAnimation,
  propTypesColor,
} from '../../types/components/stepContent';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useStepperContext } from '../Stepper/StepperContext';
import { useStepContext } from '../Step/StepContext';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import findMatch from '../utils/findMatch';

export interface StepContentProps extends React.ComponentProps<'div'> {
  expanded?: expanded;
  children?: children;
  className?: className;
  transitionDuration?: transitionDuration;
  animation?: animation;
  color?: color;
}

const StepContent = React.forwardRef<HTMLDivElement, StepContentProps>(
  (
    {
      expanded,
      children,
      className,
      transitionDuration,
      animation,
      color,
      ...rest
    },
    ref,
  ) => {
    //1. init
    const { stepper } = useTheme();
    const {
      styles: {
        stepContent: { defaultProps, styles, valid },
      },
    } = stepper;
    const { orientation, color: colorContext } = useStepperContext();
    const {
      active,
      last,
      expanded: expandedStep,
      isReactIcon,
    } = useStepContext();

    //2. set defaultProps
    expanded = expanded ?? expandedStep ?? defaultProps?.expanded;
    children = children ?? defaultProps?.children;
    className = className ?? defaultProps?.className;
    transitionDuration = transitionDuration ?? defaultProps?.transitionDuration;
    animation = animation ?? defaultProps?.animation;
    color = color ?? colorContext ?? defaultProps?.color;

    //3. set styles
    const rootClasses = objectsToString(styles.base.initial);
    const colorClasses = objectsToString(
      styles.base.colors[findMatch(valid.colors, color, 'primary')],
    );
    const classes = twMerge(
      clsx(
        rootClasses,
        colorClasses,
        isReactIcon && 'ml-[3rem]',
        last && 'border-l-0',
      ),
      className,
    );

    const NewAnimatePresence: React.FC<NewAnimatePresenceProps> =
      AnimatePresence;

    const defaultAnimation = {
      unmount: {
        opacity: 0,
        y: '-100%',
        transition: {
          duration: transitionDuration ?? 0.2,
        },
      },
      mount: {
        opacity: 1,
        y: '0%',
        transition: {
          duration: transitionDuration ?? 0.2,
        },
      },
    };

    if (process.env.NODE_ENV !== 'production') {
      if (orientation !== 'vertical') {
        console.error('StepContent: orientation must be "vertical"');
      }
    }

    const appliedAnimations = merge(defaultAnimation, animation);
    return (
      <div {...rest} ref={ref} className={classes}>
        <NewAnimatePresence>
          {(active || expanded) && (
            <motion.div
              initial="unmount"
              animate={active || expanded ? 'mount' : 'unmount'}
              exit="unmount"
              variants={appliedAnimations as Variants}
            >
              {children}
            </motion.div>
          )}
        </NewAnimatePresence>
      </div>
    );
  },
);

StepContent.propTypes = {
  expanded: propTypesExpanded,
  children: propTypesChildren,
  className: propTypesClassName,
  transitionDuration: propTypesTransitionDuration,
  animation: propTypesAnimation,
  color: PropTypes.oneOf(propTypesColor),
};

StepContent.displayName = 'StepContent';

export default StepContent;
