import type {
  error,
  active,
  completed,
  icon,
  className,
  color,
} from '../../../types/components/stepIcon';
import stepIconColorsClasses from './colors';

export interface StepIconPropType {
  defaultProps?: {
    error?: error;
    active?: active;
    completed?: completed;
    icon?: icon;
    className?: className;
    color?: color;
  };
  styles?: {
    base?: {
      initial?: object;
      colors?: typeof stepIconColorsClasses;
    };
    text?: object;
  };
}

const stepIconClasses: StepIconPropType = {
  defaultProps: {
    error: false,
    active: false,
    completed: false,
    icon: null,
    className: '',
    color: 'primary',
  },
  styles: {
    base: {
      initial: {
        display: 'block',
        transition: 'transition-colors',
      },
      colors: stepIconColorsClasses,
    },
    text: {
      fill: 'contrast-125',
      fontSize: 'text-base',
      fontFamily: 'font-sans',
    },
  },
};

export default stepIconClasses;
