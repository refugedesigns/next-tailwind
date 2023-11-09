import React from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../context/theme';
import findMatch from '../utils/findMatch';
import objectsToString from '../utils/objectsToString';
import type { NewAnimatePresenceProps } from '../../types/generics';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import type {
  position,
  variant,
  linearProgressProps,
  className,
  activeStep,
  backButton,
  nextButton,
  steps,
} from '../../types/components/mobileStepper';
import {
  propTypesPosition,
  propTypesVariant,
  propTypesLinearProgressProps,
  propTypesClassName,
  propTypesActiveStep,
  propTypesBackButton,
  propTypesNextButton,
  propTypesSteps,
} from '../../types/components/mobileStepper';
import clsx from 'clsx';

export interface MobileStepperProps extends React.ComponentPropsWithRef<'div'> {
  position?: position;
  variant?: variant;
  className?: className;
  activeStep?: activeStep;
  backButton?: backButton;
  nextButton?: nextButton;
  linearProgressProps?: linearProgressProps;
  steps?: steps;
}

export const MobileStepper = React.forwardRef<
  HTMLDivElement,
  MobileStepperProps
>(
  (
    {
      position,
      variant,
      className,
      activeStep,
      backButton,
      nextButton,
      linearProgressProps,
      steps,
      ...rest
    },
    ref,
  ) => {
    // 1. init
    const { mobileStepper } = useTheme();
    const { defaultProps, styles, valid } = mobileStepper;

    // 2. set default props
    position = position ?? defaultProps.position;
    variant = variant ?? defaultProps.variant;
    className = className ?? defaultProps.className;
    activeStep = activeStep ?? defaultProps.activeStep;
    backButton = backButton ?? defaultProps.backButton;
    nextButton = nextButton ?? defaultProps.nextButton;
    linearProgressProps =
      linearProgressProps ?? defaultProps.linearProgressProps;
    steps = steps ?? defaultProps.steps;

    let value: number;
    if (variant === 'progress') {
      if (steps === 1) {
        value = 100;
      } else {
        value = Math.ceil((activeStep / (steps - 1)) * 100);
      }
    }

    // 3. set styles
    const rootClasses = objectsToString(styles.base);
    const positionClasses = objectsToString(
      styles.position[findMatch(valid.position, position, 'static')],
    );
    const dotsContainerClasses = objectsToString(styles.dotsContainer);
    const dots = objectsToString(styles.dots);
    const activeDots = objectsToString(styles.activeDot);
    const progress = objectsToString(styles.progress);

    const progressClasses = twMerge(
      clsx(progress),
      linearProgressProps.className,
    );
    const containerClasses = twMerge(
      clsx(rootClasses, positionClasses),
      className,
    );

    // 4. Framer for progress animation
    const controls = useAnimation();

    const variants = {
      initial: {
        width: 0,
      },
      animate: {
        width: `${value}%`,
        backgroundColor: '#ffff',
        transition: { duration: 1 },
      },
    };

    const NewAnimatePresence: React.FC<NewAnimatePresenceProps> =
      AnimatePresence;

    React.useEffect(() => {
      if (variant === 'progress') {
        controls.start('animate');
      }
    }, [value, variant, controls]);


    return (
      <div className={containerClasses} ref={ref} {...rest}>
        {backButton}
        {variant === 'text' && (
          <React.Fragment>
            {activeStep + 1}/{steps}
          </React.Fragment>
        )}
        {variant === 'dots' && (
          <div className={dotsContainerClasses}>
            {[...Array(steps)].map((_, index) => (
              <div
                key={index}
                className={twMerge(
                  clsx(
                    dots,
                    index === activeStep && activeDots,
                    index < activeStep && 'opacity-50',
                  ),
                )}
              />
            ))}
          </div>
        )}

        {variant === 'progress' && (
          <div className="w-1/3 bg-blue-gray-800 h-[3px]">
            <NewAnimatePresence>
              <motion.div
                variants={variants}
                initial="initial"
                animate={controls}
                {...linearProgressProps}
                className={progressClasses}
              />
            </NewAnimatePresence>
          </div>
        )}
        {nextButton}
      </div>
    );
  },
);

MobileStepper.displayName = 'MobileStepper';

MobileStepper.propTypes = {
  position: PropTypes.oneOf(propTypesPosition),
  variant: PropTypes.oneOf(propTypesVariant),
  className: propTypesClassName,
  activeStep: propTypesActiveStep,
  backButton: propTypesBackButton,
  nextButton: propTypesNextButton,
  linearProgressProps: propTypesLinearProgressProps,
  steps: propTypesSteps,
};

export default MobileStepper;
