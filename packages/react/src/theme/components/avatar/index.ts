import type {
  src,
  color,
  variant,
  size,
  withBorder,
  active,
  activePlacement,
  className,
  containerProps,
} from '../../../types/components/avatar';
import colors from './colors';

import {
  propTypesColor,
  propTypesActivePlacement,
  propTypesSize,
  propTypesVariant,
} from '../../../types/components/avatar';

export interface AvatarStyleTypes {
  defaultProps?: {
    src?: src;
    color?: color;
    variant?: variant;
    size?: size;
    withBorder?: withBorder;
    active?: active;
    activePlacement?: activePlacement;
    className?: className;
    containerProps?: containerProps;
  };
  valid?: {
    colors?: string[];
    sizes?: string[];
    variants?: string[];
    placements?: string[];
  };
  styles?: {
    base?: object;
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
    active?: object;
    activePlacement?: object;
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
    active: false,
    activePlacement: 'bottom-right',
    className: '',
    containerProps: {},
  },
  valid: {
    colors: propTypesColor,
    sizes: propTypesSize,
    variants: propTypesVariant,
    placements: propTypesActivePlacement,
  },
  styles: {
    base: {
      mx: 'mx-auto',
      position: 'relative',
      overflow: 'overflow-hidden',
    },
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
    active: {
      position: 'absolute',
      width: 'w-2',
      height: 'h-2',
      borderRadius: 'rounded-full',
      bg: 'bg-green-500',
    },
    activePlacement: {
      'bottom-right': {
        bottom: 'bottom-0',
        right: 'right-0',
      },
      'bottom-left': {
        bottom: 'bottom-0',
        left: 'left-0',
      },
      'top-right': {
        top: 'top-0',
        right: 'right-0',
      },
      'top-left': {
        top: 'top-0',
        left: 'left-0',
      },
    },
  },
};

export default avatarClasses;
