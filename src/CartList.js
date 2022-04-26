import React, { useState } from 'react';

import Product from './Product';

import './styles/CardList.css';

const CardList = (props) => {
  return (
    <div>
      <div className="CardList">
        {props.products.map((item) => (
          <Product item={item} key={item.id} updateQuantity={props.updateQuantity}></Product>
        ))}
      </div>
    </div>
  );
};

export default CardList;
