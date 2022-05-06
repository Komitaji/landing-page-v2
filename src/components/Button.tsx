import React from 'react';
import '../styles/button.scss';

export default function Button({ secondary, children }: { secondary?: boolean, children: string }) {
  if (secondary) {
    return <button className="secondary" type="button">{ children }</button>
  }
  return <button className="primary" type="button">{ children }</button>
}