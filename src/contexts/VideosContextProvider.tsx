'use client'

import { ReactNode, createContext, useEffect, useState } from 'react'
import { ICategory, IVideo, categories, videos } from '../app/db'
import {
  getLocalStorageWithExpiryDate,
  setLocalStorageWithExpiryDate,
} from '@/lib/utils'

interface IVideosContext {
  videosList: IVideo[]
  categoriesList: ICategory[]
  nonEmptyCategoriesList: ICategory[]
  addVideo: (video: IVideo) => void
  addCategory: (category: ICategory) => void
  editCategory: (category: ICategory) => void
  removeCategory: (category: ICategory) => void
  toggleCategoryisBanner: (category: ICategory) => void
  getQtdVideosByCategory: (category: ICategory) => number
}

export const VideosContext = createContext({} as IVideosContext)

interface IVideosContextProviderProps {
  children: ReactNode
}

export function VideosContextProvider({
  children,
}: IVideosContextProviderProps) {
  const [videosList, setVideosList] = useState<IVideo[]>([])
  const [categoriesList, setCategoriesList] = useState<ICategory[]>([])

  const [nonEmptyCategoriesList, setNonEmptyCategoriesList] = useState(
    getNonEmptyCategoriesList(videosList, categoriesList),
  )

  useEffect(() => {
    const storedVideos = getLocalStorageWithExpiryDate(
      '@alura-flix:videos-list-1.0.0',
    ) as IVideo[] | null

    const storedCategories = getLocalStorageWithExpiryDate(
      '@alura-flix:categories-list-1.0.0',
    ) as ICategory[] | null

    const videosListToLoad = storedVideos || videos
    const categoriesListToLoad = storedCategories || categories

    const nonEmptyCategoriesListToLoad = getNonEmptyCategoriesList(
      videosListToLoad,
      categoriesListToLoad,
    )

    setVideosList(videosListToLoad)
    setCategoriesList(categoriesListToLoad)
    setNonEmptyCategoriesList(nonEmptyCategoriesListToLoad)
  }, [])

  useEffect(() => {
    setLocalStorageWithExpiryDate(
      '@alura-flix:videos-list-1.0.0',
      videosList,
      30 * 60 * 1000, // 30 minutos em milissegundos
    )
  }, [videosList])

  useEffect(() => {
    setLocalStorageWithExpiryDate(
      '@alura-flix:categories-list-1.0.0',
      categoriesList,
      30 * 60 * 1000, // 30 minutos em milissegundos
    )
  }, [categoriesList])

  function getNonEmptyCategoriesList(
    videosList: IVideo[],
    categoriesList: ICategory[],
  ) {
    const nonEmptyCategoriesSet = Array.from(
      new Set(videosList.map((video) => video.category)),
    )
    return categoriesList.filter((category) =>
      nonEmptyCategoriesSet.includes(category.name),
    )
  }

  function updateNonEmptyCategoriesList(
    videosList: IVideo[],
    categoriesList: ICategory[],
  ) {
    const nonEmptyCategoriesSet = Array.from(
      new Set(videosList.map((video) => video.category)),
    )
    setNonEmptyCategoriesList(
      categoriesList.filter((category) =>
        nonEmptyCategoriesSet.includes(category.name),
      ),
    )
  }

  function addVideo(video: IVideo) {
    const newVideosList = [...videosList, video]
    setVideosList(newVideosList)
    updateNonEmptyCategoriesList(newVideosList, categoriesList)
  }

  function addCategory(category: ICategory) {
    const newCategoriesList = [...categoriesList, category]
    setCategoriesList(newCategoriesList)
    updateNonEmptyCategoriesList(videosList, newCategoriesList)
  }

  function editCategory(category: ICategory) {
    const oldCategory = categoriesList.find((cat) => cat.id === category.id)

    const newCategoriesList = categoriesList.map((cat) =>
      cat.id === category.id ? category : cat,
    )

    const newVideosList = videosList.map((video) =>
      video.category === oldCategory?.name
        ? { ...video, category: category.name }
        : video,
    )

    setCategoriesList(newCategoriesList)
    setVideosList(newVideosList)
    updateNonEmptyCategoriesList(newVideosList, newCategoriesList)
  }

  function removeCategory(category: ICategory) {
    const newCategoryList = categoriesList.filter(
      (cat) => cat.id !== category.id,
    )
    setCategoriesList(newCategoryList)
    updateNonEmptyCategoriesList(videosList, newCategoryList)
  }

  function toggleCategoryisBanner(category: ICategory) {
    const newCategoryList = categoriesList.map((cat) =>
      cat.id === category.id
        ? { ...cat, isBanner: true }
        : { ...cat, isBanner: false },
    )
    setCategoriesList(newCategoryList)
    updateNonEmptyCategoriesList(videosList, newCategoryList)
  }

  function getQtdVideosByCategory(category: ICategory) {
    return videosList.filter((video) => video.category === category.name).length
  }

  return (
    <VideosContext.Provider
      value={{
        videosList,
        categoriesList,
        nonEmptyCategoriesList,
        addVideo,
        addCategory,
        editCategory,
        removeCategory,
        toggleCategoryisBanner,
        getQtdVideosByCategory,
      }}
    >
      {children}
    </VideosContext.Provider>
  )
}
