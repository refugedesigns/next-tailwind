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
} from '../../../types/components/select';
import {
  propTypesVariant,
  propTypesSize,
  propTypesColor,
} from '../../../types/components/select';

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
  };
}

export const selectClasses: SelectStylesType = {
  defaultProps: {
    variant: 'standard',
    color: 'primary',
    size: 'md',
    label: '',
    error: false,
    success: false,
    arrow: '',
    value: '',
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
};

export default selectClasses;
