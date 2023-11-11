import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  addToLS,
  getStoredCart,
  removeFormLS,
} from "../../Utilities/LocalStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  // load data from local storage
  useEffect(() => {
    console.log("called the use effect", bottles.length);
    if (bottles.length) {
      const storedCart = getStoredCart();
      console.log(storedCart, bottles);
      const savedCart = [];
      for (const id of storedCart) {
        console.log(id);
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      console.log(savedCart);
      setCart(savedCart);
    }
  }, [bottles]);

  const handleAddtoCart = (bottle) => {
    const newAddedCart = [...cart, bottle];
    setCart(newAddedCart);
    addToLS(bottle.id);
  };
  const handleRemoveFromCart = (id) => {
    // visual cart remove
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    // remove form LS
    removeFormLS(id);
  };
  return (
    <div>
      <h2>Bottles: {bottles.length} </h2>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            handleAddtoCart={handleAddtoCart}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
