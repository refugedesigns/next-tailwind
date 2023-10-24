const appBarGradientClasses: object = {
  transparent: {
    background: 'bg-transparent',
    color: 'text-blue-gray-900',
    boxShadow: 'shadow-none',
  },
  white: {
    background: 'bg-white',
    color: 'text-blue-gray-900',
  },
  primary: {
    background: 'bg-gradient-to-tr from-blue-500 to-blue-400',
    color: 'text-white',
  },
  secondary: {
    background: 'bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400',
    color: 'text-white',
  },
  minimal: {
    background: 'bg-gradient-to-tr from-blue-gray-200 to-blue-gray-50',
    color: 'text-blue-gray-900',
  },
  error: {
    background: 'bg-gradient-to-tr from-red-500 to-red-400',
    color: 'text-white',
  },
  success: {
    background: 'bg-gradient-to-tr from-green-500 to-green-400',
    color: 'text-white',
  },
};

export default appBarGradientClasses;
