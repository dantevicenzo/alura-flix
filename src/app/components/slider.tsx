'use client'

import styles from './slider.module.css'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { IVideo } from '../db'
import Link from 'next/link'

interface ISliderProps {
  slides: IVideo[]
  borderColor?: string
}

export const Slider = ({ slides, borderColor }: ISliderProps) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3.1,
      spacing: 22,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 1.1,
          spacing: 8,
        },
      },
    },
  })

  return (
    <div className={styles.container}>
      <div ref={ref} className={`keen-slider ${styles.slider}`}>
        {slides.map((slide) => (
          <Link
            href={slide.videoUrl}
            target="_blank"
            key={slide.imageUrl}
            className={`keen-slider__slide ${styles['image-slide']}`}
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              border: `${borderColor ? `3px solid ${borderColor}` : 'none'}`,
            }}
          ></Link>
        ))}
      </div>
    </div>
  )
}
