import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  min-height: 300px;
  border: 1px solid #000;
`;

export const Header = styled.header`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px 40px;

  button {
    font-size: 30px;
    background: none;
    color: #fff;
  }
`;

export const InputTodo = styled.input`
  height: 30px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.1);
`;
