import type { ReactNode } from 'react';
import type { colors, extraColors } from '../generics';
import { propTypesColors, propTypesExtraColors } from '../generics';
import PropTypes from 'prop-types';

export type children = ReactNode;
export type color = 'inherit' | colors | extraColors;
export type size = 'inherit' | 'sm' | 'md' | 'lg';
export type htmlColor = string;
export type inheritViewbox = boolean;
export type viewBox = string;
export type shapeRendering = string;
export type className = string;
export type titleAccess = string;

// JavaScript Types
export const propTypesChildren = PropTypes.node;
export const propTypesColor = [
  ...propTypesColors.map((color) => color as color),
  ...propTypesExtraColors.map((color) => color as color),
];
export const propTypesSize: any = ['inherit', 'sm', 'md', 'lg'];
export const propTypesHtmlColor = PropTypes.string;
export const propTypesInheritViewbox = PropTypes.bool;
export const propTypesViewBox = PropTypes.string;
export const propTypesShapeRendering = PropTypes.string;
export const propTypesClassName = PropTypes.string;
export const propTypesTitleAccess = PropTypes.string;
