import type { ReactNode } from 'react';
import PropTypes from 'prop-types';

export type activeStep = number;
export type backButton = ReactNode;
export type linearProgressProps = {
  [key: string]: any;
};
export type nextButton = ReactNode;
export type position = 'bottom' | 'top' | 'static';
export type steps = number;
export type variant = 'text' | 'dots' | 'progress';
export type className = string;

//Javascript Types
export const propTypesActiveStep = PropTypes.number;
export const propTypesBackButton = PropTypes.node;
export const propTypesLinearProgressProps = PropTypes.instanceOf(Object);
export const propTypesNextButton = PropTypes.node;
export const propTypesPosition: any = ['bottom', 'top', 'static'];
export const propTypesSteps = PropTypes.number;
export const propTypesVariant: any = ['text', 'dots', 'progress'];
export const propTypesClassName = PropTypes.string;
