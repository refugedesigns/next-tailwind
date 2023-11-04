import type { ReactNode, ElementType } from 'react';
import PropTypes from 'prop-types';

// Typescript Types
export type children = ReactNode;
export type className = string;
export type error = boolean;
export type icon = ReactNode;
export type optional = ReactNode;
export type stepIconComponent = ElementType<any>;
export type iconProps = {
  [key: string]: any;
};
export type labelProps = {
  [key: string]: any;
};

// Javascript Types
export const propTypesChildren = PropTypes.node.isRequired;
export const propTypesClassName = PropTypes.string;
export const propTypesError = PropTypes.bool;
export const propTypesIcon = PropTypes.node;
export const propTypesOptional = PropTypes.node;
export const propTypesStepIconComponent: any = PropTypes.elementType;

export const propTypesIconProps = PropTypes.instanceOf(Object);
export const propTypesLabelProps = PropTypes.instanceOf(Object);
