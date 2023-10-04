import type { ReactNode } from 'react';
import Proptypes from 'prop-types';

// typescript types
export type variant = 'filled' | 'outlined' | 'text';
export type size = 'sm' | 'md' | 'lg';
export type color = 'primary' | 'secondary' | 'minimal' | 'error';
export type fullWidth = boolean;
export type ripple = boolean;
export type capsule = boolean;
export type startIcon = ReactNode;
export type endIcon = ReactNode;
export type className = string;
export type elevated = boolean;
export type disabled = boolean;
export type loading = boolean;

// javascript types
export const propTypesVariant: any = ['filled', 'outlined', 'text'];
export const propTypesSize: any = ['sm', 'md', 'lg'];
export const propTypesColor: any = ['primary', 'secondary', 'minimal', 'error'];
export const propTypesFullWidth = Proptypes.bool;
export const propTypesRipple = Proptypes.bool;
export const propTypesCapsule = Proptypes.bool;
export const propTypesStartIcon = Proptypes.node;
export const propTypesEndIcon = Proptypes.node;
export const propTypesClassName = Proptypes.string;
export const propTypesElevated = Proptypes.bool;
export const propTypesDisabled = Proptypes.bool;
export const propTypesLoading = Proptypes.bool;
