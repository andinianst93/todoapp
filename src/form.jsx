import React, { useState } from 'react'

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: (e) => setValue(e.target.value),
    resetValue: () => setValue(''),
  }
}

const Form = ({ onSubmit }) => {
  const { resetValue, ...text } = useInputValue('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(text.value)
        resetValue()
      }}
      className='flex justify-between'
    >
      <input {...text} className='border p-2 w-full text-xl' />
    </form>
  )
}

export default Form
