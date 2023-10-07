import PropTypes from 'prop-types';

// typescript types

export type size = 'xs' | 'sm' | 'md' | 'lg';
export type color = 'primary' | 'secondary' | 'minimal' | 'error';
export type className = string;
export type children = React.ReactNode;

//javascript types
export const propTypesClassName = PropTypes.string;
export const propTypesChildren = PropTypes.node;
export const propTypesSize: any = ['sm', 'md', 'lg'];
export const propTypesColor: any = [
  'primary',
  'secondary',
  'minimal',
  'error',
  'success',
];
