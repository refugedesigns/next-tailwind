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
import objectsToString from '../utils/objectsToString';

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

  return (
    <li
      {...rest}
      ref={(node) => (listRef.current[index!] = node)}
      role="option"
      aria-selected={isActive && isSelected}
      data-selected={isSelected}
      tabIndex={isActive ? 0 : -1}
      className="text-left p-2 list-none flex"
      aria-disabled={disabled}
      style={{
        background: isActive ? 'cyan' : '',
        fontWeight: isSelected ? 'bold' : 'normal',
      }}
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
    >
      {children}
    </li>
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
