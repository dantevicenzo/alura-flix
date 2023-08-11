import { CategoryTitle } from './categoryTitle'
import { Slider } from './slider'

import styles from './categorySlider.module.css'
import { IVideo } from '../db'

interface ICategorySliderProps {
  title: string
  subtitle?: string
  color: string
  slides: IVideo[]
}

export const CategorySlider = ({
  title,
  subtitle,
  color,
  slides,
}: ICategorySliderProps) => {
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
      <Slider slides={slides} borderColor={color} />
    </div>
  )
}
