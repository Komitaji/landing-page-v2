import React from 'react';
import '../styles/button.scss';

export default function Button({ secondary, children, style }: { secondary?: boolean, children: string, style?: Record<string, string>}) {
  if (secondary) {
    return <button className='secondary' type='button' style={style}>{ children }</button>
  }
  return <button className='primary' type='button' style={style}>{ children }</button>
}