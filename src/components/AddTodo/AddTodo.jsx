import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'; // 고유 id 생성
import styles from './AddTodo.module.css';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);


  const handleSubmit = (e) => {
    e.preventDefault();

    // input에 아무것도 입력 안했을때
    if (text.trim().length === 0) { return }

    onAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input 
        className={styles.input}
        type="text" 
        placeholder='할일을 적어주세요' 
        value={text} 
        onChange={handleChange} 
      />
      <button type='submit' className={styles.button}>Add</button>
    </form>
  );
};
