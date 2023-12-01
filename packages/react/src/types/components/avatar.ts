import type { ReactNode } from 'react';
import PropTypes from 'prop-types';
import type { colors, extraColors } from '../generics';
import { propTypesColors, propTypesExtraColors } from '../generics';

export type src = string;
export type alt = string;
export type className = string;
export type color = 'inherit' | colors | extraColors;
export type borderColor = 'inherit' | colors | extraColors;
export type variant = 'circular' | 'rounded' | 'square';
export type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type withBorder = boolean;
export type children = ReactNode;
export type containerProps = {
  [key: string]: any;
};

// Javascript Types
export const propTypesSrc = PropTypes.string;
export const propTypesClassName = PropTypes.string;
export const propTypesColor: color[] = [
  'inherit',
  ...propTypesColors.map((color) => color as color),
  ...propTypesExtraColors.map((color) => color as color),
];
export const propTypesBorderColor: color[] = [
  'inherit',
  ...propTypesColors.map((color) => color as color),
  ...propTypesExtraColors.map((color) => color as color),
];
export const propTypesVariant: any = ['circular', 'rounded', 'square'];
export const propTypesSize: any = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
export const propTypesWithBorder = PropTypes.bool;
export const propTypesChildren = PropTypes.node;
export const propTypesContainerProps = PropTypes.instanceOf(Object);
