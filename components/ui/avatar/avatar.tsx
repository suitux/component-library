import React from 'react'
import styles from './avatar.module.scss'

export const AvatarDefaultColors = [
  '#fb0094',
  '#0000ff',
  '#00ff00',
  '#ffff00',
  '#ff0000',
  '#fb0094',
  '#0000ff',
  '#00ff00',
  '#ffff00',
  '#ff0000'
]

export type AvatarProps = {
  alt: string
  src?: string
  srcSet?: string
  width?: number
  height?: number
  animationDuration?: number
  colors?: string[]
  borderBlur?: number
  borderSize?: number
}

export function Avatar({
  alt,
  src,
  srcSet,
  width,
  height,
  animationDuration = 30,
  colors = AvatarDefaultColors,
  borderBlur = 20,
  borderSize = 4
}: AvatarProps) {
  return (
    <div className={styles.avatar} style={{ width, height: height || width }} data-avatar-width={width}>
      <img src={src} srcSet={srcSet} alt={alt} />
      <div
        className={styles.colors}
        style={{
          animationDuration: `${animationDuration}s`,
          background: `linear-gradient(45deg, ${colors.join(', ')})`,
          backgroundSize: '400%',
          filter: `blur(${borderBlur}px)`,
          width: `calc(100% + ${borderSize}px)`,
          height: `calc(100% + ${borderSize}px)`,
          left: `-${borderSize / 2}px`,
          top: `-${borderSize / 2}px`
        }}
      />
    </div>
  )
}
