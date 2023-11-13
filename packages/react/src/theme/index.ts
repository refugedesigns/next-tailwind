import button from './components/button';
import iconWrapperClasses from './components/iconWrapper';
import input from './components/textInput';
import selectClasses from './components/select';
import typographyClasses from './components/Typography';
import appBarClasses from './components/appBar';
import stepperClasses from './components/stepper';
import SvgColorsClasses from './components/svgIcon';
import mobileStepperClasses from './components/mobileStepper';
import menuClasses from './components/menu';

const theme = {
  button,
  iconWrapper: iconWrapperClasses,
  input,
  select: selectClasses,
  typography: typographyClasses,
  appBar: appBarClasses,
  stepper: stepperClasses,
  svg: SvgColorsClasses,
  mobileStepper: mobileStepperClasses,
  menu: menuClasses,
};

export * from './components/button';
export * from './components/iconWrapper';
export * from './components/textInput';
export * from './components/select';
export * from './components/Typography';
export * from './components/appBar';
export * from './components/stepper';
export * from './components/svgIcon';
export * from './components/mobileStepper';
export * from './components/menu';

export default theme;
