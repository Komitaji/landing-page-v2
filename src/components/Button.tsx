import React from 'react';
import styles from '../styles/button.module.scss';

export default function Button({ secondary, children, style, onClick }: { secondary?: boolean, children: string, style?: Record<string, string>, onClick?: React.MouseEventHandler<HTMLButtonElement>}) {
  if (secondary) {
    return <button className={styles.secondary} type='button' style={style} onClick={onClick}>{ children }</button>
  }
  return <button className={styles.primary} type='button' style={style} onClick={onClick}>{ children }</button>
}