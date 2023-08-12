'use client'

import { ReactNode, createContext, useState } from 'react'
import { ICategory, IVideo, categories, videos } from '../db'

interface IVideosContext {
  videosList: IVideo[]
  categoriesList: ICategory[]
  nonEmptyCategoriesList: ICategory[]
  addVideo: (video: IVideo) => void
  addCategory: (category: ICategory) => void
  editCategory: (category: ICategory) => void
  removeCategory: (category: ICategory) => void
}

export const VideosContext = createContext({} as IVideosContext)

interface IVideosContextProviderProps {
  children: ReactNode
}

export function VideosContextProvider({
  children,
}: IVideosContextProviderProps) {
  const [videosList, setVideosList] = useState(videos)
  const [categoriesList, setCategoriesList] = useState(categories)

  const [nonEmptyCategoriesList, setNonEmptyCategoriesList] = useState(
    getNonEmptyCategoriesList(videosList, categoriesList),
  )

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

  function addVideo(video: IVideo) {
    setVideosList((prev) => [...prev, video])
  }

  function addCategory(category: ICategory) {
    const newCategoriesList = [...categoriesList, category]
    const newNonEmptyCategoriesList = getNonEmptyCategoriesList(
      videosList,
      newCategoriesList,
    )
    setCategoriesList(newCategoriesList)
    setNonEmptyCategoriesList(newNonEmptyCategoriesList)
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

    const newNonEmptyCategoriesList = getNonEmptyCategoriesList(
      newVideosList,
      newCategoriesList,
    )

    setCategoriesList(newCategoriesList)
    setVideosList(newVideosList)
    setNonEmptyCategoriesList(newNonEmptyCategoriesList)
  }

  function removeCategory(category: ICategory) {
    const newCategoryList = categoriesList.filter(
      (cat) => cat.id !== category.id,
    )
    setCategoriesList(newCategoryList)
    const newNonEmptyCategoriesList = getNonEmptyCategoriesList(
      videosList,
      newCategoryList,
    )
    setNonEmptyCategoriesList(newNonEmptyCategoriesList)
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
      }}
    >
      {children}
    </VideosContext.Provider>
  )
}
