import type {
  variant,
  color,
  shadow,
  blurred,
  fullWidth,
  className,
} from '../../../types/components/appBar';
import {
  propTypesVariant,
  propTypesColor,
} from '../../../types/components/appBar';
import appBarFilledClasses from './appBarFilled';
import appBarGradientClasses from './appBarGradient';
import appBarOutlinedClasses from './appBarOutlined';

export interface AppBarProps {
  defaultProps?: {
    variant?: variant;
    color?: color;
    shadow?: shadow;
    blurred?: blurred;
    fullWidth?: fullWidth;
    className?: className;
  };
  valid?: {
    variants?: string[];
    colors?: string[];
  };
  styles?: {
    base?: {
      appBar?: {
        initial?: object;
        shadow?: object;
        blurred?: object;
        fullWidth?: object;
      };
      mobileAppBar?: object;
    };
    variants?: {
      filled?: typeof appBarFilledClasses;
      outlined?: typeof appBarOutlinedClasses;
      gradient?: typeof appBarGradientClasses;
    };
  };
}

export const appBarClasses: AppBarProps = {
  defaultProps: {
    variant: 'filled',
    color: 'white',
    shadow: true,
    blurred: true,
    fullWidth: false,
    className: '',
  },
  valid: {
    variants: propTypesVariant,
    colors: propTypesColor,
  },
  styles: {
    base: {
      appBar: {
        initial: {
          display: 'block',
          width: 'w-full',
          maxWidth: 'max-w-screen-2xl',
          borderRadius: 'rounded-xl',
          py: 'py-4',
          px: 'px-8',
        },
        shadow: {
          boxShadow: 'shadow-md',
        },
        blurred: {
          backdropFilter: 'backdrop-saturate-200 backdrop-blur-2xl',
          bgOpacity: 'bg-opacity-80',
        },
        fullWidth: {
          width: 'w-full',
          maxWidth: 'max-w-full',
          rounded: 'rounded-none',
          px: 'px-4',
        },
      },
      mobileAppBar: {
        display: 'block md:hidden',
        width: 'w-full',
        basis: 'basis-full',
        overflow: 'overflow-hidden',
      },
    },
    variants: {
      filled: appBarFilledClasses,
      outlined: appBarOutlinedClasses,
      gradient: appBarGradientClasses,
    },
  },
};
export default appBarClasses;
