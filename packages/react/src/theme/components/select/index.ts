import type {
  variant,
  size,
  color,
  label,
  error,
  success,
  arrow,
  value,
  onChange,
  selected,
  offset,
  dismiss,
  animate,
  autoHeight,
  lockScroll,
  menuProps,
  className,
  animation,
  disabled,
  labelProps,
  name,
  children,
  fullWidth,
  icon
} from '../../../types/components/select';
import {
  propTypesVariant,
  propTypesSize,
  propTypesColor,
} from '../../../types/components/select';

import selectOutlinedClasses from './outlined';

export interface SelectSizeStylesType {
  container?: object;
  select?: object;
  label?: {
    initial?: object;
    states?: {
      close?: object;
      open?: object;
      withValue?: object;
    };
  };
  icon?: object;
}

export interface SelectStatesStylesType {
  close?: {
    select?: object;
    label?: object;
  };
  open?: {
    select?: object;
    label?: object;
  };
  withValue?: {
    select?: object;
    label?: object;
  };
}

export interface SelectStateStylesType {
  select?: {
    initial?: object;
    states?: {
      close?: object;
      open?: object;
      withValue?: object;
    };
  };
  label?: {
    initial?: object;
    states?: {
      close?: object;
      open?: object;
      withValue?: object;
    };
  };
}

export interface SelectVariantStylesType {
  base?: {
    select?: object;
    label?: object;
    selectWithIcon?: object;
    icon?: object;
  };
  sizes?: {
    md?: SelectSizeStylesType;
    lg?: SelectSizeStylesType;
  };
  colors?: {
    select?: object;
    label?: object;
  };
  states?: SelectStatesStylesType;
  
}

export interface SelectStylesType {
  defaultProps?: {
    variant?: variant;
    color?: color;
    size?: size;
    label?: label;
    error?: error;
    success?: success;
    arrow?: arrow;
    value?: value;
    onChange?: onChange;
    selected?: selected;
    offset?: offset;
    dismiss?: dismiss;
    animate?: animate;
    animation?: animation;
    autoHeight?: autoHeight;
    lockScroll?: lockScroll;
    menuProps?: menuProps;
    className?: className;
    disabled?: disabled;
    labelProps?: labelProps;
    name?: name;
    children?: children;
    fullWidth?: fullWidth;
    icon?: icon;
  };
  valid?: {
    variants?: string[];
    sizes?: string[];
    colors?: string[];
  };
  styles?: {
    base?: {
      container?: object;
      select?: object;
      arrow?: {
        initial?: object;
        active?: object;
      };
      label?: object;
      menu?: object;
      option?: {
        initial?: object;
        active?: object;
        disabled?: object;
      };
    };
    variants?: {
      standard?: SelectVariantStylesType;
      filled?: SelectVariantStylesType;
      outlined?: SelectVariantStylesType;
      default?: SelectVariantStylesType;
    };
    fullWidth?: {
      container?: object;
      label?: object;
      select?: object;
    };
  };
}

export const selectClasses: SelectStylesType = {
  defaultProps: {
    variant: 'outlined',
    color: 'primary',
    size: 'md',
    label: '',
    error: false,
    success: false,
    arrow: undefined,
    value: undefined,
    onChange: undefined,
    selected: undefined,
    offset: 5,
    dismiss: {},
    animate: true,
    animation: {
      unmount: {},
      mount: {},
    },
    autoHeight: false,
    lockScroll: false,
    menuProps: {},
    labelProps: {},
    className: '',
    disabled: false,
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
        maxWidth: 'max-w-[300px]',
      },
      select: {
        peer: 'peer',
        width: 'w-full',
        height: 'h-full',
        bg: 'bg-transparent',
        color: 'text-blue-gray-600',
        fontFamily: 'font-sans',
        fontWeight: 'font-normal',
        textAlign: 'text-left',
        outline: 'outline outline-0 focus:outline-0',
        disabled: 'disabled:bg-blue-gray-50 disabled:border-0',
        transition: 'transition-all',
      },
      arrow: {
        initial: {
          display: 'grid',
          placeItems: 'place-items-center',
          position: 'absolute',
          top: 'top-1/2',
          right: 'right-2',
          pt: 'pt-px',
          width: 'w-6',
          height: 'h-6',
          color: 'text-blue-gray-400',
          transform: 'rotate-0 -translate-y-1/2',
          transition: 'transition-all',
        },
        active: {
          transform: 'rotate-180',
          mt: 'mt-px',
        },
      },
      label: {
        display: 'flex',
        userSelect: 'select-none',
        pointerEvents: 'pointer-events-none',
        position: 'absolute',
        left: 'left-0',
        fontWeight: 'font-normal',
        transition: 'transition-all',
      },
      menu: {
        width: 'w-full',
        maxHeight: 'max-h-96',
        bg: 'bg-white',
        borderRadius: 'rounded-md',
        border: 'border',
        fontFamily: 'font-sans',
        fontWeight: 'font-normal',
        fontSize: 'text-sm',
        overflow: 'overflow-auto',
        outline: 'focus:outline-none',
        color: 'text-blue-gray-500',
      },
      option: {
        initial: {
          pt: 'pt-[9px]',
          px: 'px-3',
          borderRadius: 'rounded-md',
          lineHeight: 'leading-tight',
          cursor: 'cursor-pointer',
          userSelect: 'select-none',
          background: 'hover:bg-blue-gray-50 focus:bg-blue-gray-50',
          opacity: 'hover:bg-opacity-80 focus:bg-opacity-80',
          color: 'hover:text-blue-gray-900 focus:text-blue-gray-900',
          outline: 'outline outline-0',
          transition: 'transition-all',
          display: 'flex',
          alignItems: 'items-center',
        },
        active: {
          bg: 'bg-blue-gray-50 bg-opacity-80',
          color: 'text-blue-gray-900',
        },
        disabled: {
          opacity: 'opacity-50',
          cursor: 'cursor-not-allowed',
          userSelect: 'select-none',
          pointerEvents: 'pointer-events-none',
        },
      },
    },
    variants: {
      outlined: selectOutlinedClasses,
    },
    fullWidth: {
      container: {
        width: '!w-full',
        maxWidth: '!max-w-full',
      },
      select: {
        width: '!w-full',
      },
      label: {
        lineHeight: 'leading-wide focus:leading-wide',
      },
    },
  },
};

export default selectClasses;
