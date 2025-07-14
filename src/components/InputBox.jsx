import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';

function InputBox() {
  const [value,setValue] = useState("");
  const dispatch =useDispatch();
  const addTodoHandler=()=>{
    const todo={
      content : value,
      _id: Date.now().toString(26)
    }
    dispatch(addTodo(todo))
    setValue("")
  }
  return (
    
    <div className='w-full'>
      <div className='flex flex-row gap-2 place-content-evenly'>
        <input
        placeholder='Enter Todo'
        value={value}
        onChange={(e)=>setValue(e.target.value)}
       className='rounded-xl border w-[80%] border-[#ccc] placeholder:text-xl placeholder:text-[#ccc] outline-none pl-2' type="text" />
        <button
        onClick={addTodoHandler}
        className='w-[10%] cursor-pointer bg-blue-800 border text-[#faf7f7] border-[#ccc] p-1 rounded-xl '>Add Todo</button>
      </div>
    </div>
  )
}

export default InputBox
