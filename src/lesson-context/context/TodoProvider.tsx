import { useState, createContext, FC } from "react";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface ContextProps {
  todoList: Todo[];
  handleAddTodo: (todoText: string) => void;
  setTodoAsDone: (id: string) => void;
  onClickCloseTodo: (id: string) => void;
}

export const TodoListContext = createContext<ContextProps>({} as ContextProps);

interface Props {
  children: React.ReactNode;
}

export const TodoProvider: FC<Props> = ({ children }) => {
  const [todoList, setTodoList] = useState<Todo[]>([
    { completed: true, id: crypto.randomUUID(), text: "Hello" },
  ]);

  const handleAddTodo = (todoText: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: todoText,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  const setTodoAsDone = (id: string) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const onClickCloseTodo = (id: string) => {
    const filteredArray = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredArray);
  };

  return (
    <TodoListContext.Provider
      value={{ todoList, handleAddTodo, setTodoAsDone, onClickCloseTodo }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
