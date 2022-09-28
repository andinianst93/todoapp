import React, { useState } from 'react'
import '../src/index.css'
import Form from './form'

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2e2e2e] to-[#323232]`,
  container: `bg-slate-200 max-w-[500px] w-full m-auto my-36 rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  button: `border p-4 ml-2 bg-slate-900 text-slate-100 rounded-lg`,
}

function App() {
  const [todos, setTodos] = useState([])
  const toggleComplete = (i) =>
    setTodos(
      todos.map((todo, k) =>
        k === i
          ? {
              ...todos,
              complete: !todo.complete,
            }
          : todo
      )
    )
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <Form
          onSubmit={(text) => setTodos([{ text, complete: false }, ...todos])}
        />
        <div className='mx-auto flex flex-col justify-center items-center'>
          <ul>
            {todos.map(({ text, complete }, i) => {
              return (
                <li
                  key={text}
                  onClick={() => toggleComplete(i)}
                  style={{
                    textDecoration: complete ? 'line-through' : '',
                  }}
                  className='flex justify-between bg-slate-200 p-4 my-2 capitalize'
                >
                  <div className='text-center p-2  w-full'>{text}</div>
                </li>
              )
            })}
          </ul>
          <button onClick={() => setTodos([])} className={`${style.button}`}>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
