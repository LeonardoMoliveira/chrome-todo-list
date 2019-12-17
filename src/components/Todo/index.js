import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

import { Container, Title, ButtonRemove } from './styles';

export default function Todo({ todo, onCheck, onRemove }) {
  const { id, title, isDone } = todo;

  return (
    <Container>
      <Checkbox
        onChange={e => onCheck(id, e.target.checked)}
        checked={isDone}
      />
      <Title isDone={isDone}>{title}</Title>
      <ButtonRemove onClick={() => onRemove(id)}>Remover</ButtonRemove>
    </Container>
  );
}
