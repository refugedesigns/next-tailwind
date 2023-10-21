import type { SelectVariantStylesType } from '..';
import outlinedClasses from './outlinedColors';
import outlinedLabelClasses from './outlinedLabel';
import outlinedLabelColorsClasses from './outlinedLabelColors';

const selectOutlinedClasses: SelectVariantStylesType = {
  base: {
    select: {
      borderWidth: 'border',
      floated: {
        borderWidth: 'border focus:border-2 focus:outline-none',
      },
      bg: 'bg-transparent',
      height: 'h-full',
    },
    selectWithIcon: {
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
        height: 'h-9',
      },
      select: {
        fontSize: 'text-sm',
        px: 'px-3',
        py: 'py-2.5',
        borderRadius: 'rounded-[7px]',
      },
      label: {
        initial: {
          lineHeight: 'leading-3.75',
        },
        states: {
          close: {},
          open: {
            translate: '-translate-y-1/2 top-1/2 scale-100 text-base',
          },
          withValue: {
            translate: '-translate-y-6 top-1/2 scale-75 text-base',
          },
        },
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
      select: {
        fontSize: 'text-base',
        px: 'px-4',
        py: 'py-3',
        borderRadius: 'rounded-md',
      },
      label: {
        initial: {
          lineHeight: 'leading-4.1',
        },
        states: {
          close: {},
          open: {
            translate: '-translate-y-6 top-1/2 scale-100 text-base',
          },
          withValue: {},
        },
      },
      icon: {
        width: 'w-6',
        height: 'h-6',
      },
    },
  },
  colors: {
    select: outlinedClasses,
    label: outlinedLabelColorsClasses,
  },
  states: {
    close: {
      select: {
        border: 'border',
      },
      label: {
        translate: '-translate-y-2/4 top-2/4 scale-100 text-base',
        fontSize: 'text-sm',
        disabled:
          'peer-disabled:cursor-not-allowed peer-disabled:text-blue-gray-400',
      },
    },
    open: {
      select: {
        border: 'border-2',
      },
      label: {
        translate: '-translate-y-6  top-2/4 scale-75 text-base bg-white px-px',
        fontSize: 'text-sm',
        disabled:
          'peer-disabled:cursor-not-allowed peer-disabled:text-blue-gray-400',
      },
    },
    withValue: {
      select: {
        border: 'border-2',
      },
      label: {
        translate: '-translate-y-6 top-1/2 scale-75 text-base bg-white px-px',
        fontSize: 'text-sm',
        disabled:
          'peer-disabled:cursor-not-allowed peer-disabled:text-blue-gray-400',
      },
    },
  },
};

export default selectOutlinedClasses;
