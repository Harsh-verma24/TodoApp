import React from "react";
import { InputBox, Navbar, TodoList } from "../components";
import { useSelector } from "react-redux";

const Home = () => {
  const allTodos = useSelector((state) => state.todo.todos);
  console.log(allTodos);
  return (
    <div className="flex flex-col place-content-center">
      <Navbar />
      <div>
        <div className="py-2 mx-2 my-3 rounded-2xl  border flex place-content-center w-full">
          <InputBox />
        </div>
        <div className="py-10 mx-2 my-3 rounded-2xl  border flex flex-col place-content-center w-full">
          {allTodos.map((todo, index) => {
            return (
              <TodoList todoId={todo._id} key={index} value={todo.content} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
