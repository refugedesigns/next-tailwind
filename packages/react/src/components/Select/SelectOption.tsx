import React from 'react';
import { useListItem } from '@floating-ui/react';
import type {
  value,
  index,
  disabled,
  className,
  children,
} from '../../types/components/select';
import {
  propTypesValue,
  propTypesIndex,
  propTypesDisabled,
  propTypesClassName,
  propTypesChildren,
} from '../../types/components/select';

import { useSelect } from './SelectContext';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../context/theme';
import clsx from 'clsx';
import objectsToString from '../utils/objectsToString';
import type { NewAnimatePresenceProps } from '../../types/generics';
import { AnimatePresence, motion, stagger } from 'framer-motion';
import merge from 'deepmerge';

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

export interface SelectOptionProps extends React.ComponentProps<'li'> {
  value?: value;
  index?: index;
  disabled?: disabled;
  className?: className;
  children?: children;
}

export const SelectOption = ({
  value,
  index,
  disabled = false,
  className = '',
  children,
  ...rest
}: SelectOptionProps) => {
  //1. init
  const { select } = useTheme();
  const { styles } = select;
  const { base } = styles;

  //2. set @floating-ui/react
  const {
    selectedIndex,
    setSelectedIndex,
    listRef,
    setIsOpen,
    onChange,
    activeIndex,
    setActiveIndex,
    getItemProps,
    dataRef,
    listItemsRef,
    animate,
    animation,
    open,
  } = useSelect();

  index = listItemsRef.current.indexOf(value) + 1 || 0;

  function handleSelect() {
    setSelectedIndex(index);
    onChange(value);
    setIsOpen(false);
    setActiveIndex(null);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (
      event.key === 'Enter' ||
      (event.key === ' ' && !dataRef.current.typing)
    ) {
      event.preventDefault();
      handleSelect();
    }
  }

  const isActive = activeIndex === index;
  const isSelected = selectedIndex === index;

  // 3. set styles
  const optionBaseClasses = objectsToString(base.option.initial);
  const optionActiveClasses = objectsToString(base.option.active);
  const optionDisabledClasses = objectsToString(base.option.disabled);
  const classes = twMerge(
    clsx(optionBaseClasses, {
      [optionActiveClasses]: selectedIndex === index,
      [optionDisabledClasses]: disabled,
    }),
    className ?? '',
  );

  // 4. set variants
  const optionVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      filter: 'blur(20px)',
      transition: {
        duration: 0.2,
      },
    },
    show: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.2,
      },
    },
    noAnimation: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
    },
  };

  const appliedAnimations = merge(optionVariants, animation);

  return (
    <motion.li
      {...rest}
      ref={(node) => (listRef.current[index!] = node)}
      role="option"
      aria-selected={isActive && isSelected}
      data-selected={isSelected}
      tabIndex={isActive ? 0 : -1}
      className={classes}
      aria-disabled={disabled}
      {...getItemProps({
        onClick: (e: any) => {
          const onClick = rest?.onClick;

          if (typeof onClick === 'function') {
            onClick(e);

            handleSelect();
          }
          handleSelect();
        },

        onKeyDown: (e: any) => {
          const onKeyDown = rest?.onKeyDown;
          if (typeof onKeyDown === 'function') {
            onKeyDown(e);
            handleKeyDown(e);
          }

          handleKeyDown(e);
        },
      })}
      variants={appliedAnimations}
      initial={animate && open && 'hidden'}
      animate={animate && open && 'show'}
    >
      {children}
    </motion.li>
  );
};

SelectOption.displayName = 'SelectOption';

SelectOption.propTypes = {
  value: propTypesValue,
  index: propTypesIndex,
  disabled: propTypesDisabled,
  className: propTypesClassName,
  children: propTypesChildren,
};

export default SelectOption;
