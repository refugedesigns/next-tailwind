import type {
  placement,
  dismiss,
  offset,
  animate,
  lockScroll,
  divide,
  allowHover,
} from '../../../types/components/menu';

export interface MenuStylesType {
  defaultProps?: {
    placement?: placement;
    dismiss?: dismiss;
    offset?: offset;
    animate?: animate;
    lockScroll?: lockScroll;
    divide?: divide;
    allowHover?: allowHover;
  };
  styles?: {
    base?: {
      menu?: object;
      item?: {
        initial?: object;
        disabled?: object;
      };
    };
  };
}

const menuClasses: MenuStylesType = {
  defaultProps: {
    placement: 'bottom',
    dismiss: {
      itemPress: true,
    },
    offset: 5,
    animate: {},
    lockScroll: false,
    divide: false,
    allowHover: false,
  },

  styles: {
    base: {
      menu: {
        bg: 'bg-white',
        minWidth: 'min-w-[180px]',
        border: 'border border-blue-gray-50',
        borderRadius: 'rounded-md',
        boxShadow: 'shadow-lg shadow-blue-gray-500/10',
        fontFamily: 'font-sans',
        fontSize: 'text-sm',
        fontWeight: 'font-normal',
        color: 'text-blue-gray-500',
        overflow: 'overflow-auto',
        outline: 'focus:outline-none',
        zIndex: 'z-[999]',
      },
      item: {
        initial: {
          display: 'block',
          px: 'px-4',
          py: 'py-2.5',
          cursor: 'cursor-pointer',
          width: 'w-full',
          listNone: 'list-none',
          userSelect: 'select-none',
          textAlign: 'text-start',
          lineHeight: 'leading-tight',
          transition: 'transition-all',
          bg: 'hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80',
          color:
            'hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900',
          outline: 'outline-none focus:outline-none',
        },
        disabled: {
          cursor: 'cursor-not-allowed',
          opacity: 'opacity-50',
          pointerEvents: 'pointer-events-none',
          userSelect: 'select-none',
          bg: 'hover:bg-transparent focus:bg-transparent active:bg-transparent',
          color:
            'hover:text-blue-gray-500 focus:text-blue-gray-500 active:text-blue-gray-500',
        },
      },
    },
  },
};

export default menuClasses;
