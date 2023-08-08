'use client'

import Image, { StaticImageData } from 'next/image'
import styles from './banner.module.css'

import playerImg from 'public/player.png'
import { CategoryTitle } from './categoryTitle'
import { ISlide, Slider } from './slider'

interface IBannerProps {
  category: string
  title: string
  description: string
  image: StaticImageData
  color: string
  slides: ISlide[]
}

export const Banner = ({
  category,
  title,
  description,
  image,
  color,
  slides,
}: IBannerProps) => {
  return (
    <div className={styles.container}>
      <div
        className={styles['content-container']}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.59), rgba(0, 0, 0, 0.59)), url(${playerImg.src})`,
          borderBottom: `3px solid ${color}`,
        }}
      >
        <div className={styles.content}>
          <div className={styles.info}>
            <CategoryTitle variantSize="md" backgroundColor={color}>
              {category}
            </CategoryTitle>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div>
            <Image src={image} alt="" style={{ borderColor: `${color}` }} />
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <Slider slides={slides} borderColor={color} />
      </div>
    </div>
  )
}
