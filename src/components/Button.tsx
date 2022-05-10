import React from 'react';
import styles from '../styles/button.module.scss';

export default function Button({ secondary, children, style }: { secondary?: boolean, children: string, style?: Record<string, string>}) {
  if (secondary) {
    return <button className={styles.secondary} type='button' style={style}>{ children }</button>
  }
  return <button className={styles.primary} type='button' style={style}>{ children }</button>
}