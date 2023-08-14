import { ButtonHTMLAttributes, ReactNode } from 'react'

import styles from './button.module.css'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variantColor: 'blue' | 'dark' | 'gray' | 'gray-light' | 'transparent'
  variantSize: 'sm' | 'md' | 'icon'
}

export const Button = ({
  children,
  variantColor,
  variantSize,
  ...props
}: IButtonProps) => {
  return (
    <button
      {...props}
      className={`${styles.button} ${styles[variantColor]} ${styles[variantSize]}`}
    >
      {children}
    </button>
  )
}
