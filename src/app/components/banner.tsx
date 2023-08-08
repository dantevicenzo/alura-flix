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
}

export const Banner = ({
  category,
  title,
  description,
  image,
  color,
}: IBannerProps) => {
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
        <Slider slides={slides} />
      </div>
    </div>
  )
}
