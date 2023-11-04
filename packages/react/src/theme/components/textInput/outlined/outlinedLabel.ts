const outlinedLabelClasses = {
  fontSize: 'text-lg peer-placeholder-shown:text-lg peer-valid:text-lg peer-required:text-sm peer-focus:peer-required:text-base peer-valid:peer-required:text-base',
  floated: {
    px: 'peer-focus:px-2 peer-valid:px-2',
    bg: 'peer-valid:bg-white peer-focus:bg-white  peer-focus:dark:!bg-[#333333]',
  },
  translate:
    '-translate-y-5 peer-focus:-translate-y-5 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2',
  top: 'top-2',
  left: 'left-2.5',
  scale:
    'peer-focus:scale-75 peer-placeholder-shown:scale-100 peer-valid:scale-75',
  zIndex: 'z-10',
  origin: 'origin-[0]',
  transitionDuration: 'duration-300',
  transform: 'transform',
};
export default outlinedLabelClasses;
