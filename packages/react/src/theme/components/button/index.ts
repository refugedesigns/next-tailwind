import buttonFilled from './buttonFilled';
import buttonOutlined from './buttonOutlined';
import buttonText from './buttonText';

import type {
  variant,
  size,
  color,
  fullWidth,
  ripple,
  capsule,
  startIcon,
  endIcon,
  className,
  elevated,
  disabled,
  loading,
} from '../../../types/components/button';

export interface ButtonStyleTypes {
  defaultProps?: {
    variant?: variant;
    size?: size;
    color?: color;
    fullWidth?: fullWidth;
    ripple?: ripple;
    capsule?: capsule;
    startIcon?: startIcon;
    endIcon?: endIcon;
    className?: className;
    elevated?: elevated;
    disabled?: disabled;
    loading?: loading;
  };
  valid?: {
    variants?: string[];
    sizes?: string[];
    colors?: string[];
  };
  styles?: {
    base?: {
      initial?: object;
      fullWidth?: object;
      capsule?: object;
      elevated?: object;
    };
    sizes?: {
      sm?: object;
      md?: object;
      lg?: object;
    };
    variants?: {
      filled?: typeof buttonFilled;
      outlined?: typeof buttonOutlined;
      text?: typeof buttonText;
    };
  };
}

export const button: ButtonStyleTypes = {
  defaultProps: {
    variant: 'filled',
    size: 'md',
    color: 'primary',
    fullWidth: false,
    ripple: true,
    capsule: false,
    startIcon: null,
    endIcon: null,
    className: '',
    elevated: false,
    disabled: false,
    loading: false,
  },
  valid: {
    variants: ['filled', 'outlined', 'text'],
    sizes: ['sm', 'md', 'lg'],
    colors: ['primary', 'secondary', 'minimal', 'error'],
  },
  styles: {
    base: {
      initial: {
        verticalAlign: 'align-middle',
        userSelect: 'select-none',
        cursor: 'cursor-pointer',
        transition: 'transition-all',
        textAlign: 'text-center',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        borderRadius: 'rounded-lg',
        fontFamily: 'font-sans',
        disabled: 'disabled:shadow-none disabled:cursor-events-none',
        display: 'flex',
        alignItems: 'items-center',
      },
      fullWidth: {
        width: 'w-full',
        display: 'block',
      },
      capsule: {
        borderRadius: 'rounded-full',
      },
      elevated: {
        boxShadow: 'shadow-md',
      },
    },
    sizes: {
      sm: {
        fontSize: 'text-xs',
        py: 'py-2',
        px: 'px-3',
        borderRadius: 'rounded-md',
      },
      md: {
        fontSize: 'text-xs',
        py: 'py-3',
        px: 'px-6',
        borderRadius: 'rounded-md',
      },
      lg: {
        fontSize: 'text-sm',
        py: 'py-3.5',
        px: 'px-7',
      },
    },
    variants: {
      filled: buttonFilled,
      outlined: buttonOutlined,
      text: buttonText,
    },
  },
};

export default button;
