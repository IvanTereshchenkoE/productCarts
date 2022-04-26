import React, { useState } from "react";
import CardList from "./CartList";
import ShopingInfo from "./ShopingInfo";
import Products from "./Products";

import "./styles/MainContainer.css";
import "./styles/ShopingInfo.css";
import Modal from "./Modal";
import Form from "./Form";

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [products, setProducts] = useState(Products);

  const updateQuantity = (value, id) => {
    setProducts(
      products.map(item => {
        if (item.id === id) {
          item.quantity = value;
        }
        return item;
      })
    );
  };

  const totalSum = products.reduce((count, item) => {
    count += item.quantity;
    return count;
  }, 0);

  const numberOfGoods = products.reduce((count, item) => {
    count += item.quantity * item.Price;
    return count;
  }, 0);

  const totalItems = products.length;

  const avargePrice = products.reduce((count, item) => {
    count += item.Price;
    return count;
  }, 0);

  return (
    <div className="MainContainer">
      <CardList products={products} updateQuantity={updateQuantity}></CardList>
      <ShopingInfo
        totalSum={totalSum}
        numberOfGoods={numberOfGoods}
        totalItems={totalItems}
        avargePrice={avargePrice}
      ></ShopingInfo>
      <button className="Ordering" onClick={() => setModalActive(true)}>
        {" "}
        Ordering form
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <Form output={products}></Form>
      </Modal>
    </div>
  );
};

export default App;
