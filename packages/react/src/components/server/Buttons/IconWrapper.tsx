import React, { useMemo } from 'react';
import clsx from 'clsx';

const BASE_CLASSES =
  'w-[24px] h-[24px] inline-flex items-center justify-center';

interface IconWrapperProps extends React.ComponentPropsWithoutRef<'span'> {}

const IconWrapper = React.forwardRef<HTMLSpanElement, IconWrapperProps>(
  ({ children, className, ...rest }, ref) => {
    const classes = useMemo(() => {
      return clsx(BASE_CLASSES, className);
    }, [className]);

    return (
      <span className={classes} {...rest} ref={ref}>
        {children}
      </span>
    );
  },
);

IconWrapper.displayName = 'IconWrapper';

export default IconWrapper;
