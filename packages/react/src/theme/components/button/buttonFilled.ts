const buttonFilled: object = {
  primary: {
    background: 'bg-blue-500',
    color: 'text-white',
    hover: 'hover:bg-[#2952CC] hover:cursor-pointer',
    active: 'active:bg-[#1F3D99] active:ring active:ring-[#D6E0FF]',
    focus: 'focus:bg-[#2952CC] focus:ring focus:ring-[#D6E0FF]',
    disabled: 'disabled:bg-[#D6E0FF] disabled:border-0',
  },
  secondary: {
    background: 'bg-white border-2 border-[#D8DAE5]',
    color: 'text-[#8F95B2]',
    hover: 'hover:border-[#8F95B2] hover:text-[#474D66] hover:cursor-pointer',
    active: 'active:border-[#C1C4D6] active:text-[#474D66] active:bg-[#F4F6FA]',
    focus:
      'focus:border-[#C1C4D6] focus:text-[#474D66] focus:ring-2 focus:ring-[#D6E0FF]',
    disabled: 'disabled:text-[#D8DAE5] disabled:bg-[#FFFFFF]',
  },
  minimal: {
    background: `bg-[#E6E8EF] `,
    color: `text-[#696F8C]`,
    hover: `hover:bg-[#F4F6FA] hover:cursor-pointer`,
    active: `active:bg-[#EDEFF5] active:ring active:ring-[#EDEFF5]`,
    focus: `focus:bg-[#E6E8EF] focus:ring focus:ring-[#EDEFF5]`,
    disabled: `disabled:text-[#D8DAE5] disabled:bg-[#EDEFF5]`,
  },
  error: {
    background: `bg-[#D14343]`,
    color: 'text-white',
    hover: `hover:bg-[#A73636] hover:cursor-pointer`,
    active: `active:bg-[#7D2828]`,
    focus: `focus:bg-[#D14343] focus:ring focus:ring-[#F9DADA]`,
    disabled: `disabled:bg-[#F9DADA]`,
  },
};

export default buttonFilled;
