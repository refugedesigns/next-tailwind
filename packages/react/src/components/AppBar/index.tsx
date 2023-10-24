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
} from '../../types/components/appBar';
import {
  propTypesVariant,
  propTypesColor,
  propTypesClassName,
  propTypesChildren,
  propTypesFullWidth,
  propTypesBlurred,
  propTypesShadow,
} from '../../types/components/appBar';

export interface AppBarProps extends React.ComponentProps<'div'> {
  variant?: variant;
  color?: color;
  shadow?: shadow;
  blurred?: blurred;
  fullWidth?: fullWidth;
  className?: className;
  children?: children;
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
      ...rest
    },
    ref,
  ) => {
    //1. init
    const { appBar } = useTheme();
    const { styles, valid, defaultProps } = appBar;
    const { base, variants } = styles;

    //2. defaultProps
    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    shadow = shadow ?? defaultProps.shadow;
    blurred = blurred ?? defaultProps.blurred;
    fullWidth = fullWidth ?? defaultProps.fullWidth;
    className = className ?? defaultProps.className;

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

    const appBarClasses = twMerge(
      clsx(
        appBarRoot,
        appBarVariant,
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

export default AppBar;
