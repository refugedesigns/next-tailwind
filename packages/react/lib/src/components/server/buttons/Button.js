import { jsx as _jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
export const Button = forwardRef(
  ({ disabled, loading, children, ...rest }, ref) => {
    return _jsx('button', {
      className: 'eras-bg-blue-500 eras-text-neutral-0',
      ...rest,
      ref: ref,
      disabled: disabled || loading,
      children: children,
    });
  },
);
Button.displayName = 'ButtonTailwind';
export default Button;
//# sourceMappingURL=Button.js.map
