import { useState } from "react";
import TodoItem from "./TodoItem";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState("");

  const handleOnChangeInputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleRemoveTodo = (id: string) => {
    const filteredArray = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredArray);
  };

  const handleAddTodo = (todoText: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: todoText,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  const handleCompleteTodo = (id: string) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  return (
    <>
      {todoList.map((todo) => {
        return (
          <TodoItem
            key={crypto.randomUUID()}
            todo={todo}
            onClickTodoElement={handleCompleteTodo}
            onClickCloseTodo={handleRemoveTodo}
            className="todo-item"
          />
        );
      })}
      <input onChange={handleOnChangeInputTodo} type="text" value={todoText} />
      <button onClick={() => handleAddTodo}>Add</button>
    </>
  );
}

export default App;
