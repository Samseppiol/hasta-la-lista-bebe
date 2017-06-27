import React from 'react'
import ReactDom from 'react-dom'

export default function Checkbox({
  checked,
  label
}) {
  return (
    <label>
      <input type='checkbox' checked ={ checked }     />
      {' '}
      { label }
    </label>
  )
}