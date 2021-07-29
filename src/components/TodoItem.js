import React from 'react';
import styled from 'styled-components';
import { MdClear, MdBattery20, MdBatteryChargingFull } from 'react-icons/md';

const TodoItemContainer = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  div {
    flex: 1;
    display: flex;
    cursor: pointer;
  }
`;
const TodoItemText = styled.div`
  text-decoration: ${(props) => props.done && 'line-through'};
 
  flex: 1;
`;
const TodoItemBtn = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: violet;
  justify-content: cente;
`;

const TodoItem = ({ todo, onRemove, onToggle }) => {
  const { text, done, id } = todo;
  return (
    <TodoItemContainer>
      <div onClick={() => onToggle(id)}>
        {done ? <MdBatteryChargingFull /> : <MdBattery20 />}

        <TodoItemText done={todo.done}> {text} </TodoItemText>
      </div>
      <TodoItemBtn onClick={() => onRemove(id)}>
        <MdClear />
      </TodoItemBtn>
    </TodoItemContainer>
  );
};

export default TodoItem;
