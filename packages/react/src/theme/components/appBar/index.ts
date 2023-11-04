import type {
  variant,
  color,
  shadow,
  blurred,
  fullWidth,
  className,
  position,
} from '../../../types/components/appBar';
import {
  propTypesVariant,
  propTypesColor,
  propTypesPosition,
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
    position?: position;
  };
  valid?: {
    variants?: string[];
    colors?: string[];
    positions?: string[];
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
    position?: {
      fixed?: object;
      absolute?: object;
      sticky?: object;
      static?: object;
      relative?: object;
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
    position: 'sticky',
  },
  valid: {
    variants: propTypesVariant,
    colors: propTypesColor,
    positions: propTypesPosition,
  },
  styles: {
    base: {
      appBar: {
        initial: {
          display: 'block',
          width: 'w-full',
          maxWidth: 'max-w-screen-2xl',
          borderRadius: 'rounded-3xl',
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
        display: 'flex lg:hidden',
        flexDirection: 'column',
        width: 'w-full',
        basis: 'basis-full',
        overflow: 'overflow-hidden',
        py: 'border-l-0 border-r-0',
      },
    },
    variants: {
      filled: appBarFilledClasses,
      outlined: appBarOutlinedClasses,
      gradient: appBarGradientClasses,
    },
    position: {
      fixed: {
        position: 'fixed',
        zIndex: 'z-[99]',
        top: 'top-0',
        transform: 'translate-x-1/2',
        right: 'right-1/2',
        media: 'print:absolute',
      },
      absolute: {
        position: 'absolute',
        zIndex: 'z-[99]',
        top: 'top-0',
        transform: 'translate-x-1/2',
        right: 'right-1/2',
      },
      sticky: {
        position: 'sticky',
        zIndex: 'z-[99]',
        top: 'top-0',
        width: 'mx-auto',
      },
      static: {
        position: 'static',
        zIndex: 'z-[99]',
        width: 'mx-auto',
      },
      relative: {
        position: 'relative',
        zIndex: 'z-[99]',
        width: 'mx-auto',
      },
    },
  },
};
export default appBarClasses;
