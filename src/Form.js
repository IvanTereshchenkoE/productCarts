import React from 'react';

import './styles/Form.css';

const Form = (props) => {
  return (
    <div className='Form'>
        <input className='form__input' placeholder="Имя"></input>
        <input className='form__input' placeholder="Фамилия"></input>
        <input className='form__input' placeholder="отчество"></input>
        <input className='form__input' placeholder="адрес"></input>
        <input className='form__input' placeholder="Телефон"></input>
        <input className='form__input' placeholder="Почта"></input>
        <button className='form__input' onClick={() => console.log(props.output)}>Отпраить форму</button>
    </div>
  );
};

export default Form;
