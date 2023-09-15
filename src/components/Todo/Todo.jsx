import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    // todo는 그대로 있고 status상태만 변경
    onUpdate({...todo, status});
  };
  const handleDelete = () => onDelete(todo);
  
  return (
    <li className={styles.todo_item}>
      <input className={styles.checkbox} type="checkbox" id={todo.id} checked={status === 'completed'} onChange={handleChange} />
      <label htmlFor={todo.id}>{text}</label>
      <span classNam={styles.icon}>
        <button onClick={handleDelete}><FaTrashAlt /></button>
      </span>
    </li>
  );
};
