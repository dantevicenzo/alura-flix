import { CategoryTitle } from './categoryTitle'
import { ISlide, Slider } from './slider'

import styles from './categorySlider.module.css'

interface ICategorySliderProps {
  title: string
  subtitle?: string
  color: string
}

export const CategorySlider = ({
  title,
  subtitle,
  color,
}: ICategorySliderProps) => {
  const slides: ISlide[] = [
    {
      imageUrl: 'https://img.youtube.com/vi/6IuQUgeDPg0/maxresdefault.jpg',
      borderColor: color,
    },
    {
      imageUrl: 'https://img.youtube.com/vi/kyFiT4ofMwk/maxresdefault.jpg',
      borderColor: color,
    },
    {
      imageUrl: 'https://img.youtube.com/vi/jK0uiQ1ZQQQ/maxresdefault.jpg',
      borderColor: color,
    },
    {
      imageUrl: 'https://img.youtube.com/vi/VVmGrEZoBvM/maxresdefault.jpg',
      borderColor: color,
    },
    {
      imageUrl: 'https://img.youtube.com/vi/scAYB-1ODGk/maxresdefault.jpg',
      borderColor: color,
    },
    {
      imageUrl: 'https://img.youtube.com/vi/slmtdlWNwcE/maxresdefault.jpg',
      borderColor: color,
    },
  ]

  return (
    <div>
      <div className={styles['title-container']}>
        <CategoryTitle
          backgroundColor={color}
          variantSize="sm"
          subtitle={subtitle}
        >
          {title}
        </CategoryTitle>
      </div>
      <Slider slides={slides} />
    </div>
  )
}
