import { ReactNode } from 'react'

import styles from './categoryTitle.module.css'

interface ICategoryTitleProps {
  children: ReactNode
  backgroundColor: string
  variantSize: 'sm' | 'md'
  subtitle?: string
}

export const CategoryTitle = ({
  children,
  backgroundColor,
  variantSize,
  subtitle,
}: ICategoryTitleProps) => {
  return (
    <div className={styles.container}>
      <h2
        className={`${styles.title} ${styles[variantSize]}`}
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        {children}
      </h2>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
    </div>
  )
}
