'use client';
import React from 'react';
import SvgIcon from '../SvgIcon';

const createSvgIcon = (path, displayName) => {
  function Component(props, ref) {
    return (
      <SvgIcon data-testid={`${displayName}Icon`} {...props} ref={ref}>
        {path}
      </SvgIcon>
    );
  }
  if (process.env.NODE_ENV !== 'production') {
    Component.displayName = `${displayName}Icon`;
  }

  return React.memo(React.forwardRef(Component));
};

export default createSvgIcon;
