import React, { useCallback, useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoTitle from './components/TodoTitle';

const App = () => {
  const [id, setId] = useState(3);
  const [todos, setTodos] = useState([
    {
      id: 1,
      done: false,
      text: 'JS 학습',
    },
    {
      id: 2,
      done: true,
      text: 'React 학습',
    },
  ]);

  const handleAddTodo = useCallback(
    (text) => {
      setTodos(
        todos.concat({
          id: id,
          done: false,
          text: text,
        })
      );
      setId(id + 1);
    },
    [todos]
  );

  const handleToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        )
      );
    },
    [todos]
  );

  const handleRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <div>
      <TodoTitle>
        <TodoInput onAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          onRemove={handleRemove}
          onToggle={handleToggle}
        />
      </TodoTitle>
    </div>
  );
};

export default App;
