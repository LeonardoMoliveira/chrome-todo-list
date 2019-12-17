import React, { useState, useEffect, useRef } from 'react';

import { Container, Header, InputTodo } from './styles';
import Todo from '../Todo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Fazer café',
      isDone: true,
    },
    {
      id: 2,
      title: 'Lançar o aplicativo',
      isDone: false,
    },
    {
      id: 3,
      title: 'Contar piada',
      isDone: true,
    },
    {
      id: 4,
      title: 'Acordar cedo',
      isDone: false,
    },
    {
      id: 5,
      title: 'Lavar o carro',
      isDone: false,
    },
  ]);
  const [title, setTitle] = useState('');

  /*   useEffect(() => {
    function loadTodos() {
      const todos = JSON.parse(localStorage.getItem('@ChromeTodoList/todos'));

      setTodos(todos || []);
    }

    loadTodos();
  }, []); */

  useEffect(() => {
    return function persistTodos() {
      localStorage.setItem('@ChromeTodoList/todos', JSON.stringify(todos));
    };
  }, [todos]);

  function handleAddTodo() {
    if (!title) return;

    setTodos([...todos, { id: Math.random(), title, done: false }]);
    setTitle('');
  }

  function handleOnCheck(id, isChecked) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, isDone: isChecked };
        }

        return todo;
      })
    );
  }

  function handleOnRemove(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <Container>
      <Header>
        <h2>Chrome Todo List</h2>
        <button onClick={handleAddTodo}>+</button>
      </Header>
      <InputTodo
        placeholder="Nome da todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      {todos.map(todo => (
        <Todo
          key={String(todo.id)}
          todo={todo}
          onCheck={handleOnCheck}
          onRemove={handleOnRemove}
        />
      ))}
    </Container>
  );
}
