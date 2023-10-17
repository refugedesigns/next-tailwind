import React from 'react';
import PropTypes from 'prop-types';
import { SelectContextProvider, usePrevious, useSelect } from './SelectContext';

import {
  useFloating,
  offset as fuiOffset,
  flip,
  useListNavigation,
  useTypeahead,
  useInteractions,
  useRole,
  useClick,
  useDismiss,
  FloatingFocusManager,
  autoUpdate,
  size as fuiSize,
  FloatingOverlay,
  FloatingList,
} from '@floating-ui/react';

import { twMerge } from 'tailwind-merge';
import merge from 'deepmerge';
import findMatch from '../utils/findMatch';
import objectsToString from '../utils/objectsToString';
import { useTheme } from '../../context/theme';
import type {
  variant,
  color,
  size,
  label,
  error,
  success,
  arrow,
  value,
  onChange,
  selected,
  offset,
  dismiss,
  animate,
  lockScroll,
  labelProps,
  menuProps,
  className,
  disabled,
  name,
  children,
} from '../../types/components/select';
import {
  propTypesVariant,
  propTypesColor,
  propTypesSize,
  propTypesLabel,
  propTypesError,
  propTypesSuccess,
  propTypesArrow,
  propTypesValue,
  propTypesOnChange,
  propTypesSelected,
  propTypesOffset,
  propTypesDismiss,
  propTypesAnimate,
  propTypesLockScroll,
  propTypesLabelProps,
  propTypesMenuProps,
  propTypesClassName,
  propTypesDisabled,
  propTypesName,
  propTypesChildren,
} from '../../types/components/select';
import type { NewAnimatePresenceProps } from '../../types/generics';
import {
  AnimatePresence,
  motion,
  useIsomorphicLayoutEffect,
} from 'framer-motion';
import { SelectOptionProps, SelectOption } from './SelectOption';

