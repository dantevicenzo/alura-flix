import Image from 'next/image'
import styles from './footer.module.css'
import logo from 'public/logo.png'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image src={logo} height={60} alt="" />
    </footer>
  )
}
