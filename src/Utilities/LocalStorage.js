const getStoredCart = () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  return [];
};

const saveCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addToLS = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  //   save to local storage
  saveCartToLS(cart);
};
const removeFormLS = (id) => {
  const cart = getStoredCart();
  // removeing ecery id
  const remaining = cart.filter((idx) => idx !== id);
  saveCartToLS(remaining);
};

export { addToLS, getStoredCart, saveCartToLS, removeFormLS };
