import type {
  position,
  activeStep,
  backButton,
  nextButton,
  linearProgressProps,
  steps,
  variant,
  className,
} from '../../../types/components/mobileStepper';
import {
  propTypesPosition,
  propTypesVariant,
} from '../../../types/components/mobileStepper';

export interface MobileStepperTypes {
  defaultProps?: {
    position?: position;
    activeStep?: activeStep;
    backButton?: backButton;
    nextButton?: nextButton;
    linearProgressProps?: linearProgressProps;
    steps?: steps;
    variant?: variant;
    className?: className;
  };
  valid?: {
    position?: string[];
    variant?: string[];
  };
  styles?: {
    base?: object;
    position?: {
      bottom?: object;
      top?: object;
      static?: object;
    };
    dotsContainer?: object;
    dots?: object;
    activeDot?: object;
    progress?: object;
  };
}

const mobileStepperClasses: MobileStepperTypes = {
  defaultProps: {
    position: 'bottom',
    activeStep: 0,
    variant: 'dots',
    className: '',
    nextButton: null,
    backButton: null,
    linearProgressProps: {},
    steps: 0,
  },
  valid: {
    position: propTypesPosition,
    variant: propTypesVariant,
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'justify-between',
      alignItems: 'items-center',
      bg: 'bg-blue-gray-200 dark:bg-blue-gray-600',
      py: 'py-4',
      h: 'h-10',
      w: 'w-1/3',
      userSelect: 'select-none',
      fontColor: 'text-white',
    },
    position: {
      bottom: {
        position: 'fixed',
        bottom: 'bottom-0',
        left: 'left-0',
        right: 'right-0',
        zIndex: 'z-40',
      },
      top: {
        position: 'fixed',
        top: 'top-0',
        left: 'left-0',
        right: 'right-0',
        zIndex: 'z-40',
      },
      static: {},
    },
    dotsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'justify-center',
      alignItems: 'items-center',
      spaceX: 'space-x-2',
    },
    dots: {
      transition: 'transition-colors',
      transitionDuration: 'duration-300',
      bg: 'bg-blue-gray-900',
      rounded: 'rounded-full',
      h: 'h-1.5',
      w: 'w-1.5',
    },
    activeDot: {
      bg: 'bg-white dark:bg-white',
      w: 'w-2',
    },
    progress: {
      width: 'w-1/4',
      h: 'h-[3px]',
      bg: 'bg-blue-gray-800',
    },
  },
};

export default mobileStepperClasses;
