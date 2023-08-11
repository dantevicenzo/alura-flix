'use client'

import { ReactNode, createContext, useState } from 'react'
import { ICategory, IVideo, categories, videos } from '../db'

interface IVideosContext {
  videosList: IVideo[]
  categoriesList: ICategory[]
  nonEmptyCategoriesList: ICategory[]
  addVideo: (video: IVideo) => void
  addCategory: (category: ICategory) => void
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

  const nonEmptyCategoriesSet = Array.from(
    new Set(videosList.map((video) => video.category)),
  )
  const nonEmptyCategoriesList = categoriesList.filter((category) =>
    nonEmptyCategoriesSet.includes(category.name),
  )

  function addVideo(video: IVideo) {
    setVideosList((prev) => [...prev, video])
  }

  function addCategory(category: ICategory) {
    setCategoriesList((prev) => [...prev, category])
  }

  return (
    <VideosContext.Provider
      value={{
        videosList,
        categoriesList,
        nonEmptyCategoriesList,
        addVideo,
        addCategory,
      }}
    >
      {children}
    </VideosContext.Provider>
  )
}
