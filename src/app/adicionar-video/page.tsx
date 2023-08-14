'use client'

import styles from './page.module.css'

import { FormVideo } from '../components/formVideo'
import { IVideo } from '../db'
import { useContext } from 'react'
import { VideosContext } from '../../contexts/VideosContextProvider'

const AdicionarVideo = () => {
  const { addVideo } = useContext(VideosContext)

  function onSubmitAddNewVideo(video: IVideo) {
    addVideo(video)
  }

  return (
    <main className={styles.main}>
      <FormVideo onSubmitAction={onSubmitAddNewVideo} />
    </main>
  )
}

export default AdicionarVideo
