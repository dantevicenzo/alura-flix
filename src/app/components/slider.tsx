'use client'

import styles from './slider.module.css'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export interface ISlide {
  imageUrl: string
}

interface ISliderProps {
  slides: ISlide[]
  borderColor?: string
}

export const Slider = ({ slides, borderColor }: ISliderProps) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3.1,
      spacing: 22,
    },
  })

  return (
    <div className={styles.container}>
      <div ref={ref} className={`keen-slider ${styles.slider}`}>
        {slides.map((slide) => (
          <div
            key={slide.imageUrl}
            className={`keen-slider__slide ${styles['image-slide']}`}
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              border: `${borderColor ? `3px solid ${borderColor}` : 'none'}`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
