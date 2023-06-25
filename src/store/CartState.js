import React, { useState } from "react";

import ProductContext from "./product-context";

export default function CartState(props) {
  const [items, setitems] = useState([]);

  const addItemToCartHandler = (item) => {
    let temp = [...items];

    let indxOfItem = temp.findIndex((i) => i.id === item.id);

    if (indxOfItem === -1) {
      temp = [...temp, item];
      setitems([...temp]);
    } else {
      temp[indxOfItem].quantity = Number(temp[indxOfItem].quantity) + 1;
      temp = [...temp];
    }
    setitems([...temp]);
  };

  const removeItemFromCartHandler = (id) => {
    let temp = [...items];
    let indxOfItem = temp.findIndex((i) => i.id === id);
    if (temp[indxOfItem].quantity > 1) {
      temp[indxOfItem].quantity = Number(temp[indxOfItem].quantity) - 1;
    } else {
      temp = temp.filter((i) => i.id !== id);
    }
    setitems([...temp]);
  };
  const getcart = (data) => {
    console.log("chal rrrrr");
    let temp = [...items, data];
    setitems(temp);
  };

  const cartState = {
    items: items,
    fetchcart: getcart,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <ProductContext.Provider value={cartState}>
      {props.children}
    </ProductContext.Provider>
  );
}
