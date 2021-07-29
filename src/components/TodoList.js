import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListContainer = styled.div`
  min-height: 20px;
  max-height: 423px;
  overflow-y: auto;
`;

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
