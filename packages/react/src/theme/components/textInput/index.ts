import type {
  variant,
  size,
  color,
  label,
  error,
  errorMessage,
  success,
  icon,
  labelProps,
  shrink,
  className,
  fullWidth,
} from '../../../types/components/textInput';

import {
  propTypesVariant,
  propTypesSize,
  propTypesColor,
} from '../../../types/components/textInput';
import inputOutlinedClasses from './outlined';
import inputFilledClasses from './filled';
import inputStandardClasses from './standard';
import inputDefaultClasses from './default';

export interface InputSizeStyleType {
  container?: object;
  input?: object;
  label?: object;
  icon?: object;
}

export interface InputStateStylesType {
  input?: object;
  label?: object;
}

export interface InputVariantStylesType {
  base?: {
    input?: object;
    inputWithIcon?: object;
    icon?: object;
    label?: object;
  };
  sizes?: {
    md?: InputSizeStyleType;
    lg?: InputSizeStyleType;
  };
  colors?: {
    input?: object;
    label?: object;
  };
  errorMessage?: object;
  error?: InputStateStylesType;
  success?: InputStateStylesType;
  shrink?: InputStateStylesType;
}

export interface InputStylesType {
  defaultProps?: {
    variant?: variant;
    size?: size;
    color?: color;
    fullWidth?: fullWidth;
    label?: label;
    icon?: icon;
    className?: className;
    error?: error;
    errorMessage?: errorMessage;
    success?: success;
    labelProps?: labelProps;
    shrink?: shrink;
  };
  valid?: {
    variants?: string[];
    colors?: string[];
    sizes?: string[];
  };
  styles?: {
    base?: {
      container?: object;
      input?: object;
      label?: object;
      icon?: object;
      asterisk?: object;
    };
    fullWidth?: {
      container?: object;
      label?: object;
      input?: object;
    };
    variants?: {
      outlined?: InputVariantStylesType;
      standard?: InputVariantStylesType;
      static?: InputVariantStylesType;
      default?: InputVariantStylesType;
      filled?: InputVariantStylesType;
    };
  };
}

const inputClasses: InputStylesType = {
  defaultProps: {
    variant: 'outlined',
    size: 'md',
    color: 'primary',
    fullWidth: false,
    label: 'Password',
    icon: '',
    className: '',
    error: false,
    errorMessage: '',
    success: false,
    labelProps: undefined,
    shrink: false,
  },
  valid: {
    variants: propTypesVariant,
    sizes: propTypesSize,
    colors: propTypesColor,
  },
  styles: {
    base: {
      container: {
        position: 'relative',
        minWidth: 'max-w-[400px]',
        bg: 'bg-inherit',
        display: 'block',
        boxSizing: 'box-border',
        userSelect: 'select-none',
      },
      input: {
        peer: 'peer',
        width: 'w-full',
        color: 'text-blue-gray-700',
        focus: 'focus:outline-none',
        appearance: 'appearance-none',
        placeholder: 'placeholder-transparent',
        userSelect: 'select-none',
      },
      label: {
        userSelect: 'select-none',
        pointerEvents: 'pointer-events-none',
        position: 'absolute',
        left: 'left-0',
      },
      icon: {
        display: 'grid',
        placeItems: 'place-items-center',
        position: 'absolute',
        color: 'text-blue-gray-500',
      },
      asterisk: {
        display: 'inline-block',
        color: 'text-red-500',
        ml: 'ml-0.5',
      },
    },
    variants: {
      outlined: inputOutlinedClasses,
      filled: inputFilledClasses,
      standard: inputStandardClasses,
      default: inputDefaultClasses,
    },
    fullWidth: {
      container: {
        width: '!w-full',
        maxWidth: '!max-w-full',
      },
      input: {
        width: '!w-full',
      },
      label: {
        lineHeight: 'leading-wide focus:leading-wide',
      },
    },
  },
};

export default inputClasses;
