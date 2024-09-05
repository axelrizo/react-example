import React, { useContext, useState } from "react";
import { TodoListContext } from "./context/TodoProvider";
import { TodoItem } from "./TodoItem";

const TodoList = () => {
  const { todoList, handleAddTodo } = useContext(TodoListContext);
  const [todoText, setTodoText] = useState("");

  const handleOnChangeInputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleNewTodo = () => {
    handleAddTodo(todoText);
  };

  return (
    <>
      <div>
        {todoList.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </div>

      <input onChange={handleOnChangeInputTodo} type="text" value={todoText} />
      <button onClick={handleNewTodo}>Add</button>
    </>
  );
};

export default TodoList;
