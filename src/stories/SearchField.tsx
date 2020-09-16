import React from 'react'
import s from './SearchField.module.scss'

export interface SearchFieldProps {
  placeholder: string
  handleSubmitCallback: any
}

export const SearchField: React.FC<SearchFieldProps> = ({
  placeholder,
  handleSubmitCallback,
}) => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSubmitCallback(e.target.value)
  }

  return (
    <div className={s['input-wrapper']}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          className={s['search-input']}
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}
