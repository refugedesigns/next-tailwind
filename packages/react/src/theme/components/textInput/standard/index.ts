import type { InputVariantStylesType } from '..';
import standardClasses from './standardColors';
import standardLabelClasses from './standardLabel';
import standardLabelColorsClasses from './standardLabelColors';

const inputOutlinedClasses: InputVariantStylesType = {
  base: {
    input: {
      borderWidth: 'placeholder-shown:border-b-2',
      floated: {
        borderWidth: 'border-b focus:border-b-2 focus:outline-none',
      },
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
    label: standardLabelClasses,
  },
  sizes: {
    md: {
      container: {
        height: 'h-11',
      },
      input: {
        fontSize: 'text-sm',
        py: 'py-3',
        pb: 'pb-1',
        borderRadius: 'rounded-t-[7px]',
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
        py: 'py-3',
      },
      label: {
        lineHeight: 'peer-placeholder-shown:leading-4.1',
        translate: 'top-1/2 -translate-y-1/2',
      },
      icon: {
        width: 'w-6',
        height: 'h-6',
      },
    },
  },
  colors: {
    input: standardClasses,
    label: standardLabelColorsClasses,
  },
  errorMessage: {
    color: 'text-red-400',
    fontSize: 'text-sm',
    fontWeight: 'font-normal',
  },
  shrink: {
    input: {},
    label: {},
  },
};

export default inputOutlinedClasses;
