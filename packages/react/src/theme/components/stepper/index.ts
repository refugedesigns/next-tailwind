import type {
  orientation,
  color,
  className,
  alternativeLabel,
  activeStep,
  nonLinear,
  connector,
  children,
} from '../../../types/components/stepper';
import type {
  active,
  completed,
  disabled,
  expanded,
  index,
  last,
} from '../../../types/components/step';

import { propTypesColor } from '../../../types/components/stepper';
import stepperColorsClasses from './colors';
import stepConnectorClasses from './connectorColors';
import type { connectorProps } from '../../../types/components/stepperConnector';
import type {
  error,
  labelProps,
  iconProps,
  icon,
  optional,
} from '../../../types/components/stepLabel';

export interface StepperStylesType {
  defaultProps?: {
    //Stepper Props
    color?: color;
    className?: className;
    orientation?: orientation;
    alternativeLabel?: alternativeLabel;
    activeStep?: activeStep;
    nonLinear?: nonLinear;
    connector?: connector;
    children?: children;
    //Step Props
    active?: active;
    completed?: completed;
    disabled?: disabled;
    expanded?: expanded;
    index?: index;
    last?: last;
    //StepConnector Props
    connectorProps?: connectorProps;
    //StepLabel Props
    labelProps?: labelProps;
    iconProps?: iconProps;
    icon?: icon;
    error?: error;
    label?: optional;
  };
  valid?: {
    colors?: string[];
  };
  styles?: {
    base?: {
      initial?: object;
      orientation?: {
        horizontal?: object;
        vertical?: object;
      };
      color?: typeof stepperColorsClasses;
    };
    stepLabel?: {
      base?: object;
      icon?: object;
      label?: object;
      labelContainer?: object;
      error?: object;
      states?: {
        active?: object;
        completed?: object;
        disabled?: object;
      };
    };
    stepIcon?: {};
    stepConnector?: {
      base?: object;
      connector?: {
        orientation?: {
          horizontal?: object;
          vertical?: object;
        };
      };
      color?: typeof stepConnectorClasses;
      states?: {
        active?: object;
        completed?: object;
        disabled?: object;
      };
    };
    stepButton?: {};
    stepContent?: {};
    step?: {
      base?: object;
      orientation?: {
        horizontal?: object;
        vertical?: object;
      };
      states?: {
        active?: object;
        completed?: object;
        disabled?: object;
      };
    };
  };
}

const stepperClasses: StepperStylesType = {
  defaultProps: {
    //Stepper Props
    color: 'primary',
    className: '',
    orientation: 'horizontal',
    alternativeLabel: false,
    activeStep: 0,
    nonLinear: false,
    connector: null,
    children: null,
    //Step Props
    active: false,
    completed: false,
    disabled: false,
    expanded: false,
    index: 0,
    last: false,
    //StepConnector Props
    connectorProps: {},
    //StepLabel Props
    labelProps: {},
    iconProps: {},
    icon: null,
    error: false,
    label: null,
  },
  valid: {
    colors: propTypesColor,
  },
  styles: {
    base: {
      initial: {
        display: 'flex',
      },
      orientation: {
        horizontal: {
          flexDirection: 'flex-row',
          alignItems: 'items-center',
        },
        vertical: {
          flexDirection: 'flex-col',
        },
      },
      color: stepperColorsClasses,
    },
    step: {
      base: {},
      orientation: {
        horizontal: {
          px: 'px-8',
        },
        vertical: {
          flex: 'flex-1',
          position: 'relative',
        },
      },
    },
    stepConnector: {
      base: {
        flex: 'flex-1',
      },
      connector: {
        orientation: {
          horizontal: {
            display: 'block',
            borderStyle: 'border',
            borderWidth: 'border-t',
          },
          vertical: {
            display: 'block',
            borderStyle: 'border',
            borderWidth: 'border-l',
            minHeight: 'min-h-[24px]',
          },
        },
      },
      color: stepConnectorClasses,
      states: {
        active: {},
        completed: {},
        disabled: {},
      },
    },
  },
};

export default stepperClasses;
