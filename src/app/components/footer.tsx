import Image from 'next/image'
import styles from './footer.module.css'
import logo from 'public/logo.png'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <Image src={logo} height={60} alt="" />
      </Link>
    </footer>
  )
}
