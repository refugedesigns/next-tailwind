import type {
  animation,
  children,
  transitionDuration,
  className,
  expanded,
  color,
} from '../../../types/components/stepContent';
import stepContentColorsClasses from './colors';

export interface stepContentPropType {
  defaultProps?: {
    animation?: animation;
    children?: children;
    className?: className;
    expanded?: expanded;
    transitionDuration?: transitionDuration;
    color?: color;
  };
  valid?: {
    colors?: string[];
  };
  styles?: {
    base?: {
      initial?: object;
      colors?: typeof stepContentColorsClasses;
    };
    content?: object;
  };
}

const stepContentClasses: stepContentPropType = {
  defaultProps: {
    animation: {},
    children: '',
    className: '',
    expanded: false,
    transitionDuration: undefined,
    color: 'primary',
  },
  valid: {
    colors: Object.keys(stepContentColorsClasses),
  },
  styles: {
    base: {
      initial: {
        marginLeft: 'ml-16',
        paddingLeft: 'pl-4',
        paddingRight: 'ml-[2.7rem]',
        pt: 'pt-2',
        borderLeft: 'border-l',
        maxWidth: 'max-w-xs',
        fontSize: 'text-sm',
        lineHeight: 'leading-3.5',
        textColor: 'text-blue-gray-500 dark:text-blue-gray-50',
      },
      colors: stepContentColorsClasses,
    },
    content: {},
  },
};

export default stepContentClasses;
