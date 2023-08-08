import * as React from 'react'
import { cn } from 'utils'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, type = 'text', ...props }: Props) => {
  return (
    <input
      type={type}
      className={cn(
        'bg-gray-50 ui-border ui-border-gray-300 ui-text-gray-900 ui-text-sm ui-rounded-lg focus:ui-ring-blue-500 focus:ui-border-blue-500 ui-block ui-w-full ui-p-2.5 dark:ui-bg-gray-700 dark:ui-border-gray-600 dark:ui-placeholder-gray-400 dark:ui-text-white dark:focus:ui-ring-blue-500 dark:focus:ui-border-blue-500',
        className
      )}
      {...props}
    ></input>
  )
}
