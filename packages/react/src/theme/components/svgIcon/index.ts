import type {
  viewBox,
  size,
  color,
  children,
  className,
  htmlColor,
  titleAccess,
  inheritViewbox,
  shapeRendering,
} from '../../../types/components/svgIcon';
import {
  propTypesColor,
  propTypesSize,
} from '../../../types/components/svgIcon';
import SvgColorsClasses from './colors';

export interface SvgIconType {
  defaultProps?: {
    viewBox?: viewBox;
    size?: size;
    color?: color;
    children?: children;
    className?: className;
    htmlColor?: htmlColor;
    titleAccess?: titleAccess;
    inheritViewbox?: inheritViewbox;
    shapeRendering?: shapeRendering;
  };
  valid?: {
    colors?: string[];
    sizes?: string[];
  };
  styles?: {
    base?: {
      initial: object;
    };
    sizes?: {
      inherit?: object;
      sm?: object;
      md?: object;
      lg?: object;
    };
    color?: typeof SvgColorsClasses;
  };
}

const SvgIconClasses: SvgIconType = {
  defaultProps: {
    viewBox: '0 0 24 24',
    size: 'inherit',
    color: 'inherit',
    children: null,
    className: null,
    htmlColor: null,
    titleAccess: null,
    inheritViewbox: false,
    shapeRendering: 'inherit',
  },
  valid: {
    colors: propTypesColor,
    sizes: propTypesSize,
  },
  styles: {
    base: {
      initial: {
        display: 'inline-block',
        verticalAlign: 'items-center',
        useSelect: 'select-none',
        width: 'w-4',
        height: 'h-4',
        flexShrink: 'flex-shrink-0',
        transition: 'transition-colors',
      },
    },
    sizes: {
      inherit: {
        fontSize: 'text-base',
      },
      sm: {
        fontSize: 'text-xl',
      },
      md: {
        fontSize: 'text-2xl',
      },
      lg: {
        fontSize: 'text-4xl',
      },
    },
    color: SvgColorsClasses,
  },
};

export default SvgIconClasses;
