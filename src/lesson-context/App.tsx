import TodoList from "./TodoList";
import { TodoProvider } from "./context/TodoProvider";

const App = () => {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
};

export default App;
