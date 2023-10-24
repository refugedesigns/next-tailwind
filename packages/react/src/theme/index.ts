import button from './components/button';
import iconWrapperClasses from './components/iconWrapper';
import input from './components/textInput';
import selectClasses from './components/select';
import typographyClasses from './components/Typography';

const theme = {
  button,
  iconWrapper: iconWrapperClasses,
  input,
  select: selectClasses,
  typography: typographyClasses,
};

export * from './components/button';
export * from './components/iconWrapper';
export * from './components/textInput';
export * from './components/select';
export * from './components/Typography';

export default theme;
