import React, { useState,useRef } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {completeTodo, deleteTodo} from "../features/todoSlice"

const TodoList = ({value,todoId}) => {
  const [status,setStatus]=useState(false)
  const [isDeleted,setIsDelted]=useState(false)

  const dispatch =useDispatch()
  const completeTodoHandler=(a)=>{
    if(status){
      setStatus(!status)
    }
    else{
      dispatch(completeTodo(a))
    setStatus(!status);
    }
  }
  const deleteTodoHandler=(a)=>{
    dispatch(deleteTodo(a))
    setIsDeleted(true)
  }
  const todoRef=useRef()
  return (
    <div className="w-full pl-3 my-2  ">
      <div className={`${status?"bg-green-600":"bg-transparent"}
      ${isDeleted?"collapse":""} w-[95%] rounded-2xl px-2 flex flex-row gap-2 border-2 py-2 place-content-between`}>
        <div ref={todoRef} className={`border-1 bg-[#d2dcce] w-[90%] rounded-xl py-3 px-3 `}>
          <input
            type="text"
            value={value}
            disabled
            className="w-[60%] cursor-not-allowed bg-transparent"
          />
        </div>
        <div className="flex flex-row items-center gap-1">
          <button className="flex cursor-pointer  place-content-center items-center rounded-xl text-white bg-blue-800 w-[40px] h-[40px]"
          onClick={()=>completeTodoHandler(todoId)}><FaCheckCircle/></button>
          <button
          onClick={()=>deleteTodoHandler(todoId)} className="flex cursor-pointer place-content-center items-center rounded-xl text-white bg-blue-800 w-[40px] h-[40px]"><MdDeleteForever/></button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
