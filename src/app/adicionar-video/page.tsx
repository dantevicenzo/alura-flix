import styles from './page.module.css'

import { AdicionarVideoForm } from '../components/adicionarVideoForm'

const AdicionarVideo = () => {
  return (
    <main className={styles.main}>
      <AdicionarVideoForm />
    </main>
  )
}

export default AdicionarVideo
