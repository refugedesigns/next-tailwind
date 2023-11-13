import type { ReactNode } from 'react';
import PropTypes from 'prop-types';

// @floating-ui types
import type {
  Placement,
  Strategy,
  FloatingContext,
  ReferenceType,
  FloatingTreeType,
} from '@floating-ui/react';

// generic types
import type { animation, dismissType, offsetType } from '../generics';
import {
  propTypesOffsetType,
  propTypesAnimation,
  propTypesPlacements,
  propTypesDismissType,
} from '../generics';

/**
 * This file contains the types and prop-types for Menu, MenuCore, MenuHandler, MenuList, MenuItem and MenuContext
 */

export type open = boolean;
export type handler = React.Dispatch<React.SetStateAction<any>>;
export type placement = Placement;
export type offset = offsetType;
export type animate = animation;
export interface dismiss extends dismissType {
  itemPress?: boolean;
}
export type lockScroll = boolean;
export type divide = boolean;
export type allowHover = boolean;
export type disabled = boolean;
export type className = string;
export type children = ReactNode;
export type contextValue = {
  open: open;
  handler: handler;
  setInternalOpen: handler;
  strategy: Strategy;
  x: number;
  y: number;
  reference: (instance: HTMLButtonElement | null) => void;
  floating: (instance: HTMLElement | null) => void;
  listItemsRef: React.MutableRefObject<Array<HTMLButtonElement | null>>;
  getReferenceProps: (userProps?: React.HTMLProps<HTMLElement>) => any;
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => any;
  getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => any;
  appliedAnimation: animate;
  lockScroll: lockScroll;
  divide: divide;
  context: FloatingContext<ReferenceType>;
  tree: FloatingTreeType<ReferenceType>;
  allowHover: boolean;
  internalAllowHover: boolean;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  nested: boolean;
};

// Javascript types
export const propTypesOpen = PropTypes.bool;
export const propTypesHandler = PropTypes.func;
export const propTypesPlacement: any = propTypesPlacements;
export const propTypesOffset = propTypesOffsetType;
export const propTypesAnimate = propTypesAnimation;
export const propTypesLockScroll = PropTypes.bool;
export const propTypesDisabled = PropTypes.bool;
export const propTypesClassName = PropTypes.string;
export const propTypesChildren = PropTypes.node;
export const propTypesDismiss: any = PropTypes.shape({
  ...propTypesDismissType,
  itemPress: PropTypes.bool,
});
export const propTypesDivide = PropTypes.bool;
export const propTypesAllowHover = PropTypes.bool;
export const propTypesContextValue = PropTypes.shape({
  open: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
  setInternalOpen: PropTypes.func.isRequired,
  strategy: PropTypes.oneOf(['absolute', 'fixed']).isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  reference: PropTypes.func.isRequired,
  floating: PropTypes.func.isRequired,
  listItemsRef: PropTypes.instanceOf(Object).isRequired,
  getReferenceProps: PropTypes.func.isRequired,
  getItemProps: PropTypes.func.isRequired,
  getFloatingProps: PropTypes.func.isRequired,
  appliedAnimation: propTypesAnimate.isRequired,
  lockScroll: PropTypes.bool.isRequired,
  divide: PropTypes.bool.isRequired,
  context: PropTypes.instanceOf(Object).isRequired,
  tree: PropTypes.any.isRequired,
  allowHover: PropTypes.bool.isRequired,
  internalAllowHover: PropTypes.bool.isRequired,
  activeIndex: PropTypes.number,
  setActiveIndex: PropTypes.func.isRequired,
  nested: PropTypes.bool.isRequired,
});
