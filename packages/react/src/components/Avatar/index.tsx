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
  containerProps,
  className,
  children,
} from '../../types/components/avatar';
import {
  propTypesSrc,
  propTypesColor,
  propTypesVariant,
  propTypesSize,
  propTypesWithBorder,
  propTypesContainerProps,
  propTypesClassName,
  propTypesChildren,
} from '../../types/components/avatar';

export interface AvatarProps {
  src?: src;
  color?: color;
  variant?: variant;
  size?: size;
  withBorder?: withBorder;
  containerProps?: containerProps;
  className?: className;
  children?: children;
}

export const Avatar = React.forwardRef<
  HTMLImageElement,
  AvatarProps & ImageProps
>(
  (
    {
      src,
      color,
      variant,
      size,
      withBorder,
      containerProps,
      className,
      children: childrenProp,
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
    childrenProp ??= defaultProps?.children;
    containerProps ??= defaultProps?.containerProps;

    //3. set styles
    const validBorderColor = findMatch(valid.borderColors, color, 'primary');
    const validVariant = findMatch(valid.variants, variant, 'circular');
    const validSize = findMatch(valid.sizes, size, 'md');
    const validBgColor = findMatch(valid.color, color, 'primary');
    const rootClasses = objectsToString(styles.base);
    const variantClasses = objectsToString(styles.variants[validVariant]);
    const sizeClasses = objectsToString(styles.sizes[validSize]);

    const borderColorClasses = objectsToString(
      styles.borderColors[validBorderColor],
    );
    const bgColorClasses = objectsToString(styles.colors[validBgColor]);
    const classes = twMerge(
      clsx(
        rootClasses,
        variantClasses,
        sizeClasses,
        withBorder && borderColorClasses,
        childrenProp && bgColorClasses,
        'flex items-center justify-center',
      ),
      className,
      containerProps.className,
    );

    const hasImg = src && typeof src === 'string';
    let children;
    if (
      childrenProp !== null ||
      (childrenProp !== undefined && React.isValidElement(childrenProp))
    ) {
      children = childrenProp;
    } else if (hasImg) {
      children = (
        <Image
          {...rest}
          ref={ref}
          alt={rest.alt || 'Avatar'}
          src={src}
          sizes="100vw"
          width="0"
          height="0"
          className={clsx(
            'w-full h-auto absolute top-1/2 left-1/2 -translate-x-1/2 object-fill object-center scale-105 -translate-y-1/2',
          )}
        />
      );
    } else {
      children = 'A';
    }

    return (
      // <div {...containerProps} className={classes}>
      //   {children}
      // </div>
      React.createElement(
        'div',
        { ...containerProps, className: classes },
        children,
      )
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
  containerProps: propTypesContainerProps,
  className: propTypesClassName,
};

export default Avatar;
