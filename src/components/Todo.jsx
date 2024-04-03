import React from 'react'

const Todo = ({title,description}) => {
  return (
    <div>
      <div className='text-2xl'>{title}</div>
      <div>{description}</div>
    </div>
  )
}

export default Todo