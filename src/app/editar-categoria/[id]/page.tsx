'use client'

import styles from './page.module.css'
import { DataTable } from '../../components/dataTable'
import { FormCategory } from '../../components/formCategory'
import { ICategory } from '../../db'
import { useContext } from 'react'
import { VideosContext } from '../../../contexts/VideosContextProvider'

interface IEditarCategoriaProps {
  params: {
    id: string
  }
}

const EditarCategoria = ({ params }: IEditarCategoriaProps) => {
  const { editCategory, categoriesList } = useContext(VideosContext)

  const id = params.id
  const categoryToEdit = categoriesList.find((category) => category.id === id)

  function onSubmitAction(category: ICategory) {
    editCategory(category)
  }

  return (
    <main className={styles.main}>
      <FormCategory onSubmitAction={onSubmitAction} values={categoryToEdit} />
      <DataTable />
    </main>
  )
}

export default EditarCategoria
