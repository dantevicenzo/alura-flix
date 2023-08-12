'use client'

import Image from 'next/image'
import styles from './banner.module.css'

import playerImg from 'public/player.png'
import { CategoryTitle } from './categoryTitle'
import { Slider } from './slider'
import { IVideo } from '../db'
import Link from 'next/link'

interface IBannerProps {
  category: string
  color: string
  slides: IVideo[]
}

export const Banner = ({ category, color, slides }: IBannerProps) => {
  const firstVideo = slides[0]

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
            <Link href={firstVideo.videoUrl} target="_blank">
              <h3>{firstVideo.title}</h3>
              <p>{firstVideo.description}</p>
            </Link>
          </div>
          <Link href={firstVideo.videoUrl} target="_blank">
            <Image
              src={firstVideo.imageUrl}
              alt=""
              width={646}
              height={333}
              style={{ borderColor: `${color}` }}
            />
          </Link>
        </div>
      </div>
      <div className={styles.slider}>
        <Slider slides={slides.slice(1)} borderColor={color} />
      </div>
    </div>
  )
}
