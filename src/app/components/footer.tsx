'use client'

import Image from 'next/image'
import styles from './footer.module.css'
import logo from 'public/logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const Footer = () => {
  const [windowSize, setWindowSize] = useState([0, 0])

  if (typeof window !== 'undefined') {
    setWindowSize([window.innerWidth, window.innerHeight])
  }

  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const isMobile = windowSize[0] <= 425
  const showMobileAddNewVideo = isHomePage && isMobile

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleWindowResize = () => {
        setWindowSize([window.innerWidth, window.innerHeight])
      }

      window.addEventListener('resize', handleWindowResize)

      return () => {
        window.removeEventListener('resize', handleWindowResize)
      }
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
