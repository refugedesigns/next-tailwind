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
  value="",
  index=0,
  disabled=false,
  className="",
  children,
  ...rest
}: SelectOptionProps) => {
  //2. set @floating-ui/react
  const { activeIndex, selectedIndex, getItemProps, handleSelect, listRef } =
    useSelect();

  const isActive = activeIndex === index;
  const isSelected = selectedIndex === index;

  return (
    <li
      {...rest}
      ref={(node) => {
        listRef.current[index!] = node;
      }}
      role="option"
      aria-selected={isActive && isSelected}
      tabIndex={isActive ? 0 : -1}
      className="text-left p-2 list-none flex"
      style={{
        background: isActive ? 'cyan' : '',
        fontWeight: isSelected ? 'bold' : 'normal',
      }}
      {...getItemProps({
        onClick: () => handleSelect(index as number),
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
