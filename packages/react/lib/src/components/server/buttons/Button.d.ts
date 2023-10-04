/// <reference types="react" />
export interface ButtonProps extends React.ComponentProps<'button'> {
  /** If button is in disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
}
export declare const Button: import('react').ForwardRefExoticComponent<
  Omit<ButtonProps, 'ref'> & import('react').RefAttributes<HTMLButtonElement>
>;
export default Button;
