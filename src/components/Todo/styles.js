import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  ${props =>
    props.isDone &&
    css`
      text-decoration: line-through;
    `}
`;

export const ButtonRemove = styled.button`
  font-size: 12px;
  color: #3c41d6;
  text-decoration: underline;
  margin-left: 10px;
`;
