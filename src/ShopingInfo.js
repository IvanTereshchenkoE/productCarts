import React, { useState } from 'react';

import './styles/ShopingInfo.css';

const ShopingInfo = (props) => {
  const totalItems = props.totalItems;
  const totalAmount = props.totalSum;
  const numberOfGoods = props.numberOfGoods;
  const avargePrice = props.avargePrice;
  return (
    <div>
      <h2>Shoping info</h2>
      <div>
        <div className="infoCart">Total items: {totalItems}</div>
        <div className="infoCart">Total Amount: {totalAmount}</div>
        <div className="infoCart">Number of Goods: {numberOfGoods}</div>
        <div className="infoCart">Average price: {avargePrice}</div>
      </div>
    </div>
  );
};

export default ShopingInfo;


