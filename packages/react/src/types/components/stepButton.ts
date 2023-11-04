import type { ReactNode } from 'react';
import PropTypes from 'prop-types';
import type { colors, extraColors } from '../generics';
import { propTypesColors, propTypesExtraColors } from '../generics';

export type children = ReactNode;
export type className = string;
export type icon = ReactNode;
export type optional = ReactNode;
export type color = 'inherit' | colors | extraColors;

//Javascript Types
export const propTypesChildren = PropTypes.node;
export const propTypesClassName = PropTypes.string;
export const propTypesIcon = PropTypes.node;
export const propTypesOptional = PropTypes.node;
export const propTypesColor: color[] = [
  'inherit',
  ...propTypesColors.map((color) => color as color),
  ...propTypesExtraColors.map((color) => color as color),
];
