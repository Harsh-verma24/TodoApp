import React from "react";
import { Home, AllTodoList } from "./pages";
import { Provider } from "react-redux";
import { store } from "./store";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/todos", element: <AllTodoList /> },
  ]);
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={router} />
      </div>
      <Toaster />
    </Provider>
  );
};

export default App;
