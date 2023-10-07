import colors from '../../base/colors';

const buttonOutlined: object = {
  primary: {
    border: 'border-2 border-[#3366FF]',
    color: 'text-[#3366FF]',
    hover: 'hover:border-[#2952CC] hover:text-[#2952CC] hover:cursor-pointer',
    active: 'active:border-[#1F3D99] active:text-[#1F3D99]',
    focus: 'focus:border-[#2952CC] focus:text-[#2952CC]',
    disabled:
      'disabled:border-[#D6E0FF] disabled:text-[#D6E0FF] disabled:cursor-not-allowed',
  },
  secondary: {
    border: 'border-2 border-[#D8DAE5]',
    color: 'text-[#D8DAE5]',
    hover: 'hover:border-[#8F95B2] hover:text-[#474D66] hover:cursor-pointer',
    active: 'active:border-[#C1C4D6] active:text-[#474D66]',
    focus: 'focus:border-[#C1C4D6] focus:text-[#474D66]',
    disabled:
      'disabled:border-[#D8DAE5] disabled:text-[#D8DAE5] disabled:cursor-not-allowed',
  },
  minimal: {
    border: `border-2 border-[#696F8C]`,
    color: `text-[#696F8C]`,
    hover: `hover:border-[#D8DAE5] hover:text-[#D8DAE5] hover:cursor-pointer`,
    active: `active:border-[#f4f7fb] active:text-[#f4f7fb]`,
    focus: `focus:border-[#fafbff] focus:text-[#fafbff]`,
    disabled: `disabled:text-[#f4f7fb] disabled:border-[#f4f7fb] disabled:cursor-not-allowed`,
  },
  error: {
    color: `text-[#D14343]`,
    border: `border-2 border-[#D14343]`,
    hover: `hover:border-[#A73636] hover:text-[#A73636] hover:cursor-pointer`,
    active: `active:border-[#7D2828] active:text-[#7D2828]`,
    focus: `focus:border-[#D14343}] focus:text-[#D14343]`,
    disabled: `disabled:border-[#F9DADA] disabled:text-[#F9DADA] disabled:cursor-not-allowed`,
  },
};

export default buttonOutlined;
