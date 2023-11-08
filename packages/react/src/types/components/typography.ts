import type { ReactNode, ElementType } from 'react';
import PropTypes from 'prop-types';

import type { extraColors } from '../generics';
import { propTypesColors, propTypesExtraColors } from '../generics';

export type variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'lead'
  | 'paragraph'
  | 'small';

export type color = 'inherit' | 'current' | 'black' | 'white' | extraColors;
export type asType = ElementType;
export type textGradient = boolean;
export type className = string;
export type children = ReactNode;

export const propTypesVariant: any = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'lead',
  'paragraph',
  'small',
];

export const propTypesColor: any = [
  'inherit',
  'current',
  'black',
  'white',
  ...propTypesExtraColors,
  ...propTypesColors,
];

export const propTypesAs: any = PropTypes.elementType;
export const propTypesTextGradient: any = PropTypes.bool;
export const propTypesClassName: any = PropTypes.string;
export const propTypesChildren: any = PropTypes.node.isRequired;
