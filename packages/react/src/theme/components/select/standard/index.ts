import type { SelectVariantStylesType } from '..';
import standardClasses from './standardColors';
import standardLabelClasses from './standardLabel';
import standardLabelColorsClasses from './standardLabelColors';

const selectStandardClasses: SelectVariantStylesType = {
  base: {
    select: {
      borderWidth: 'border-b',
      floated: {
        borderWidth: 'border-b focus:border-b-2 focus:outline-none',
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
    label: standardLabelClasses,
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
          close: {
            translate: '-translate-y-1/4 top-2/4 scale-100',
          },
          open: {
            translate: '-translate-y-6',
          },
          withValue: {
            translate: '-translate-y-6 bg-transparent',
          },
        },
      },
      icon: {
        width: 'w-5',
        height: 'h-5',
        top: 'top-1/2',
      },
    },
  },
  colors: {
    select: standardClasses,
    label: standardLabelColorsClasses,
  },
  states: {
    close: {
      select: {
        border: 'border-b rounded-none',
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
        border: 'border-b-2 rounded-none',
      },
      label: {
        translate: '-translate-y-7  top-2/4 scale-75 text-base px-px',
        fontSize: 'text-sm',
        disabled:
          'peer-disabled:cursor-not-allowed peer-disabled:text-blue-gray-400',
      },
    },
    withValue: {
      select: {
        border: 'border-b-2 rounded-none',
      },
      label: {
        translate: '-translate-y-7 top-1/2 scale-75 text-base  px-px',
        fontSize: 'text-sm',
        disabled:
          'peer-disabled:cursor-not-allowed peer-disabled:text-blue-gray-400',
      },
    },
  },
};

export default selectStandardClasses;
