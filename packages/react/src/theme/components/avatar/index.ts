import type {
  src,
  color,
  variant,
  size,
  withBorder,
  className,
  containerProps,
  children,
  borderColor,
} from '../../../types/components/avatar';
import borderColors from './borderColors';
import colors from './colors';

import {
  propTypesColor,
  propTypesSize,
  propTypesVariant,
  propTypesBorderColor,
} from '../../../types/components/avatar';

export interface AvatarStyleTypes {
  defaultProps?: {
    src?: src;
    color?: color;
    variant?: variant;
    size?: size;
    withBorder?: withBorder;
    borderColor?: borderColor;
    className?: className;
    containerProps?: containerProps;
    children?: children;
  };
  valid?: {
    borderColors?: string[];
    sizes?: string[];
    variants?: string[];
    color?: string[];
  };
  styles?: {
    base?: object;
    borderColors?: typeof borderColors;
    colors?: typeof colors;
    sizes?: {
      xs?: object;
      sm?: object;
      md?: object;
      lg?: object;
      xl?: object;
      xxl?: object;
    };
    variants?: {
      circular?: object;
      rounded?: object;
      square?: object;
    };
    withBorder?: object;
  };
}

const avatarClasses: AvatarStyleTypes = {
  defaultProps: {
    src: '',
    color: 'primary',
    variant: 'circular',
    size: 'md',
    withBorder: false,
    borderColor: 'primary',
    className: '',
    containerProps: {},
    children: null,
  },
  valid: {
    borderColors: propTypesBorderColor,
    color: propTypesColor,
    sizes: propTypesSize,
    variants: propTypesVariant,
  },
  styles: {
    base: {
      mx: 'mx-auto',
      position: 'relative',
      overflow: 'overflow-hidden',
    },
    borderColors: borderColors,
    colors: colors,
    sizes: {
      xs: {
        width: 'w-6',
        height: 'h-6',
      },
      sm: {
        width: 'w-8',
        height: 'h-8',
      },
      md: {
        width: 'w-10',
        height: 'h-10',
      },
      lg: {
        width: 'w-12',
        height: 'h-12',
      },
      xl: {
        width: 'w-16',
        height: 'h-16',
      },
      xxl: {
        width: 'w-24',
        height: 'h-24',
      },
    },
    variants: {
      circular: {
        borderRadius: 'rounded-full',
      },
      rounded: {
        borderRadius: 'rounded-md',
      },
      square: {
        borderRadius: 'rounded-none',
      },
    },
  },
};

export default avatarClasses;
