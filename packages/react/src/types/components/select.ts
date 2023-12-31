import PropTypes from 'prop-types';
import type { ReactNode, ReactElement } from 'react';
import type { ContextData } from '@floating-ui/react';
import type React from 'react';
import type {
  colors,
  dismissType,
  animation as animationType,
  offsetType,
  sizes,
} from '../generics';

import {
  propTypesColors,
  propTypesAnimation as animation,
  propTypesDismissType,
  propTypesOffsetType,
  propTypesVariants,
} from '../generics';

export type variant = 'standard' | 'filled' | 'outlined' | 'default';
export type size = Omit<sizes, 'sm'>;
export type color = colors;
export type fullWidth = boolean;
export type label = string;
export type icon = ReactNode;
export type labelProps = {
  [key: string]: any;
};
export type error = boolean;
export type success = boolean;
export type arrow = ReactNode;
export type value = string;
export type onChange = (value?: string) => void;
export type selected = (
  element?: ReactElement,
  index?: number,
) => React.ReactNode;
export type offset = offsetType;
export type dismiss = dismissType;
export type animate = boolean;
export type animation = animationType;
export type autoHeight = boolean;
export type lockScroll = boolean;
export type menuProps = {
  [key: string]: any;
};
export type index = number;
export type disabled = boolean;
export type className = string;
export type name = string;
export type children = ReactNode;
export type contextValue = {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  activeIndex?: number | null;
  setActiveIndex: (index: number | null) => void;
  listRef: React.MutableRefObject<Array<HTMLLIElement | null>>;
  listItemsRef: React.MutableRefObject<Array<string | null>>;
  setIsOpen: (open: boolean) => void;
  onChange: (value: string) => void;
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => any;
  dataRef: ContextData;
  animate?: boolean;
  animation?: animationType;
  open?: boolean;
};

// Javascript Types
export const propTypesVariant: string[] = propTypesVariants;
export const propTypesSize: string[] = ['md', 'lg'];
export const propTypesFullWidth = PropTypes.bool;
export const propTypesIcon = PropTypes.node;
export const propTypesClassName = PropTypes.string;
export const propTypesShrink = PropTypes.bool;
export const propTypesContextValue: any = PropTypes.shape({
  selectedIndex: PropTypes.number.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
  activeIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.instanceOf(null),
  ]),
  setActiveIndex: PropTypes.func.isRequired,
  listRef: PropTypes.instanceOf(Object).isRequired,
  listItemsRef: PropTypes.instanceOf(Object).isRequired,
  setIsOpen: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  getItemProps: PropTypes.func.isRequired,
  dataRef: PropTypes.instanceOf(Object).isRequired,
  animate: PropTypes.bool,
  animation: PropTypes.instanceOf(Object),
  open: PropTypes.bool,
}).isRequired;
export const propTypesColor = propTypesColors;
export const propTypesAnimate = PropTypes.bool;
export const propTypesAnimation = animation;
export const propTypesOffset = propTypesOffsetType;
export const propTypesDismiss = propTypesDismissType;
export const propTypesLabel = PropTypes.string;
export const propTypesArrow = PropTypes.node;
export const propTypesValue = PropTypes.string;
export const propTypesOnChange = PropTypes.func;
export const propTypesSelected = PropTypes.func;
export const propTypesSuccess = PropTypes.bool;
export const propTypesError = PropTypes.bool;
export const propTypesAutoHeight = PropTypes.bool;
export const propTypesLockScroll = PropTypes.bool;
export const propTypesMenuProps = PropTypes.instanceOf(Object);
export const propTypesIndex = PropTypes.number;
export const propTypesDisabled = PropTypes.bool;
export const propTypesName = PropTypes.string;
export const propTypesChildren = PropTypes.node.isRequired;
export const propTypesLabelProps = PropTypes.instanceOf(Object);
