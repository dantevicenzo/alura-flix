'use client'

import Image from 'next/image'
import styles from './footer.module.css'
import logo from 'public/logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const Footer = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ])

  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const isMobile = windowSize[0] <= 425
  const showMobileAddNewVideo = isHomePage && isMobile

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  if (showMobileAddNewVideo) {
    return (
      <footer className={styles.btn}>
        <Link href="/adicionar-video">Novo vídeo</Link>
      </footer>
    )
  }

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
