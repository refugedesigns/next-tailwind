import type { ReactNode } from 'react';
import PropTypes from 'prop-types';

// Typescript Types
export type children = ReactNode;
export type className = string;
export type error = boolean;
export type icon = ReactNode;
export type optional = ReactNode;
export type iconProps = {
  [key: string]: any;
};
export type labelProps = {
  [key: string]: any;
};

// Javascript Types
export const children = PropTypes.node.isRequired;
export const className = PropTypes.string;
export const error = PropTypes.bool;
export const icon = PropTypes.node;
export const optional = PropTypes.node;
export const iconProps = PropTypes.instanceOf(Object);
export const labelProps = PropTypes.instanceOf(Object);
