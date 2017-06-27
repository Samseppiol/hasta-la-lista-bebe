import React from 'react'
import ReactDom from 'react-dom'

export default function Checkbox({
  checked,
  label
}) {
  return (
    <label className='mb-3'>
      <input type='checkbox' checked ={ checked }     />
      {' '}
      { label }
    </label>
  )
}