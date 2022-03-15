const ButtonVariant = {
  normal: `cursor-pointer inline-flex items-center border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2  `,
  rounded: `cursor-pointer inline-flex items-center border border-transparent rounded-full shadow-sm`,
  circle: `cursor-pointer inline-flex items-center border border-transparent rounded-full shadow-sm`,
  outline: ``,
};
const ButtonColor = {
  primary: `text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500`,
  success: `text-white bg-green-600 hover:bg-green-700 focus:ring-green-500`,
  warning: `text-gray-900 bg-amber-600 hover:bg-amber-700 focus:ring-amber-500`,
  error: `text-white bg-red-600 hover:bg-red-700 focus:ring-red-500`,
  secondary: `text-blue-900 bg-blue-100 hover:bg-blue-200 focus:ring-blue-200`,
};
const ButtonSize = {
  sm: `py-1.5 px-2.5 text-xs`,
  md: `py-2 px-4 text-sm`,
  lg: `py-3 px-6 text-base`,
};

const ButtonDisabled = {
  normal: `bg-gray-400 text-white cursor-auto inline-flex items-center border border-transparent rounded-md`,
  rounded: `bg-gray-400 text-white cursor-auto inline-flex items-center border border-transparent rounded-full`,
  circle: `bg-gray-400 text-white cursor-auto inline-flex items-center border border-transparent rounded-full`,
  outline: `text-gray-400 cursor-auto`,
};

export { ButtonVariant, ButtonSize, ButtonDisabled, ButtonColor };
