import Image from 'next/image'
import styles from './footer.module.css'
import logo from 'public/logo.png'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} layout="fill" objectFit="contain" alt="" />
        </Link>
      </div>
    </footer>
  )
}
