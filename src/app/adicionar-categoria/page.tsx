'use client'

import styles from './page.module.css'
import { DataTable } from '../components/dataTable'
import { FormCategory } from '../components/formCategory'
import { useContext } from 'react'
import { VideosContext } from '../../contexts/VideosContextProvider'
import { ICategory } from '../db'

const AdicionarCategoria = () => {
  const { addCategory } = useContext(VideosContext)

  function onSubmitAction(category: ICategory) {
    addCategory(category)
  }

  return (
    <main className={styles.main}>
      <FormCategory onSubmitAction={onSubmitAction} />
      <DataTable />
    </main>
  )
}

export default AdicionarCategoria
