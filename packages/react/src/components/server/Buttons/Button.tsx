import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import type {
  variant,
  size,
  color,
  fullWidth,
  ripple,
  capsule,
  startIcon,
  endIcon,
  className,
  disabled,
  loading,
  elevated,
} from '../../../types/components/button';
import {
  propTypesCapsule,
  propTypesClassName,
  propTypesColor,
  propTypesDisabled,
  propTypesElevated,
  propTypesEndIcon,
  propTypesFullWidth,
  propTypesLoading,
  propTypesRipple,
  propTypesStartIcon,
  propTypesSize,
  propTypesVariant,
} from '../../../types/components/button';
import Ripple from 'material-ripple-effects';
import { useTheme } from '../../../context/theme';
import objectsToString from '../../utils/objectsToString';
import findMatch from '../../utils/findMatch';
import IconWrapper from './IconWrapper';
import Spinner from 'react-svg-spinner';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  /** If button is in disabled state */
  disabled?: disabled;
  /** Loading state */
  loading?: loading;
  startIcon?: startIcon;
  endIcon?: endIcon;
  color?: color;
  variant?: variant;
  size?: size;
  fullWidth?: fullWidth;
  capsule?: capsule;
  ripple?: ripple;
  elevated?: elevated;
  className?: className;
  iconProps?: HTMLOrSVGElement;
  iconRef?: React.RefObject<HTMLOrSVGElement>;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      disabled,
      loading,
      children,
      variant,
      color,
      size,
      startIcon,
      endIcon,
      className,
      fullWidth,
      capsule,
      elevated,
      ripple,
      iconProps,
      iconRef,
      ...rest
    },
    ref,
  ) => {
    // 1. initialize theme
    const { button } = useTheme();
    const { valid, defaultProps, styles } = button;
    const { base, variants, sizes } = styles!;

    // 2. set default props
    variant = variant ?? defaultProps?.variant;
    color = color ?? defaultProps?.color;
    size = size ?? defaultProps?.size;
    fullWidth = fullWidth ?? defaultProps?.fullWidth;
    capsule = capsule ?? defaultProps?.capsule;
    ripple = ripple ?? defaultProps?.ripple;
    className = className ?? defaultProps?.className;
    elevated = elevated ?? defaultProps?.elevated;
    startIcon = startIcon ?? defaultProps?.startIcon;
    endIcon = endIcon ?? defaultProps?.endIcon;
    // 3. set ripple instance
    const rippleEffect = ripple !== false && new Ripple();

    // 4. set styles
    const buttonBase = objectsToString(base?.initial);
    const buttonVariant = objectsToString(
      variants[findMatch(valid?.variants, variant, 'filled')][
        findMatch(valid?.colors, color, 'primary')
      ],
    );

    const buttonSize = objectsToString(
      sizes[findMatch(valid?.sizes, size, 'md')],
    );

    const classes = twMerge(
      clsx(buttonVariant, buttonBase, buttonSize, {
        [objectsToString(base?.fullWidth)]: fullWidth,
        [objectsToString(base?.capsule)]: capsule,
        [objectsToString(base?.elevated)]: elevated,
      }),
      className,
    );
    return (
      <button
        className={classes}
        ref={ref}
        type={rest.type || 'button'}
        disabled={disabled || loading}
        onMouseDown={(e) => {
          const onMouseDown = rest?.onMouseDown;

          if (ripple) {
            rippleEffect.create(e, !disabled && 'dark');
          }
          return typeof onMouseDown === 'function' && onMouseDown(e);
        }}
        {...rest}
      >
        {startIcon && !loading && (
          <IconWrapper {...iconProps} ref={iconRef} size={size}>
            {startIcon}
          </IconWrapper>
        )}
        {children}
        {endIcon && !loading && (
          <IconWrapper {...iconProps} ref={iconRef} size={size}>
            {endIcon}
          </IconWrapper>
        )}
        {loading && (
          <IconWrapper>
            <Spinner gap={1} />
          </IconWrapper>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';

Button.propTypes = {
  color: PropTypes.oneOf(propTypesColor),
  loading: propTypesLoading,
  disabled: propTypesDisabled,
  children: PropTypes.node.isRequired,
  className: propTypesClassName,
  size: PropTypes.oneOf(propTypesSize),
  capsule: propTypesCapsule,
  fullWidth: propTypesFullWidth,
  variant: PropTypes.oneOf(propTypesVariant),
  startIcon: propTypesStartIcon,
  endIcon: propTypesEndIcon,
  ripple: propTypesRipple,
  elevated: propTypesElevated,
};

export default Button;
