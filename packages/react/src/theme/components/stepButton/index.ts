import type {
  color,
  children,
  icon,
  optional,
  className,
} from '../../../types/components/stepButton';
import stepButtonColorsClasses from './colors';

export interface StepButtonPropTypes {
  defaultProps?: {
    color?: color;
    icon?: icon;
    className?: className;
    optional?: optional;
    children?: children;
  };
  valid?: {
    colors?: string[];
  };
  styles?: {
    base?: {
      initial?: object;
    };
    colors?: typeof stepButtonColorsClasses;
  };
}

const stepButtonClasses: StepButtonPropTypes = {
  defaultProps: {
    color: 'primary',
    icon: null,
    className: '',
    optional: null,
    children: null,
  },
  valid: {
    colors: Object.keys(stepButtonColorsClasses),
  },
  styles: {
    base: {
      initial: {
        width: 'w-full',
        padding: 'px-[24px] py-[16px]',
        margin: 'px-[-24px] py-[-16px]',
        boxSizing: 'box-content',
        display: 'inline-flex',
        alignItems: 'items-center',
        justifyContent: 'justify-center',
        position: 'relative',
        backgroundColor: 'bg-transparent',
        outline: 'outline-0',
        cursor: 'cursor-pointer',
        border: 'border-none',
        borderRadius: 'rounded-none',
        userSelect: 'select-none',
        verticalAlign: 'align-middle',
        color: 'text-inherit',
        pointerEvents: 'pointer-events-none',
        disabled: 'disabled:pointer-events-none disabled:cursor-default',
        hover: 'hover:cursor-pointer',
      },
    },
    colors: stepButtonColorsClasses,
  },
};

export default stepButtonClasses;
