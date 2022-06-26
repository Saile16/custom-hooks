import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];
//para obtener los datos del localStorage y mantenerlos
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };
  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };
  const onToogleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  return {
    todos,
    handleNewTodo,
    onToogleTodo,
    handleDeleteTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
  };
};

export default useTodo;
