import type { ReactNode } from 'react';
import PropTypes from 'prop-types';

import type { colors, animation } from '../generics';
import { propTypesColors, propTypesAnimation } from '../generics';

//typescript types
export type variant = 'filled' | 'gradient' | 'outlined';
export type position = 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
export type color = 'transparent' | 'white' | colors;
export type shadow = boolean;
export type blurred = boolean;
export type fullWidth = boolean;
export type className = string;
export type children = ReactNode;
export type open = boolean;
export type animate = animation;

// javascript prop-types
export const propTypesVariant: any = ['filled', 'gradient', 'outlined'];
export const propTypesPosition: any = [
  'fixed',
  'absolute',
  'sticky',
  'static',
  'relative',
];
export const propTypesColor: any = ['transparent', 'white', ...propTypesColors];
export const propTypesShadow: any = PropTypes.bool;
export const propTypesBlurred: any = PropTypes.bool;
export const propTypesFullWidth: any = PropTypes.bool;
export const propTypesClassName: any = PropTypes.string;
export const propTypesChildren: any = PropTypes.node.isRequired;
export const propTypesOpen: any = PropTypes.bool.isRequired;
export const propTypesAnimate: any = propTypesAnimation;
