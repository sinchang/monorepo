import * as React from 'react'
import { cn } from 'utils'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const Button = ({
  children,
  className,
  ...props
}: Props) => {
  return (
    <button
      type='button'
      className={cn(
        'text-white ui-bg-blue-700 hover:ui-bg-blue-800 focus:ui-ring-4 focus:ui-ring-blue-300 ui-font-medium ui-rounded-lg ui-text-sm ui-px-5 ui-py-2.5 dark:ui-bg-blue-600 dark:hover:ui-bg-blue-700 focus:ui-outline-none dark:focus:ui-ring-blue-800',
        className
      )}
      {...props}
    >
      {children}
    </button >
  )
}
