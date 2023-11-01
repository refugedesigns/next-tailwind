import type { ReactNode, ReactElement } from 'react';
import PropTypes from 'prop-types';
import type { colors, extraColors } from '../generics';
import { propTypesColors, propTypesExtraColors } from '../generics';

// Stepper Types

// Typescript types
export type activeStep = number;
export type alternativeLabel = boolean;
export type children = ReactNode;
export type className = string;
export type connector = ReactElement<any, any> | null;
export type nonLinear = boolean;
export type orientation = 'horizontal' | 'vertical';
export type color = colors | extraColors;

// Javascript Types
export const propTypesActiveStep = PropTypes.number;
export const propTypesAlternativeLabel = PropTypes.bool;
export const propTypesChildren = PropTypes.node;
export const propTypesClassName = PropTypes.string;
export const propTypesConnector = PropTypes.element;
export const propTypesNonLinear = PropTypes.bool;
export const propTypesOrientation: orientation[] = ['horizontal', 'vertical'];
export const propTypesColor = [
  ...propTypesColors.map((color) => color as color),
  ...propTypesExtraColors.map((color) => color as color),
];
