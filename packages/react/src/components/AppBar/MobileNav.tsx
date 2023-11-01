import React from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import {
  AnimatePresence,
  AnimatePresenceProps,
  motion,
  MotionProps,
  Variants,
} from 'framer-motion';

import { useMergeRefs } from '@floating-ui/react';

import merge from 'deepmerge';
import clsx from 'clsx';
import objectsToString from '../utils/objectsToString';

import { useTheme } from '../../context/theme';

import type {
  open,
  animate,
  className,
  children,
  variant,
  color,
  position,
} from '../../types/components/appBar';

import {
  propTypesOpen,
  propTypesAnimate,
  propTypesClassName,
  propTypesChildren,
  propTypesVariant,
  propTypesColor,
  propTypesPosition,
} from '../../types/components/appBar';
import findMatch from '../utils/findMatch';

export interface MobileNavProps extends Omit<MotionProps, 'animate'> {
  open?: open;
  animate?: animate;
  className?: className;
  children?: children;
  variant?: variant;
  color?: color;
  position?: position;
}

interface NewAnimatePresenceProps
  extends Omit<AnimatePresenceProps, 'children'> {
  children: React.ReactNode;
}

export const MobileNav = React.forwardRef<HTMLDivElement, MobileNavProps>(
  (
    { open, animate, className, variant, color, position, children, ...rest },
    ref,
  ) => {
    //1. init
    const mobileNavRef = React.useRef(null);
    const { appBar } = useTheme();
    const { styles, valid } = appBar;
    const {
      base: { mobileAppBar },
      variants,
      position: positionStyles,
    } = styles;

    //2. set defaults
    animate = animate ?? {};
    className = className ?? '';
    variant = variant ?? 'filled';
    color = color ?? 'primary';
    position = position ?? 'fixed';

    //3. set styles
    const variantClasses = objectsToString(
      variants[findMatch(valid.variants, variant, 'filled')],
    );
    const colorClasses = objectsToString(
      variants[findMatch(valid.variants, variant, 'filled')][
        findMatch(valid.colors, color, 'primary')
      ],
    );
    const positionStylesClasses = objectsToString(
      positionStyles[findMatch(valid.positions, position, 'fixed')],
    );
    const classes = twMerge(
      clsx(
        objectsToString(mobileAppBar),
        variantClasses,
        colorClasses,
        positionStylesClasses,
        className,
      ),
    );

    const mainAnimation = {
      unmount: {
        height: 0,
        opacity: 0,
        transition: { duration: 0.3, times: [0, 0.4, 0.6, 1] },
      },
      mount: {
        opacity: 1,
        height: `${mobileNavRef.current?.scrollHeight ?? '48'}px`,
        transition: { duration: 0.3, times: [0, 0.4, 0.6, 1] },
      },
    };

    const appliedAnimation = merge(mainAnimation, animate);
    const NewAnimatePresence: React.FC<NewAnimatePresenceProps> =
      AnimatePresence;

    const mergedRef = useMergeRefs([ref, mobileNavRef]);

    return (
      <NewAnimatePresence>
        <motion.div
          {...rest}
          ref={mergedRef}
          className={classes}
          variants={appliedAnimation as Variants}
          initial="unmount"
          animate={open ? 'mount' : 'unmount'}
          exit="unmount"
        >
          {children}
        </motion.div>
      </NewAnimatePresence>
    );
  },
);

MobileNav.displayName = 'MobileNav';

MobileNav.propTypes = {
  open: propTypesOpen,
  animate: propTypesAnimate,
  className: propTypesClassName,
  children: propTypesChildren,
  variant: PropTypes.oneOf(propTypesVariant),
  color: PropTypes.oneOf(propTypesColor),
};

export default MobileNav;
