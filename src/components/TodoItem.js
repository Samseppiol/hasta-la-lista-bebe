import React from 'react'
import ReactDom from 'react-dom'
import Checkbox from './Checkbox'
import Field from './Field'

export default function TodoItem({
  description,
  completed
}) {
  return (
    <div className='mb-3'>
      <Checkbox label='completed' checked ={completed}  />
      <Field  label='not completed'value={description} />
    </div>
  )
}