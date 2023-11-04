import type { ReactNode } from 'react';
import PropTypes from 'prop-types';

import type {
  animation as animationType,
  colors,
  extraColors,
} from '../generics';
import { propTypesColors, propTypesExtraColors } from '../generics';

export type children = ReactNode;
export type className = string;
export type expanded = boolean;
export type animation = animationType;
export type transitionDuration = number;
export type color = 'inherit' | colors | extraColors;

// Javascript Types
export const propTypesChildren = PropTypes.node;
export const propTypesClassName = PropTypes.string;
export const propTypesExpanded = PropTypes.bool;
export const propTypesAnimation = PropTypes.shape({
  initial: PropTypes.object,
  mount: PropTypes.object,
  unmount: PropTypes.object,
});
export const propTypesTransitionDuration = PropTypes.number;
export const propTypesColor = [
  ...propTypesColors.map((color) => color as color),
  ...propTypesExtraColors.map((color) => color as color),
];
