import clsx from "clsx";

const buttonClasses = {
  'o-primary': 'border border-2 border-indigo-600 p-2 text-indigo-600 rounded hover:bg-indigo-50',
  'o-secondary': 'border border-2 border-teal-500 p-2 text-teal-500 rounded hover:bg-teal-50',
  'o-warning': 'border border-2 border-yellow-500 p-2 text-yellow-500 rounded hover:bg-yellow-50',
  'o-success': 'border border-2 border-green-500 p-2 text-green-500 rounded hover:bg-green-50',
  'o-error': 'border border-2 border-red-500 p-2 text-red-500 rounded hover:bg-red-50',
  'o-info': 'border border-2 border-cyan-500 p-2 text-cyan-500 rounded hover:bg-cyan-50',
  'primary': 'bg-indigo-600 p-2 text-white rounded hover:bg-indigo-700',
  'secondary': 'bg-teal-500 p-2 text-white rounded hover:bg-teal-600',
  'warning': 'bg-yellow-500 p-2 text-white rounded hover:bg-yellow-600',
  'success': 'bg-green-500 p-2 text-white rounded hover:bg-green-600',
  'error': 'bg-red-500 p-2 text-white rounded hover:bg-red-600',
  'info': 'bg-cyan-500 p-2 text-white rounded hover:bg-cyan-600',
}

export default function Button({children, className, theme='primary', disabled=false, ...rest}) {
  return <button className={clsx(buttonClasses[theme], className, disabled && 'bg-gray-400 hover:bg-gray-500')} disabled={disabled} {...rest}>{children}</button>
}
