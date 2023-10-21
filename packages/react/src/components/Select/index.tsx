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
import clsx from 'clsx';
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
  icon,
  children,
  fullWidth,
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
  fullWidth?: fullWidth;
  icon?: icon;
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
      fullWidth,
      icon,
      name,
      children,
      ...rest
    },
    ref,
  ) => {
    //1. init
    const { select } = useTheme();
    const { defaultProps, valid, styles } = select;
    const { base, variants, fullWidth: fullWidthStyles } = styles;

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
    icon = icon ?? defaultProps?.icon;
    name = name ?? defaultProps?.name;
    children = children ?? defaultProps?.children;

    const [open, setIsOpen] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
    const [selectedIndex, setSelectedIndex] = React.useState<number | null>(0);
    const [controlledScrolling, setControlledScrolling] = React.useState(false);
    const prevActiveIndex = usePrevious<number | null>(activeIndex);
    const [state, setState] = React.useState<string>('close');

    const { x, y, strategy, refs, floatingStyles, context } = useFloating({
      placement: 'bottom-start',
      open: open,
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

    React.useEffect(() => {
      setSelectedIndex(
        Math.max(0, listContentRef.current.indexOf(value as string) + 1),
      );
    }, [value]);

    const floatingRef = refs.floating;

    const { getReferenceProps, getFloatingProps, getItemProps } =
      useInteractions([
        useClick(context),
        useRole(context, { role: 'listbox' }),
        useDismiss(context, { ...dismiss }),
        useListNavigation(context, {
          listRef: listItemsRef,
          activeIndex,
          selectedIndex,
          onNavigate: setActiveIndex,
          loop: true,
        }),
        useTypeahead(context, {
          listRef: listContentRef,
          activeIndex,
          selectedIndex,
          onMatch: open ? setActiveIndex : setSelectedIndex,
        }),
      ]);

    const SelectContext = React.useMemo(
      () => ({
        selectedIndex,
        setSelectedIndex,
        setIsOpen,
        activeIndex,
        setActiveIndex,
        getItemProps,
        dataRef: context.dataRef,
        listRef: listItemsRef,
        onChange: onChange || (() => {}),
        listItemsRef: listContentRef,
      }),
      [activeIndex, getItemProps, onChange, selectedIndex, context.dataRef],
    );

    function handleClearMenuField() {
      setSelectedIndex(null);
      setIsOpen(false);
      setActiveIndex(null);
    }

    const handleSelected = React.useMemo(
      () =>
        typeof selected === 'function' &&
        selected(children[selectedIndex - 1], selectedIndex - 1),
      [selectedIndex, children, selected],
    );

    React.useEffect(() => {
      if (open) {
        setState('open');
      } else if ((!open && selectedIndex) || (!open && value)) {
        setState('withValue');
      } else {
        setState('close');
      }
    }, [open, selectedIndex, value, selected]);

    useIsomorphicLayoutEffect(() => {
      const floating = floatingRef.current;

      if (open && controlledScrolling && floating) {
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
      if (value && !onChange) {
        console.error(
          'Warning: You provided a `value` prop to a select component without an `onChange` handler. This will render a read-only select. If the field should be mutable use `onChange` handler with `value` together.',
        );
      }
    }, [value, onChange]);

    const selectVariant =
      variants[findMatch(valid?.variants, variant, 'outlined')];
    const selectSize = selectVariant.sizes[findMatch(valid?.sizes, size, 'md')];
    const selectError = selectVariant.colors.select.error;
    const selectSuccess = selectVariant.colors.select.success;
    const selectColor =
      selectVariant.colors.select[findMatch(valid?.colors, color, 'primary')];
    const labelError = selectVariant.colors.label.error;
    const labelSuccess = selectVariant.colors.label.success;
    const labelColor =
      selectVariant.colors.label[findMatch(valid?.colors, color, 'primary')];
    const stateClasses = selectVariant.states[state];
    const selectFullWidth = fullWidthStyles.container;

    const containerClasses = twMerge(
      clsx(
        objectsToString(base?.container),
        objectsToString(selectSize.container),
        { [selectFullWidth]: fullWidth },
        className,
      ),
    );

    const selectClasses = twMerge(
      clsx(
        objectsToString(base?.select),
        objectsToString(selectSize?.select),
        objectsToString(selectVariant?.base.select),
        objectsToString(stateClasses.select),
        { [objectsToString(selectVariant.base.selectWithIcon)]: icon },
        { [objectsToString(selectError)]: error },
        { [objectsToString(selectSuccess)]: success },
        { [objectsToString(selectColor)]: !error && !success },
        className,
      ),
    );

    const labelClasses = twMerge(
      clsx(
        objectsToString(base?.label),
        objectsToString(selectSize.label),
        objectsToString(selectVariant.base.label),
        objectsToString(stateClasses.label),
        { [labelError]: error },
        { [labelSuccess]: success },
        { [labelColor]: !error && !success },
        labelProps?.className,
      ),
    );

    const arrowClasses = twMerge(
      clsx(objectsToString(base?.arrow.initial), {
        [objectsToString(base.arrow.active)]: open,
      }),
    );

    const menuClasses = twMerge(
      clsx(objectsToString(base?.menu), menuProps?.className),
    );
    const buttonContentClasses = clsx(
      'absolute top-2/4 -translate-y-2/4 flex items-center',
      variant === 'outlined' ? 'left-3 pt-0.5' : 'left-0 pt-3',
    );

    const iconClasses = twMerge(
      clsx(
        objectsToString(selectVariant?.base?.icon),
        objectsToString(selectSize?.icon),
      ),
    );

    const cancelButtonClasses = clsx(
      'absolute top-2/4 -translate-y-2/4 flex items-center justify-center cursor-pointer w-4 h-4 rounded-full select-none hover:bg-blue-gray-100',
      variant === 'outlined' ? 'right-12 pt-0.5' : 'right-0 pt-3',
    );

    return (
      <SelectContextProvider value={SelectContext}>
        <div ref={ref} {...rest} className={containerClasses}>
          <button
            type="button"
            tabIndex={0}
            {...getReferenceProps({
              name: name,
              disabled: disabled,
              ref: refs.setReference,
              className: selectClasses,
              onKeyDown: (e: any) => {
                if (e.key === 'Escape' || e.key === 'Backspace') {
                  console.log('Backspace fired');
                  e.preventDefault();
                  setIsOpen(false);
                  setActiveIndex(null);
                  setSelectedIndex(null);
                }
              },
            })}
          >
            {handleSelected ? (
              <>
                <span className={buttonContentClasses}>{handleSelected}</span>
                <div
                  onClick={handleClearMenuField}
                  onKeyDown={handleClearMenuField}
                  role="button"
                  tabIndex={0}
                  className={cancelButtonClasses}
                >
                  &times;
                </div>
              </>
            ) : value && !onChange ? (
              <>
                <span className={buttonContentClasses}>{value}</span>
                <div
                  onClick={handleClearMenuField}
                  onKeyDown={handleClearMenuField}
                  role="button"
                  tabIndex={0}
                  className={cancelButtonClasses}
                >
                  &times;
                </div>
              </>
            ) : (
              <>
                <span
                  {...children[selectedIndex - 1]?.props}
                  className={buttonContentClasses}
                />
                {state === 'withValue' && (
                  <div
                    onClick={handleClearMenuField}
                    onKeyDown={handleClearMenuField}
                    role="button"
                    tabIndex={0}
                    className={cancelButtonClasses}
                  >
                    &times;
                  </div>
                )}
              </>
            )}
            <div className={arrowClasses}>
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
          {icon && <span className={iconClasses}>{icon}</span>}
          {label && (
            <label {...labelProps} className={labelClasses}>
              {label}
            </label>
          )}
          {open && (
            <FloatingFocusManager context={context} modal={false}>
              <div
                {...getFloatingProps({
                  ...menuProps,
                  className: menuClasses,
                  ref: refs.setFloating,
                  style: {
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                    overflow: 'auto',
                  },
                  role: 'listbox',
                  onPointerEnter(e) {
                    const onPointerEnter = menuProps?.onPointerEnter;

                    if (typeof onPointerEnter === 'function') {
                      onPointerEnter(e);
                      setControlledScrolling(false);
                    }
                    setControlledScrolling(false);
                  },

                  onPointerMove(e) {
                    const onPointerMove = menuProps?.onPointerMove;

                    if (typeof onPointerMove === 'function') {
                      onPointerMove(e);
                      setControlledScrolling(false);
                    }
                    setControlledScrolling(false);
                  },

                  onKeyDown(e) {
                    const onKeyDown = menuProps?.onKeyDown;

                    if (typeof onKeyDown === 'function') {
                      onKeyDown(e);
                      setControlledScrolling(true);
                    }
                    setControlledScrolling(true);
                  },
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
