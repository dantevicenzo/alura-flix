import { ReactNode } from 'react'

import styles from './categoryTitle.module.css'

interface ICategoryTitleProps {
  children: ReactNode
  backgroundColor: string
  variantSize: 'sm' | 'md'
}

export const CategoryTitle = ({
  children,
  backgroundColor,
  variantSize,
}: ICategoryTitleProps) => {
  return (
    <h2
      className={`${styles.title} ${styles[variantSize]}`}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      {children}
    </h2>
  )
}
