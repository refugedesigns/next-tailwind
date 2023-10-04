import colors from '../../base/colors';

const buttonText: object = {
  primary: {
    color: 'text-[#3366FF]',
    hover: 'hover:text-[#2952CC] hover:cursor-pointer',
    active: 'active:text-[#1F3D99]',
    focus: 'focus:text-[#2952CC]',
    disabled: 'disabled:text-[#D6E0FF] disabled:cursor-not-allowed',
  },
  secondary: {
    color: 'text-[#D8DAE5]',
    hover: 'hover:text-[#474D66] hover:cursor-pointer',
    active: 'active:text-[#474D66]',
    focus: 'focus:text-[#474D66]',
    disabled: 'disabled:text-[#D8DAE5] disabled:cursor-not-allowed',
  },
  minimal: {
    color: `text-[${colors.text[200]}]`,
    hover: `hover:text-[${colors.minimal[200]}] hover:cursor-pointer`,
    active: `active:text-[${colors.minimal[100]}]`,
    focus: `focus:text-[${colors.minimal[300]}]`,
    disabled: `disabled:text-[${colors.minimal[50]}] disabled:cursor-not-allowed`,
  },
  error: {
    color: `text-[${colors.error[100]}]`,
    hover: `text-[${colors.error[200]}] hover:cursor-pointer`,
    active: `active:text-[${colors.error[300]}]`,
    focus: `focus:text-[${colors.error[200]}] focus:ring focus:ring-[${colors.ring[100]}]`,
    disabled: `disabled:text-[${colors.error[100]}] disabled:cursor-not-allowed`,
  },
};

export default buttonText;
