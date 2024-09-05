import React, { FC } from "react";
import { Todo } from "./TodoList";

export interface Props extends React.HTMLAttributes<HTMLLIElement> {
  todo: Todo;
  onClickTodoElement: (id: string) => void;
  onClickCloseTodo: (id: string) => void;
}

const TodoItem: FC<Props> = ({
  todo,
  onClickTodoElement,
  onClickCloseTodo,
  ...rest
}) => {
  return (
    <li style={{ color: todo.completed ? "red" : "" }} key={todo.id} {...rest}>
      <span onClick={() => onClickTodoElement(todo.id)}>{todo.text}</span>
      <button onClick={() => onClickCloseTodo(todo.id)}>X</button>
    </li>
  );
};

// function TodoItem(props: Props) {
//   const { todo } = props;
// }

export default TodoItem;
