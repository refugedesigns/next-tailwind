import { size, children, className } from 'types/components/iconWrappter';

export interface IconStyleTypes {
  defaultProps?: {
    size?: size;
    className?: className;
    children?: children;
  };
  valid?: {
    sizes?: string[];
    colors?: string[];
  };
  styles?: {
    base?: {
      initial: object;
    };
    sizes?: {
      sm?: object;
      md?: object;
      lg?: object;
    };
  };
}

const iconWrapperClasses: IconStyleTypes = {
  defaultProps: {
    size: 'md',
    className: '',
    children: '',
  },
  valid: {
    sizes: ['sm', 'md', 'lg'],
  },
  styles: {
    base: {
      initial: {
        display: 'inline-flex',
        verticalAlign: 'align-middle',
        alignItems: 'items-center ',
        selfAling: 'self-center',
        color: 'text-inherit',
      },
    },
    sizes: {
      sm: {
        px: '',
        pr: '',
      },
      md: {
        py: '',
        px: '',
      },
      lg: {
        fontSize: '',
        py: '',
        px: '',
      },
    },
  },
};

export default iconWrapperClasses;
