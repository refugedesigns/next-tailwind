import type { ReactNode } from 'react';
import PropTypes from 'prop-types';

// Typescript types
export type active = boolean;
export type completed = boolean;
export type children = ReactNode;
export type className = string;
export type disabled = boolean;
export type expanded = boolean;
export type index = number;
export type last = boolean;
export type icon = ReactNode;

// Javascript Types
export const propTypesActive = PropTypes.bool;
export const propTypesCompleted = PropTypes.bool;
export const propTypesChildren = PropTypes.node.isRequired;
export const propTypesClassName = PropTypes.string;
export const propTypesDisabled = PropTypes.bool;
export const propTypesExpanded = PropTypes.bool;
export const propTypesIndex = PropTypes.number;
export const propTypesLast = PropTypes.bool;
export const propTypeIcon = PropTypes.node;
