'use client'

import { Banner } from './components/banner'
import { CategorySlider } from './components/categorySlider'
import styles from './page.module.css'

import { useContext } from 'react'
import { VideosContext } from '../contexts/VideosContextProvider'

export default function Home() {
  const { videosList, nonEmptyCategoriesList } = useContext(VideosContext)

  const bannerCategory = nonEmptyCategoriesList.find(
    (category) => category.isBanner,
  )
  const sliderCategories = nonEmptyCategoriesList.filter(
    (category) => !category.isBanner,
  )

  return (
    <main className={styles.main}>
      {bannerCategory && (
        <Banner
          category={bannerCategory}
          color={bannerCategory.rgbColor}
          slides={videosList.filter(
            (video) => video.category === bannerCategory.name,
          )}
        />
      )}
      {sliderCategories.map((category) => {
        return (
          <CategorySlider
            key={category.name}
            title={category.name}
            color={category.rgbColor}
            subtitle={category.description}
            slides={videosList.filter(
              (video) => video.category === category.name,
            )}
          />
        )
      })}
    </main>
  )
}
