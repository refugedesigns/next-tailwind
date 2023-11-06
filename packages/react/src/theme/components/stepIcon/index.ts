import type {
  error,
  active,
  completed,
  icon,
  className,
  color,
} from '../../../types/components/stepIcon';
import stepIconColorsClasses from './colors';
import stepIconTextColorsClasses from './textColors';

export interface StepIconPropType {
  defaultProps?: {
    error?: error;
    active?: active;
    completed?: completed;
    icon?: icon;
    className?: className;
    color?: color;
  };
  valid?: {
    colors?: string[]
  }
  styles?: {
    base?: {
      initial?: object;
      colors?: typeof stepIconColorsClasses;
    };
    text?: {
      initial?: object;
      colors?: typeof stepIconTextColorsClasses;
    };
  };
}

const stepIconClasses: StepIconPropType = {
  defaultProps: {
    error: false,
    active: false,
    completed: false,
    icon: null,
    className: '',
    color: 'inherit',
  },
  valid: {
    colors: Object.keys(stepIconTextColorsClasses)
  },
  styles: {
    base: {
      initial: {
        display: 'block',
        transition: 'transition-colors',
        my: 'my-1'
      },
      colors: stepIconColorsClasses,
    },
    text: {
      initial: {
        fontSize: 'text-base',
        fontFamily: 'font-sans',
      },
      colors: stepIconTextColorsClasses,
    },
  },
};

export default stepIconClasses;
