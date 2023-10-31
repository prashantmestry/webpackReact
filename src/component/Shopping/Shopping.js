import React, { useEffect, useState } from "react";
import keyboard from "./img/keyboard.png";
import mouse from "./img/mouse.png";
import notebook from "./img/notebook.png";
import "./shopping.scss";

const Shopping = () => {
  const [itemList, setItemList] = useState([
    {
      id: "keyboard",
      name: "Keyboard",
      price: 1000,
    },
    {
      id: "mouse",
      name: "Mouse",
      price: 500,
    },
    {
      id: "notebook",
      name: "NoteBook",
      price: 50,
    },
  ]);
  const [cartList, setCartList] = useState([]);

  const increaseItem = (itemId) => {
    let data = cartList.map((item) => {
      return {
        ...item,
        qty: item?.id === itemId ? item?.qty + 1 : item?.qty,
      };
    });
    setCartList(data);
  };

  const decreaseItem = (itemId) => {
    let data = cartList.map((item) => {
      return {
        ...item,
        qty:
          item?.id === itemId ? (item?.qty > 1 ? item?.qty - 1 : 1) : item?.qty,
      };
    });
    setCartList(data);
  };

  const removeItem = (itemId) => {
    setCartList(cartList.filter((item) => item?.id !== itemId));
  };

  const addItem = (obj) => {
    if (!cartList.find((cItem) => cItem?.id === obj?.id)) {
      setCartList([...cartList, { ...obj, qty: 1 }]);
    }
  };

  const getTotalPrice = () => {
    let outPrice = 0;
    outPrice = cartList.reduce((sum, item) => {
      return sum + item?.price * item?.qty;
    }, 0);

    // 10% discount on total price > 2000.
    let discount_10_percent = 0;
    if (outPrice > 2000) {
      discount_10_percent = outPrice * 0.1;
    }

    // 2% discount on keyboard qyantity > 2.
    let discount_2_percent = 0;
    if (cartList?.find((item) => item?.id === "keyboard" && item?.qty > 2)) {
      console.log("more keyboard");
      discount_2_percent = outPrice * 0.02;
    }

    // console.log("price", outPrice);
    // console.log("10 price", discount_10_percent);

    return outPrice + discount_10_percent + discount_2_percent;
  };

  // get product icon
  const getIcon = (key) => {
    if (key === "keyboard") {
      return keyboard;
    } else if (key === "mouse") {
      return mouse;
    } else {
      return notebook;
    }
  };

  // check if item is added in cart list or not.
  const isAdded = (itemId) => {
    return cartList.find((item) => item?.id === itemId);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Shopping Center</h2>
      <div className="box">
        <h2>Cart List Items</h2>
        {cartList?.length > 0 ? (
          <div>
            <ul>
              {cartList.map((item) => {
                return (
                  <li key={item?.id}>
                    <div>
                      {item?.name} | {item?.qty}
                    </div>
                    <div>
                      <img
                        alt={item?.name}
                        width="50"
                        src={getIcon(item?.id)}
                      />
                    </div>
                    <div className="prc">
                      &#x20B9;&nbsp;{item?.price * item?.qty}
                    </div>
                    <button onClick={() => increaseItem(item?.id)}>+</button>
                    <button onClick={() => decreaseItem(item?.id)}>-</button>
                    <button onClick={() => removeItem(item?.id)}>X</button>
                  </li>
                );
              })}
            </ul>
            <div className="total">
              <div>Total:</div>
              <div>&#x20B9;&nbsp; {getTotalPrice()}</div>
            </div>
          </div>
        ) : (
          <div>
            <div className="msg">No Items selected</div>
          </div>
        )}
      </div>

      <div className="box">
        <h2>Choose Item</h2>
        <ul>
          {itemList.map((item) => {
            return (
              <li key={item?.id}>
                <div>{item?.name}</div>
                <div>
                  <img alt={item?.name} width="50" src={getIcon(item?.id)} />
                </div>
                <div className="prc">&#x20B9;&nbsp;{item?.price}</div>
                <button
                  disabled={isAdded(item?.id)}
                  onClick={() => addItem(item)}
                >
                  Add to Cart
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Shopping;