export interface SelectProps
  extends Omit<React.ComponentProps<'div'>, 'value' | 'onChange'> {
  variant?: variant;
  color?: color;
  size?: size;
  label?: label;
  error?: error;
  success?: success;
  arrow?: arrow;
  value?: value;
  onChange?: onChange;
  selected?: selected;
  offset?: offset;
  dismiss?: dismiss;
  animate?: animate;
  lockScroll?: lockScroll;
  labelProps?: labelProps;
  menuProps?: menuProps;
  className?: className;
  disabled?: disabled;
  name?: name;
  children?: children;
}

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      variant,
      color,
      size,
      label,
      error,
      success,
      arrow,
      value,
      onChange,
      selected,
      offset,
      dismiss,
      animate,
      lockScroll,
      labelProps,
      menuProps,
      className,
      disabled,
      name,
      children,
      ...rest
    },
    ref,
  ) => {
    //1. init
    const { select } = useTheme();
    const { defaultProps } = select;

    //2. set default Props
    variant = variant ?? defaultProps?.variant;
    color = color ?? defaultProps?.color;
    size = size ?? defaultProps?.size;
    label = label ?? defaultProps?.label;
    error = error ?? defaultProps?.error;
    success = success ?? defaultProps?.success;
    arrow = arrow ?? defaultProps?.arrow;
    value = value ?? defaultProps?.value;
    onChange = onChange ?? defaultProps?.onChange;
    selected = selected ?? defaultProps?.selected;
    offset = offset ?? defaultProps?.offset;
    dismiss = dismiss ?? defaultProps?.dismiss;
    animate = animate ?? defaultProps?.animate;
    lockScroll = lockScroll ?? defaultProps?.lockScroll;
    labelProps = labelProps ?? defaultProps?.labelProps;
    menuProps = menuProps ?? defaultProps?.menuProps;
    className = className ?? defaultProps?.className;
    disabled = disabled ?? defaultProps?.disabled;
    name = name ?? defaultProps?.name;
    children = children ?? defaultProps?.children;

    const [isOpen, setIsOpen] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
    const [selectedIndex, setSelectedIndex] = React.useState<number | null>(
      null,
    );
    const [controlledScrolling, setControlledScrolling] = React.useState(false);
    const prevActiveIndex = usePrevious<number | null>(activeIndex);
    const [state, setState] = React.useState<string>('close');

    const { refs, floatingStyles, context } = useFloating({
      placement: 'bottom-start',
      open: isOpen,
      onOpenChange: setIsOpen,
      whileElementsMounted: autoUpdate,
      middleware: [
        fuiOffset(5),
        flip({ padding: 10 }),
        fuiSize({
          apply({ rects, elements }: any) {
            Object.assign(elements?.floating?.style, {
              width: `${rects?.reference?.width}px`,
              zIndex: 99,
            });
          },
          padding: 20,
        }),
      ],
    });

    const listItemsRef = React.useRef<Array<HTMLLIElement | null>>([]);
    const listContentRef = React.useRef<Array<string | null>>([
      ...(React.Children.map(children, (child) => {
        const { props }: any = child;
        return props?.value;
      }) ?? []),
    ]);
    const isTypingRef = React.useRef(false);
    const floatingRef = refs.floating;

    const handleSelect = React.useCallback((index: number | null) => {
      setSelectedIndex(index);
      setIsOpen(false);
    }, []);

    const handleTypeaheadMatch = (index: number | null) => {
      if (isOpen) {
        setActiveIndex(index);
      } else {
        handleSelect(index);
      }
    };

    const listNav = useListNavigation(context, {
      listRef: listItemsRef,
      activeIndex,
      selectedIndex,
      onNavigate: setActiveIndex,
      loop: true,
    });

    const typeahead = useTypeahead(context, {
      listRef: listContentRef,
      activeIndex,
      selectedIndex,
      onMatch: handleTypeaheadMatch,
      onTypingChange(isTyping) {
        isTypingRef.current = isTyping;
      },
    });

    const click = useClick(context);
    const dismissFui = useDismiss(context);
    const role = useRole(context, { role: 'listbox' });

    const { getReferenceProps, getFloatingProps, getItemProps } =
      useInteractions([click, dismissFui, role, listNav, typeahead]);

    const SelectContext = React.useMemo(
      () => ({
        selectedIndex,
        setSelectedIndex,
        setIsOpen,
        activeIndex,
        setActiveIndex,
        getItemProps,
        handleSelect,
        dataRef: context.dataRef,
        listRef: listItemsRef,
      }),
      [activeIndex, handleSelect, getItemProps, selectedIndex, context.dataRef],
    );

    React.useEffect(() => {
      if (isOpen) {
        setState('open');
      } else if ((!isOpen && selectedIndex) || (!isOpen && value)) {
        setState('withValue');
      } else {
        setState('close');
      }
    }, [isOpen, selectedIndex, value, selected]);

    useIsomorphicLayoutEffect(() => {
      const floating = floatingRef.current;

      if (isOpen && controlledScrolling && floating) {
        const item =
          activeIndex != null
            ? listItemsRef.current[activeIndex]
            : selectedIndex != null
            ? listItemsRef.current[selectedIndex]
            : null;

        if (item && prevActiveIndex != null) {
          const itemHeight =
            listItemsRef.current[prevActiveIndex]?.offsetHeight ?? 0;
          const floatingHeight = floating.offsetHeight;
          const top = item.offsetTop;
          const bottom = top + itemHeight;

          if (top < floating.scrollTop) {
            floating.scrollTop -= floating.scrollTop - top + 5;
          } else if (bottom > floatingHeight + floating.scrollTop) {
            floating.scrollTop +=
              bottom - floatingHeight - floating.scrollTop + 5;
          }
        }
      }
    }, [open, controlledScrolling, prevActiveIndex, activeIndex]);

    React.useEffect(() => {
      setSelectedIndex(
        Math.max(0, listContentRef.current.indexOf(value as string) + 1),
      );
    }, [value]);

    console.log(children);
    console.log(selectedIndex);

    return (
      <SelectContextProvider value={SelectContext}>
        <div ref={ref} className="relative max-w-[300px] h-8 px-2">
          <button
            type="button"
            ref={refs.setReference}
            tabIndex={0}
            {...getReferenceProps({
              ...rest,
              name: name,
              disabled: disabled,
            })}
            className="absolute border border-green-500 w-full h-full z-10 rounded-md focus:border-2 active:border-2 peer"
          >
            {typeof selected === 'function' ? (
              <span>
                {selected(children[selectedIndex - 1], selectedIndex - 1)}
              </span>
            ) : value && !onChange ? (
              <span>{value}</span>
            ) : (
              <span
                {...children[selectedIndex - 1]?.props}
                className="flex items-center"
              />
            )}
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              {arrow ?? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>
          <label
            {...labelProps}
            className="absolute top-1/2 -translate-y-1/2 left-4"
          >
            {label}
          </label>
          {isOpen && (
            <FloatingFocusManager context={context} modal={false}>
              <div
                className="flex flex-col border border-blue-gray-100 rounded-md"
                ref={refs.setFloating}
                style={floatingStyles}
                {...getFloatingProps({
                  ...menuProps,
                })}
              >
                {React.Children.map(
                  children,
                  (child, index) =>
                    React.isValidElement(child) &&
                    React.cloneElement(child, {
                      ...child.props,
                      index: child.props?.index || index + 1,
                      id: `next-tailwind-select${index}`,
                    }),
                )}
              </div>
            </FloatingFocusManager>
          )}
        </div>
      </SelectContextProvider>
    );
  },
);

Select.displayName = 'Select';

export type { SelectOptionProps };
export { Select, SelectOption as Option, useSelect, usePrevious };
export default Object.assign(Select, {
  Option: SelectOption,
});
