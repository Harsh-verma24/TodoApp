import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  todos: [],
  content: "",
  _id: "",
  status:"not-completed"
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = action.payload;
      const newTodo = {
        _id: todo._id,
        content: todo.content,
        status:"not-completed"
      };
      state.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
      toast.success("To do added successfully");
    },
    deleteTodo: (state, action) => {
        const todoId=action.payload
        const index= state.todos.findIndex((p)=>p._id===todoId)
        if(index>=0){
            state.todos.splice(index,1);
            localStorage.setItem("todos",JSON.stringify(state.todos))
            toast.success("todo deleted")
        }
    },
    completeTodo:(state,action)=>{
        const todoId=action.payload
        const index= state.todos.findIndex((p)=>p._id===todoId)
        if(index>=0){
            state.todos[index].status="completed";
            localStorage.setItem("todos",JSON.stringify(state.todos))
            toast.success("todo completed");
        }
    }
  },
});

export const { addTodo, deleteTodo,completeTodo} = todoSlice.actions;
export default todoSlice.reducer;
