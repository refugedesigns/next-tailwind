import type { ReactNode } from 'react';
import type { colors } from '../generics';
import Proptypes from 'prop-types';

export type variant = 'outlined' | 'static' | 'standard' | 'default' | 'filled';
export type size = 'md' | 'lg';
export type color = colors;
export type fullWidth = boolean;
export type label = string;
export type icon = ReactNode | any;
export type className = string;
export type shrink = boolean;
export type containerProps =
  | React.PropsWithRef<React.HTMLAttributes<HTMLDivElement>>
  | undefined;
export type labelProps =
  | React.PropsWithRef<React.HTMLAttributes<HTMLLabelElement>>
  | undefined;
export type error = boolean;
export type errorMessage = string;
export type success = boolean;

export const propTypesVariant: any = [
  'outlined',
  'filled',
  'standard',
  'default',
  'static',
];
export const propTypesSize: any = ['md', 'lg'];
export const propTypesColor: any = [
  'primary',
  'secondary',
  'minimal',
  'error',
  'success',
];
export const propTypesFullWidth = Proptypes.bool;
export const propTypesLabel = Proptypes.string;
export const propTypesIcon = Proptypes.node;
export const propTypesClassName = Proptypes.string;
export const propTypesShrink = Proptypes.bool;
export const propTypesContainerProps: any = Proptypes.instanceOf(Object);
export const propTypesLabelProps: any = Proptypes.instanceOf(Object);
export const propTypesError = Proptypes.bool;
export const propTypesErrorMessage = Proptypes.string;
export const propTypesSuccess = Proptypes.bool;
