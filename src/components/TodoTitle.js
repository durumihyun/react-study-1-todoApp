import React from 'react';
import styled from 'styled-components';

const TodoTitleContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  margin-top: 3rem;
  border: 2px dashed #f08080;
  overflow: hidden;
`;

const Title = styled.div`
  background: #f08080;
  color: white;
  text-align: center;
  padding: 10px;
`;

const TodoTitle = ({ children }) => {
  return (
    <TodoTitleContainer>
      <Title>일정관리</Title>
      <div>{children}</div>
    </TodoTitleContainer>
  );
};

export default TodoTitle;
