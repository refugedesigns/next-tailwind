import React from 'react';
import PropTypes from 'prop-types';
import {
  size,
  className,
  children,
} from '../../../types/components/iconWrappter';
import {
  propTypesSize,
  propTypesClassName,
  propTypesChildren,
} from '../../../types/components/iconWrappter';
import { useTheme } from '../../../context/theme';
import clsx from 'clsx';
import objectsToString from '../../utils/objectsToString';
import findMatch from '../../utils/findMatch';
import { twMerge } from 'tailwind-merge';

interface IconWrapperProps extends React.ComponentPropsWithoutRef<'span'> {
  size?: size;
  className?: className;
  children?: children;
  ref?: React.RefObject<HTMLOrSVGElement>;
}

const IconWrapper = React.forwardRef<HTMLSpanElement, IconWrapperProps>(
  ({ children, className, size, ...rest }, ref) => {
    // 1. init
    const { iconWrapperClasses } = useTheme();
    const { valid, defaultProps, styles } = iconWrapperClasses;

    // 2. set default props
    size = size ?? defaultProps?.size;
    className = className ?? defaultProps?.className;

    // 3. set styles
    const { base, sizes } = styles!;
    const iconWrapperBase = objectsToString(base?.initial);
    const iconWrapperSize = objectsToString(
      sizes[findMatch(valid?.sizes, size, 'md')],
    );

    const classes = twMerge(
      clsx(iconWrapperBase, iconWrapperSize),
      className,
      'h-5 w-5 mx-1',
    );

    console.log(classes);
    return (
      <span {...rest} ref={ref}>
        {children &&
          React.cloneElement(children as React.ReactElement, {
            className: classes,
          })}
      </span>
    );
  },
);

IconWrapper.displayName = 'IconWrapper';

IconWrapper.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
  children: propTypesChildren,
};

export default IconWrapper;
