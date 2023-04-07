import React from 'react'
import styles from './header.module.css'

export function MobileHeader({left, center, right, background}) {
  return (
    <div className={styles.container} style={{background:background}}>
      <div className={styles.left}>{left}</div>
      <div className={styles.center}>{center}</div>
      <div className={styles.right}>{right}</div>
    </div>
  )
}
