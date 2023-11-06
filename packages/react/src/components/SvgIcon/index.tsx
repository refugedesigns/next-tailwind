'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import findMatch from '../utils/findMatch';
import { useTheme } from '../../context/theme';
import objectsToString from '../utils/objectsToString';
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
} from '../../types/components/svgIcon';
import {
  propTypesViewBox,
  propTypesSize,
  propTypesColor,
  propTypesChildren,
  propTypesClassName,
  propTypesHtmlColor,
  propTypesTitleAccess,
  propTypesInheritViewbox,
  propTypesShapeRendering,
} from '../../types/components/svgIcon';

export interface SvgIconProps extends React.ComponentProps<'svg'> {
  viewBox?: viewBox;
  size?: size;
  color?: color;
  children?: children;
  className?: className;
  htmlColor?: htmlColor;
  titleAccess?: titleAccess;
  inheritViewbox?: inheritViewbox;
  shapeRendering?: shapeRendering;
}

const SvgIcon = React.forwardRef<HTMLOrSVGElement, SvgIconProps>(
  (
    {
      viewBox,
      size,
      color,
      children,
      className,
      htmlColor,
      titleAccess,
      inheritViewbox,
      shapeRendering,
      ...rest
    },
    ref,
  ) => {
    //1. init
    const { svg } = useTheme();
    const { defaultProps, valid, styles } = svg;
    const { base, sizes, color: colorStyles } = styles;

    //2. set defaults
    viewBox = viewBox ?? defaultProps?.viewBox;
    size = size ?? defaultProps?.size;
    color = color ?? defaultProps?.color;
    children = children ?? defaultProps?.children;
    className = className ?? defaultProps?.className;
    htmlColor = htmlColor ?? defaultProps?.htmlColor;
    titleAccess = titleAccess ?? defaultProps?.titleAccess;
    inheritViewbox = inheritViewbox ?? defaultProps?.inheritViewbox;
    shapeRendering = shapeRendering ?? defaultProps?.shapeRendering;

    const hasSvgAsChild =
      React.isValidElement(children) && children.type === 'svg';

    //3. set styles
    const rootClasses = objectsToString(base.initial);
    const sizeClasses = objectsToString(
      sizes[findMatch(valid.sizes, size, 'md')],
    );
    const colorClasses = objectsToString(
      colorStyles[findMatch(valid.colors, color, 'primary')],
    );

    const classes = twMerge(
      clsx(
        rootClasses,
        sizeClasses,
        colorClasses,
        hasSvgAsChild && 'currentColor',
      ),
      className,
    );

    const more: { [key: string]: any } = {};

    if (!inheritViewbox) {
      more.viewBox = viewBox;
    }

    return (
      <svg
        color={htmlColor}
        focusable="false"
        aria-hidden={titleAccess ? undefined : true}
        role={titleAccess ? 'img' : undefined}
        ref={ref}
        {...more}
        {...rest}
        {...(hasSvgAsChild && (children as React.ReactElement)?.props)}
        className={classes}
      >
        {hasSvgAsChild
          ? (children as React.ReactElement)?.props.children
          : children}
        {titleAccess && <title>{titleAccess}</title>}
      </svg>
    );
  },
);

SvgIcon.propTypes = {
  viewBox: propTypesViewBox,
  size: PropTypes.oneOf(propTypesSize),
  color: PropTypes.oneOf(propTypesColor),
  children: propTypesChildren,
  className: propTypesClassName,
  htmlColor: propTypesHtmlColor,
  titleAccess: propTypesTitleAccess,
  inheritViewbox: propTypesInheritViewbox,
  shapeRendering: propTypesShapeRendering,
};

SvgIcon.displayName = 'SvgIcon';

export default SvgIcon;
