import React from "react";
import { useSelector } from "react-redux";
import {TodoList,Navbar} from "../components"
const AllTodoList = () => {
  const allTodos = useSelector((state) => state.todo.todos);
  return (
    <div>
      <Navbar/>
      <div className="py-10 mx-2 my-3 rounded-2xl  border flex flex-col place-content-center w-full">
        {allTodos.map((todo, index) => {
          return (
            <TodoList todoId={todo._id} key={index} value={todo.content} />
          );
        })}
      </div>
    </div>
  );
};

export default AllTodoList;
