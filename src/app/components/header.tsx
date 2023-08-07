import Image from 'next/image'
import { Button } from './button'
import logo from 'public/logo.png'

import styles from './header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={logo} alt="" height={40} />
      <Button variantSize="sm" variantColor="dark">
        Novo vídeo
      </Button>
    </header>
  )
}
