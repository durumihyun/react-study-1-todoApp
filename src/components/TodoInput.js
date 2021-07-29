import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { MdLoupe } from 'react-icons/md';

const TodoInputContainer = styled.form`
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  background: #2f4f4f;
  outline: none;
  border: none;
  color: white;
  line-height: 1.5;
  padding: 10px;
  &::placeholder {
    color: white;
  }
`;
const InputButton = styled.button`
  background: #ff4500;
  border: none;
  outline: none;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
  transition: 0.1s background ease-in;
  &:hover {
    background: pink;
  }
`;
const TodoInput = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onAddTodo(text);
      setText('');
    },
    [onAddTodo, text]
  );

  return (
    <div>
      <TodoInputContainer onSubmit={handleSubmit}>
        <Input
          placeholder="할일을 입력해요"
          value={text}
          onChange={handleChange}
        />

        <InputButton type="submit">
          <MdLoupe />
        </InputButton>
      </TodoInputContainer>
    </div>
  );
};

export default TodoInput;
