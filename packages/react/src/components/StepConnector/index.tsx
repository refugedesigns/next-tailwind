'use client';
import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../context/theme';
import findMatch from '../utils/findMatch';
import objectsToString from '../utils/objectsToString';
import { useStepperContext } from '../Stepper/StepperContext';
import { useStepContext } from '../Step/StepContext';

import type {
  className,
  connectorProps,
} from '../../types/components/stepperConnector';

import {
  propTypesClassName,
  propTypesConnector,
} from '../../types/components/stepperConnector';

export interface StepperConnectorProps
  extends Omit<React.ComponentProps<'div'>, 'children'> {
  className?: className;
  connectorProps?: connectorProps;
}

const StepperConnector = React.forwardRef<
  HTMLDivElement,
  StepperConnectorProps
>(({ className, connectorProps, ...rest }, ref) => {
  //1. init
  const { stepper } = useTheme();
  const {
    valid,
    styles: {
      stepConnector: { base, connector, color: connectorColor },
    },
  } = stepper;

  const { orientation, alternativeLabel, color } = useStepperContext();
  const { active, completed, disabled, isReactIcon } = useStepContext();

  //2. styles
  const stepConnectorRootClasses = objectsToString(base);
  const orientationClasses = objectsToString(
    connector.orientation[orientation],
  );
  const stepConnectorColorClasses = objectsToString(
    connectorColor[findMatch(valid.colors, color, 'primary')],
  );
  const rootClasses = twMerge(
    clsx(
      stepConnectorRootClasses,
      alternativeLabel &&
        'absolute bg-blue-200 w-[90%]  top-[15px] left-[calc(-46%)]',
      disabled && 'cursor-not-allowed',
    ),
    className,
  );
  const connectorClasses = twMerge(
    clsx(
      orientationClasses,
      stepConnectorColorClasses,
      isReactIcon && orientation === 'vertical' && 'ml-[3rem]',
    ),
    connectorProps?.className,
  );
  return (
    <div ref={ref} {...rest} className={rootClasses}>
      <span {...connectorProps} className={connectorClasses} />
    </div>
  );
});

StepperConnector.displayName = 'StepperConnector';

StepperConnector.propTypes = {
  className: propTypesClassName,
  connectorProps: propTypesConnector,
};

export default StepperConnector;
