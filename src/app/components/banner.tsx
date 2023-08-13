'use client'

import Image from 'next/image'
import styles from './banner.module.css'

import { CategoryTitle } from './categoryTitle'
import { Slider } from './slider'
import { ICategory, IVideo } from '../db'
import Link from 'next/link'
import { CategorySlider } from './categorySlider'
import { useEffect, useState } from 'react'
import { Button } from './button'

interface IBannerProps {
  category: ICategory
  color: string
  slides: IVideo[]
}

export const Banner = ({ category, color, slides }: IBannerProps) => {
  const firstVideo = slides[0]

  const [windowSize, setWindowSize] = useState([0, 0])
  const isMobile = windowSize[0] <= 425

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize([window.innerWidth, window.innerHeight])

      const handleWindowResize = () => {
        setWindowSize([window.innerWidth, window.innerHeight])
      }

      window.addEventListener('resize', handleWindowResize)

      return () => {
        window.removeEventListener('resize', handleWindowResize)
      }
    }
  }, [])

  if (isMobile) {
    return (
      <div className={styles.container}>
        <div className={styles['content-button-wrapper']}>
          <div
            className={styles['content-container']}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.59), rgba(0, 0, 0, 0.59)), url(${firstVideo.imageUrl})`,
            }}
          >
            <h3>{firstVideo.title}</h3>
          </div>
          <Link href={firstVideo.videoUrl} target="_blank">
            <Button variantSize="sm" variantColor="gray-light">
              Assistir
            </Button>
          </Link>
        </div>
        <CategorySlider
          title={category.name}
          color={category.rgbColor}
          subtitle={category.description}
          slides={slides.slice(1)}
        />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div
        className={styles['content-container']}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.59), rgba(0, 0, 0, 0.59)), url(${firstVideo.imageUrl})`,
          borderBottom: `3px solid ${color}`,
        }}
      >
        <div className={styles.content}>
          <div className={styles.info}>
            <CategoryTitle variantSize="md" backgroundColor={color}>
              {category.name}
            </CategoryTitle>
            <Link href={firstVideo.videoUrl} target="_blank">
              <h3>{firstVideo.title}</h3>
              <p>{firstVideo.description}</p>
            </Link>
          </div>
          <div className={styles['content-image']}>
            <Link href={firstVideo.videoUrl} target="_blank">
              <Image
                src={firstVideo.imageUrl}
                alt=""
                layout="fill"
                objectFit="contain"
                style={{ borderColor: `${color}` }}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <Slider slides={slides.slice(1)} borderColor={color} />
      </div>
    </div>
  )
}
