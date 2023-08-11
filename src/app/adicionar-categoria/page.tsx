import styles from './page.module.css'
import { DataTable } from '../components/dataTable'
import { AdicionarCategoriaForm } from '../components/adicionarCategoriaForm'

const AdicionarCategoria = () => {
  return (
    <main className={styles.main}>
      <AdicionarCategoriaForm />
      <DataTable />
    </main>
  )
}

export default AdicionarCategoria
