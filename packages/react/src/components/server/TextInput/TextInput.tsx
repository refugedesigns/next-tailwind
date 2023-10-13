import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  variant,
  size,
  color,
  fullWidth,
  containerProps,
  label,
  icon,
  className,
  labelProps,
  shrink,
  error,
  errorMessage,
  success,
} from '../../../types/components/textInput';

import {
  propTypesColor,
  propTypesVariant,
  propTypesContainerProps,
  propTypesClassName,
  propTypesError,
  propTypesErrorMessage,
  propTypesLabel,
  propTypesShrink,
  propTypesSuccess,
  propTypesIcon,
  propTypesLabelProps,
  propTypesSize,
  propTypesFullWidth,
} from '../../../types/components/textInput';
import { useTheme } from '../../../context/theme';
import findMatch from '../../utils/findMatch';
import objectsToString from '../../utils/objectsToString';

export interface InputProps
  extends Omit<React.ComponentProps<'input'>, 'size'> {
  variant?: variant;
  size?: size;
  color?: color;
  fullWidth?: fullWidth;
  containerProps?: containerProps;
  label?: label;
  icon?: icon;
  className?: className;
  labelProps?: labelProps;
  shrink?: shrink;
  error?: error;
  errorMessage?: errorMessage;
  success?: success;
}

export const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant,
      size,
      color,
      fullWidth,
      containerProps,
      label,
      icon,
      className,
      labelProps,
      shrink,
      error,
      errorMessage,
      success,
      ...rest
    },
    ref,
  ) => {
    // 1. init
    const { input } = useTheme();
    const { defaultProps, valid, styles } = input;
    const { base, variants, fullWidth: stylesFullWidth } = styles!;

    // 2. set defaults
    variant = variant ?? defaultProps?.variant;
    size = size ?? defaultProps?.size;
    color = color ?? defaultProps?.color;
    fullWidth = fullWidth ?? defaultProps?.fullWidth;
    shrink = shrink ?? defaultProps?.shrink;
    label = label ?? defaultProps?.label;
    icon = icon ?? defaultProps?.icon;
    className = className ?? defaultProps?.className;
    error = error ?? defaultProps?.error;
    errorMessage = errorMessage ?? defaultProps?.errorMessage;
    success = success ?? defaultProps?.success;

    // 3. styles
    const inputVariant =
      variants[findMatch(valid?.variants, variant, 'outlined')];
    const inputSize = inputVariant?.sizes[findMatch(valid?.sizes, size, 'md')];
    const inputError = objectsToString(inputVariant.colors.input.error);
    const inputSuccess = objectsToString(inputVariant.colors.input.success);
    const inputShrink = objectsToString(inputVariant.shrink);
    const inputColor = objectsToString(
      inputVariant.colors.input[findMatch(valid?.colors, color, 'primary')],
    );
    const inputFullWidth = objectsToString(stylesFullWidth?.container);
    const inputLabelFullWidth = objectsToString(stylesFullWidth?.label);
    const textErrorMessage = objectsToString(inputVariant.errorMessage);

    const labelError = objectsToString(inputVariant.colors.label.error);
    const labelSuccess = objectsToString(inputVariant.colors.label.success);
    const labelShrink = objectsToString(inputVariant.shrink.label);
    const labelColor = objectsToString(
      inputVariant.colors.label[findMatch(valid?.colors, color, 'primary')],
    );

    const containerClasses = twMerge(
      clsx(
        objectsToString(base?.container),
        objectsToString(inputSize.container),
        { [inputFullWidth]: fullWidth },
        containerProps?.className,
      ),
    );
    const inputClasses = twMerge(
      clsx(
        objectsToString(base?.input),
        objectsToString(inputVariant.base.input),
        objectsToString(inputSize.input),
        { [objectsToString(inputVariant.base.inputWithIcon)]: icon },
        { [inputError]: error },
        { [inputSuccess]: success },
        { [inputColor]: !error && !success },
        { [inputShrink]: shrink },
        { [inputFullWidth]: fullWidth },
        className,
      ),
    );

    const labelClasses = twMerge(
      clsx(
        objectsToString(base?.label),
        objectsToString(inputVariant.base.label),
        objectsToString(inputSize.label),
        { [labelError]: error },
        { [labelSuccess]: success },
        { [labelColor]: !error && !success },
        { [labelShrink]: shrink },
        { [inputLabelFullWidth]: fullWidth },
        labelProps?.className,
      ),
    );

    const iconClasses = twMerge(
      clsx(
        objectsToString(base?.icon),
        objectsToString(inputVariant.base.icon),
        objectsToString(inputSize.icon),
      ),
    );

    const asteriskClasses = clsx(objectsToString(base?.asterisk));
    return (
      <div {...containerProps} className={containerClasses}>
        {icon && <div className={iconClasses}>{icon}</div>}
        <input
          className={inputClasses}
          ref={ref}
          placeholder={rest.placeholder || ' '}
          {...rest}
        />
        <label {...labelProps} className={labelClasses}>
          {label}{' '}
          {rest.required ? <span className={asteriskClasses}>*</span> : ''}
        </label>
        {error && errorMessage && (
          <div className={textErrorMessage}>{errorMessage}</div>
        )}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';

export default TextInput;

TextInput.propTypes = {
  variant: PropTypes.oneOf(propTypesVariant),
  size: PropTypes.oneOf(propTypesSize),
  color: PropTypes.oneOf(propTypesColor),
  fullWidth: propTypesFullWidth,
  containerProps: propTypesContainerProps,
  label: propTypesLabel,
  icon: propTypesIcon,
  className: propTypesClassName,
  labelProps: propTypesLabelProps,
  shrink: propTypesShrink,
  error: propTypesError,
  errorMessage: propTypesErrorMessage,
  success: propTypesSuccess,
};
