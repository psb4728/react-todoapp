import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    // todo는 그대로 있고 status상태만 변경
    onUpdate({...todo, status});
  };
  const handleDelete = () => onDelete(todo);
  
  return (
    <li>
      <input type="checkbox" id='checkbox' checked={status === 'completed'} onChange={handleChange} />
      <label htmlFor='checkbox'>{text}</label>
      <button onClick={handleDelete}><FaTrashAlt /></button>
    </li>
  );
};
