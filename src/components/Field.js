import React from 'react'
import ReactDom from 'react-dom'

export default function Field({
  value,
  label
}) {
  return (
    <label className='flex-row mb-3'>
      { label }
      {' '}
      <input type='text' value ={ value }     />
    </label>
  )
}