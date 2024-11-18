// import React, { useState } from 'react'
import S from './Select.module.css'
import { ChevronsUpDown } from "lucide-react";

type Props = {
  children: React.ReactNode;
  sze?: 'sm' | 'md',
} & React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

const data = [
  { id: 1, title: 'issued', color: 'blue' },
  { id: 2, title: 'solving', color: 'yellow' },
  { id: 1, title: 'blocked', color: 'red' },
  { id: 1, title: 'closed', color: 'green' },
  { id: 1, title: 'closedasfasdfasdfasdfsadfsadfsadfsdf', color: 'green' },
]

export default function Select({ children, sze = 'md', ...rest }: Props) {
  // const options = data.map((option) => <option id={option.id} value={option.id}>{option.title}</option>)
  const sizes = {
    sm: 'select-sm',
    md: 'select-md',
  }

  const settings = S[sizes[sze]]

  return (
    <div className={S['select-container']}>
      <select title='select option' className={`${S.select} ${settings}`} defaultChecked={true} {...rest}>
        {children}
      </select>
      <ChevronsUpDown className={S['select__icon']} />
    </div>
  )
}