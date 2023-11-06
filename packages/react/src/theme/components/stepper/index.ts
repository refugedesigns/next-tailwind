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
  stepIconComponent,
} from '../../../types/components/stepLabel';

import stepIconClasses from '../stepIcon';
import stepContentClasses from '../stepContent';
import stepButtonClasses from '../stepButton';

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
    optional?: optional;
    stepIconComponent?: stepIconComponent;
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
      iconContainer?: object;
      label?: {
        initial?: object;
        states?: {
          active?: object;
          completed?: object;
          disabled?: object;
          error?: object;
        };
      };
      labelContainer?: object;
      error?: object;
      states?: {
        active?: object;
        completed?: object;
        disabled?: object;
      };
    };
    stepIcon?: typeof stepIconClasses;
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
    stepButton?: typeof stepButtonClasses;
    stepContent?: typeof stepContentClasses;
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
    optional: null,
    stepIconComponent: null,
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
          px: 'px-3',
        },
        vertical: {
          flex: 'flex-1',
          position: 'relative',
          pb: '',
        },
      },
    },
    stepConnector: {
      base: {
        flex: 'flex-auto',
        userSelect: 'select-none',
      },
      connector: {
        orientation: {
          horizontal: {
            display: 'block',
            borderWidth: 'border-t',
          },
          vertical: {
            display: 'block',
            borderWidth: 'border-l',
            minHeight: 'min-h-[24px]',
            marginLeft: 'ml-[2.7rem]',
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
    stepLabel: {
      base: {
        display: 'flex',
        alignItems: 'items-center',
      },
      iconContainer: {
        display: 'flex',
        flexShrink: 'flex-shrink-0',
        paddingRight: 'pr-2',
      },
      label: {
        initial: {
          lineHeight: 'leading-3',
          display: 'block',
          transition: 'transition-all ease-in-out duration-200',
          fontSize: 'text-base',
          fontWeight: 'font-bold',
          color: 'text-blue-gray-500 dark:text-blue-gray-100',
          userSelect: 'select-none',
        },
        states: {
          active: {
            color: 'text-blue-gray-800 dark:text-blue-gray-50',
            transition: 'transition-all ease-in-out duration-200',
          },
          completed: {
            color: 'text-blue-gray-300 dark:text-blue-gray-300',
            transition: 'transition-all ease-in-out duration-200',
          },
          disabled: {
            color: 'text-blue-gray-100 dark:text-blue-gray-200',
            transition: 'transition-all ease-in-out duration-200',
          },
          error: {
            color: 'text-red-400 dark:text-red-200',
            transition: 'transition-all ease-in-out duration-200',
          },
        },
      },
      labelContainer: {
        width: 'w-full',
        color: 'text-blue-gray-500',
      },
      states: {
        active: {},
        completed: {},
        disabled: {},
      },
    },
    stepIcon: stepIconClasses,
    stepContent: stepContentClasses,
    stepButton: stepButtonClasses,
  },
};

export default stepperClasses;
