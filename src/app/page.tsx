import { Banner } from './components/banner'
import { CategorySlider } from './components/categorySlider'
import styles from './page.module.css'
import playerImg from 'public/player.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner
        category="Front End"
        title="SEO com React"
        description="Esse desafio é uma forma de aprendizado. É um mecanismo onde você
            pode se engajar na resolução de um problema para poder aplicar todo
            o conhecimento adquirido na Formação React."
        image={playerImg}
        color="#6BD1FF"
      />
      <CategorySlider
        title="Data Science"
        color="#69953B"
        subtitle="Formação Data Science na Alura"
      />
      <CategorySlider
        title="Mobile"
        color="#FFBA05"
        subtitle="Formação Mobile da Alura"
      />
    </main>
  )
}
