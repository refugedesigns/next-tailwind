import React from 'react';
import PropTypes from 'prop-types';
import Image, { ImageProps } from 'next/image';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { useTheme } from '../../context/theme';
import findMatch from '../utils/findMatch';
import objectsToString from '../utils/objectsToString';
import type {
  src,
  color,
  variant,
  size,
  withBorder,
  active,
  activePlacement,
  containerProps,
  className,
} from '../../types/components/avatar';
import {
  propTypesSrc,
  propTypesColor,
  propTypesVariant,
  propTypesSize,
  propTypesWithBorder,
  propTypesActive,
  propTypesActivePlacement,
  propTypesContainerProps,
  propTypesClassName,
} from '../../types/components/avatar';

export interface AvatarProps {
  src?: src;
  color?: color;
  variant?: variant;
  size?: size;
  withBorder?: withBorder;
  active?: active;
  activePlacement?: activePlacement;
  containerProps?: containerProps;
  className?: className;
}

const Avatar = React.forwardRef<HTMLImageElement, AvatarProps & ImageProps>(
  (
    {
      src,
      color,
      variant,
      size,
      withBorder,
      active,
      activePlacement,
      containerProps,
      className,
      ...rest
    },
    ref,
  ) => {
    //1. init
    const { avatar } = useTheme();
    const { defaultProps, valid, styles } = avatar;

    //2. set default props
    src ??= defaultProps?.src;
    color ??= defaultProps?.color;
    variant ??= defaultProps?.variant;
    size ??= defaultProps?.size;
    withBorder ??= defaultProps?.withBorder;
    className ??= defaultProps?.className;
    active ??= defaultProps?.active;
    activePlacement ??= defaultProps?.activePlacement;
    containerProps ??= defaultProps?.containerProps;

    //3. set styles
    const validColor = findMatch(valid.colors, color, 'primary');
    const validVariant = findMatch(valid.variants, variant, 'circular');
    const validSize = findMatch(valid.sizes, size, 'md');

    const rootClasses = objectsToString(styles.base);
    const variantClasses = objectsToString(styles.variants[validVariant]);
    const sizeClasses = objectsToString(styles.sizes[validSize]);

    const colorClasses = objectsToString(styles.colors[validColor]);
    const activeClass = objectsToString(styles.active);
    const activePlacementClasses = objectsToString(
      styles.activePlacement[
        findMatch(valid.placements, activePlacement, 'bottom-left')
      ],
    );

    const classes = twMerge(
      clsx(
        rootClasses,
        variantClasses,
        sizeClasses,
        withBorder && colorClasses,
      ),
      className,
      containerProps.className,
    );

    const activeClasses = twMerge(clsx(activeClass, activePlacementClasses));

    return (
      <div {...containerProps} className={classes}>
        {active && <div className={activeClasses} />}
        <Image
          {...rest}
          ref={ref}
          alt={rest.alt || 'Avatar'}
          src={src}
          height="0"
          width="0"
          sizes="100vw"
          className="w-full h-auto object-contain mx-auto"
        />
      </div>
    );
  },
);

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  src: propTypesSrc,
  color: PropTypes.oneOf(propTypesColor),
  variant: PropTypes.oneOf(propTypesVariant),
  size: PropTypes.oneOf(propTypesSize),
  withBorder: propTypesWithBorder,
  active: propTypesActive,
  activePlacement: PropTypes.oneOf(propTypesActivePlacement),
  containerProps: propTypesContainerProps,
  className: propTypesClassName,
};

export default Avatar;
