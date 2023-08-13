'use client'

import Image from 'next/image'
import { Button } from './button'
import logo from 'public/logo.png'
import { usePathname } from 'next/navigation'

import styles from './header.module.css'
import Link from 'next/link'

export const Header = () => {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const isCategoryPage =
    pathname === '/adicionar-categoria' || pathname === '/editar-categoria'
  const showNewVideoButton = isHomePage || isCategoryPage

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={logo} alt="" height={40} />
      </Link>
      {showNewVideoButton && (
        <Link href="/adicionar-video">
          <Button variantSize="sm" variantColor="dark">
            Novo vídeo
          </Button>
        </Link>
      )}
    </header>
  )
}
