import Image, { StaticImageData } from 'next/image'
import styles from './banner.module.css'

import playerImg from 'public/player.png'
import { CategoryTitle } from './categoryTitle'

interface IBannerProps {
  category: string
  title: string
  description: string
  image: StaticImageData
  color: string
}

export const Banner = ({
  category,
  title,
  description,
  image,
  color,
}: IBannerProps) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.59), rgba(0, 0, 0, 0.59)), url(${playerImg.src})`,
      }}
    >
      <div className={styles.content}>
        <div className={styles.info}>
          <CategoryTitle variantSize="md" backgroundColor={color}>
            {category}
          </CategoryTitle>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div>
          <Image src={image} alt="" style={{ borderColor: `${color}` }} />
        </div>
      </div>
    </div>
  )
}
