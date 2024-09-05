import { FC, useContext } from "react";
import { Todo, TodoListContext } from "./context/TodoProvider";

interface Props extends React.HTMLAttributes<HTMLLIElement> {
  todo: Todo;
}

export const TodoItem: FC<Props> = ({ todo, ...rest }) => {
  const { setTodoAsDone, onClickCloseTodo } = useContext(TodoListContext);

  return (
    <li style={{ color: todo.completed ? "red" : "" }} key={todo.id} {...rest}>
      <span onClick={() => setTodoAsDone(todo.id)}>{todo.text}</span>
      <button onClick={() => onClickCloseTodo(todo.id)}>X</button>
    </li>
  );
};
