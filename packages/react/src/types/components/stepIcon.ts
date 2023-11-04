import PropTypes from 'prop-types';
import type { colors, extraColors } from '../generics';
import { propTypesColors, propTypesExtraColors } from '../generics';

export type active = boolean;
export type className = string;
export type completed = boolean;
export type error = boolean;
export type color = 'inherit' | colors | extraColors;
export type icon = React.ReactNode;

//Javascript Types
export const propTypesActive = PropTypes.bool;
export const propTypesClassName = PropTypes.string;
export const propTypesCompleted = PropTypes.bool;
export const propTypesError = PropTypes.bool;
export const propTypesIcon = PropTypes.node;
export const propTypesColor = [
  ...propTypesColors.map((color) => color as color),
  ...propTypesExtraColors.map((color) => color as color),
];
