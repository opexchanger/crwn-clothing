export const addItemToCart = (cart, itemToAdd) => {
  const itemAlreadyOnCart = cart.find((item) => item.id === itemToAdd.id); // ver se ele ja ta no carrinho
  if (itemAlreadyOnCart) {
    itemAlreadyOnCart.quantity += 1; // modifica por referencia, pega o objeto original
    return [...cart];
  } else {
    return [...cart, { ...itemToAdd, quantity: 1 }]; // retorna um array novo
  }
};
