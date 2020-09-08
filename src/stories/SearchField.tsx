import React from 'react'
import s from './SearchField.module.scss'

export interface SearchFieldProps {
  placeholder: string
}

export const SearchField: React.FC<SearchFieldProps> = ({ placeholder }) => {
  return (
    <div className={s['input-wrapper']}>
      <input
        type="text"
        placeholder={placeholder}
        className={s['search-input']}
      />
    </div>
  )
}
