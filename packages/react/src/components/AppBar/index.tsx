import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import findMatch from '../utils/findMatch';
import objectsToString from '../utils/objectsToString';

import { useTheme } from '../../context/theme';

import type {
  variant,
  color,
  shadow,
  blurred,
  fullWidth,
  className,
  children,
  position,
} from '../../types/components/appBar';
import {
  propTypesVariant,
  propTypesColor,
  propTypesClassName,
  propTypesChildren,
  propTypesFullWidth,
  propTypesBlurred,
  propTypesShadow,
  propTypesPosition,
} from '../../types/components/appBar';

import { MobileNavProps, MobileNav } from './MobileNav';

export interface AppBarProps extends React.ComponentProps<'div'> {
  variant?: variant;
  color?: color;
  shadow?: shadow;
  blurred?: blurred;
  fullWidth?: fullWidth;
  className?: className;
  children?: children;
  position?: position;
}

export const AppBar = React.forwardRef<HTMLDivElement, AppBarProps>(
  (
    {
      variant,
      color,
      shadow,
      blurred,
      fullWidth,
      className,
      children,
      position,
      ...rest
    },
    ref,
  ) => {
    //1. init
    const { appBar } = useTheme();
    const { styles, valid, defaultProps } = appBar;
    const { base, variants, position: positionStyles } = styles;

    //2. defaultProps
    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    shadow = shadow ?? defaultProps.shadow;
    blurred = blurred ?? defaultProps.blurred;
    fullWidth = fullWidth ?? defaultProps.fullWidth;
    className = className ?? defaultProps.className;
    position = position ?? defaultProps.position;

    //3. classes
    const appBarRoot = clsx(objectsToString(base.appBar.initial), {
      [objectsToString(base.appBar.shadow)]: shadow,
      [objectsToString(base.appBar.blurred)]: blurred && color === 'white',
      [objectsToString(base.appBar.fullWidth)]: fullWidth,
    });

    const appBarVariant = clsx(
      objectsToString(
        variants[findMatch(valid.variants, variant, 'filled')][
          findMatch(valid.colors, color, 'primary')
        ],
      ),
    );
    const appBarPosition = clsx(
      objectsToString(
        positionStyles[findMatch(valid.positions, position, 'fixed')],
      ),
    );
    const appBarClasses = twMerge(
      clsx(
        appBarRoot,
        appBarVariant,
        appBarPosition,
        variant === 'outlined' && fullWidth && 'border-r-0 border-l-0',
      ),
      className,
    );
    return (
      <nav {...rest} ref={ref} className={appBarClasses}>
        {children}
      </nav>
    );
  },
);

AppBar.displayName = 'AppBar';

AppBar.propTypes = {
  variant: PropTypes.oneOf(propTypesVariant),
  color: PropTypes.oneOf(propTypesColor),
  shadow: propTypesShadow,
  blurred: propTypesBlurred,
  fullWidth: propTypesFullWidth,
  className: propTypesClassName,
  children: propTypesChildren,
  position: propTypesPosition,
};

export type { MobileNavProps };

export default Object.assign(AppBar, { MobileNav });
