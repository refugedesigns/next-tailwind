import { AnimatePresenceProps } from 'framer-motion';
import PropTypes from 'prop-types';

export type colors = 'primary' | 'secondary' | 'minimal' | 'success' | 'error';

export type animation = {
  initial?: object;
  mount?: object;
  unmount?: object;
};

export type dismissType = {
  enabled?: boolean;
  escapeKey?: boolean;
  referencePress?: boolean;
  referencePressEvent?: 'pointerdown' | 'mousedown' | 'click';
  outsidePress?: boolean | ((event: MouseEvent) => boolean);
  outsidePressEvent?: 'pointerdown' | 'mousedown' | 'click';
  ancestorScroll?: boolean;
  bubbles?: boolean;
};

export type offsetType =
  | number
  | {
      mainAxis?: number;
      crossAxis?: number;
      alignmentAxis?: number | null;
    };

export interface NewAnimatePresenceProps
  extends Omit<AnimatePresenceProps, 'children'> {
  children: React.ReactNode;
}

export type placements =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'bottom'
  | 'left-start'
  | 'left-end'
  | 'right-top'
  | 'right-bottom';

// Javascript Types
export const propTypesColors: string[] = [
  'primary',
  'secondary',
  'minimal',
  'success',
  'error',
];

export const propTypesPlacements: string[] = [
  'top',
  'bottom',
  'left',
  'right',
  'top-start',
  'top-end',
  'bottom-start',
  'bottom-end',
  'bottom',
  'left-start',
  'left-end',
  'right-top',
  'right-bottom',
];

export const propTypesDismissType = PropTypes.shape({
  enabled: PropTypes.bool,
  escapeKey: PropTypes.bool,
  referencePress: PropTypes.bool,
  referencePressEvent: PropTypes.string,
  outsidePress: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  outsidePressEvent: PropTypes.string,
  ancestorScroll: PropTypes.bool,
  bubbles: PropTypes.bool,
});

export const propTypesOffsetType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.shape({
    mainAxis: PropTypes.number,
    crossAxis: PropTypes.number,
    alignmentAxis: PropTypes.number,
  }),
]);

export const propTypesAnimation = PropTypes.shape({
  initial: PropTypes.instanceOf(Object),
  mount: PropTypes.instanceOf(Object),
  unmount: PropTypes.instanceOf(Object),
});
