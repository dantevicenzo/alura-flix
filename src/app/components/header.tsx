import Image from 'next/image'
import { Button } from './button'
import logo from 'public/logo.png'

import styles from './header.module.css'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={logo} alt="" height={40} />
      </Link>
      <Link href="/adicionar-video">
        <Button variantSize="sm" variantColor="dark">
          Novo vídeo
        </Button>
      </Link>
    </header>
  )
}
