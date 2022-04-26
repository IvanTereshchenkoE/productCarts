import React, { useState, useRef } from 'react';

import ShopingInfo from './ShopingInfo';

import './styles/CardList.css';

const Product = ({ item, updateQuantity }) => {
  const [disabled, setDisabled] = React.useState(true);
  const [quantity, setQuantity] = React.useState(item.quantity);
  const myInput = React.useRef();

  return (
    <div key={item.id} className="item">
      <img src={item.img} width="100" height="100" className="marginSrc" alt={item.name} />
      <div className="marginName">
        <b>{item.name}</b> <div>{item.product_description}</div>
      </div>
      <div>
        <input placeholder={item.Price} type="text" className="inputOf" disabled />
        <input
          onChange={(event) => {
            setQuantity(Number(event.target.value));
          }}
          value={quantity}
          id="my-input"
          ref={myInput}
          placeholder="0"
          type="text"
          className="inputOn"
          disabled={disabled}></input>
        {disabled ? (
          <button
            className="buttonOfEdit"
            onClick={() => {
              setDisabled(false);
              setTimeout(() => {
                myInput.current.focus();
                myInput.current.select(); 
              }, 100);
            }}>
            edit
          </button>
        ) : (
          <button
            className="buttonOfSave"
            onClick={() => {
              setDisabled(true);
              updateQuantity(quantity, item.id);
            }}>
            save
          </button>
        )}
        <button className="buttonOn" onClick={() => {}}>
          Delete
        </button>
      </div>
      <p>{disabled}</p>
    </div>
  );
};

export default Product;
