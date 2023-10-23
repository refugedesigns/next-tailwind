import type { SelectVariantStylesType } from '..';
import defaultClasses from './defaultColors';
import defaultLabelClasses from './defaultLabel';
import defaultLabelColorsClasses from './defaultLabelColors';

const selectDefautlClasses: SelectVariantStylesType = {
  base: {
    select: {
      borderWidth: 'border',
      floated: {
        borderWidth: 'border focus:border-2 focus:outline-none',
      },
      bg: 'bg-transparent',
      height: 'h-full',
    },
    labelWithIcon: {
      pr: 'left-8',
    },
    icon: {
      top: 'top-[1.1rem]',
      right: 'left-2',
      transform: '-translate-y-2/4',
      display: 'absolute',
      color: 'text-blue-gray-500',
    },
    label: defaultLabelClasses,
  },
  sizes: {
    md: {
      container: {
        height: 'h-10',
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
          open: {},
          withValue: {},
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
          lineHeight: 'leading-4.1 !left-9',
        },
        states: {
          close: {},
          open: {},
          withValue: {},
        },
      },
      icon: {
        width: 'w-5',
        height: 'h-5',
        top: 'top-5'
      },
    },
  },
  colors: {
    select: defaultClasses,
    label: defaultLabelColorsClasses,
  },
  states: {
    close: {
      select: {
        border: 'border',
      },
      label: {
        translate: '-translate-y-2/4 top-1/2 scale-100 text-base',
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
        translate: '-translate-y-1/2  top-2/4 scale-100',
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
        display: 'hidden',
        fontSize: 'text-sm',
        disabled:
          'peer-disabled:cursor-not-allowed peer-disabled:text-blue-gray-400',
      },
    },
  },
};

export default selectDefautlClasses;
