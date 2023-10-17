import type { InputVariantStylesType } from '..';
import outlinedClasses from './outlinedColors';
import outlinedLabelClasses from './outlinedLabel';
import outlinedLabelColorsClasses from './outlinedLabelColors';

const inputOutlinedClasses: InputVariantStylesType = {
  base: {
    input: {
      borderWidth: 'placeholder-shown:border',
      floated: {
        borderWidth: 'border focus:border-2 focus:outline-none',
      },
      bg: 'bg-transparent',
      height: 'h-full',
    },
    inputWithIcon: {
      pr: '!pr-9',
    },
    icon: {
      top: 'top-2/4',
      right: 'right-3',
      transform: '-translate-y-2/4',
    },
    label: outlinedLabelClasses,
  },
  sizes: {
    md: {
      container: {
        height: 'h-10',
      },
      input: {
        fontSize: 'text-sm',
        px: 'px-3',
        py: 'py-2.5',
        borderRadius: 'rounded-[7px]',
      },
      label: {
        lineHeight: 'peer-placeholder-shown:leading-3.75',
      },
      icon: {
        width: 'w-5',
        height: 'h-5',
      },
    },
    lg: {
      container: {
        height: 'h-12',
      },
      input: {
        fontSize: 'text-base',
        px: 'px-4',
        py: 'py-3',
        borderRadius: 'rounded-md',
      },
      label: {
        lineHeight: 'peer-placeholder-shown:leading-4.1',
      },
      icon: {
        width: 'w-6',
        height: 'h-6',
      },
    },
  },
  colors: {
    input: outlinedClasses,
    label: outlinedLabelColorsClasses,
  },
  errorMessage: {
    color: 'text-red-400',
    fontSize: 'text-sm',
    fontWeight: 'font-normal',
  },
  shrink: {
    input: {
      // borderTop: '!border-t-transparent',
    },
    label: {
      fontSize: '!text-[11px]',
      lineHeight: '!leading-tight',
    },
  },
};

export default inputOutlinedClasses;
