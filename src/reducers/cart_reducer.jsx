/* eslint-disable no-fallthrough */
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";
import CartItem from "../components/CartItem";

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, color, amount, product } = action.payload;
      const tempItem = state.cart.find((i) => i.id === id + color);
      // aynı ürün sepetteyse
      if (tempItem) {
        const tempCart = state.cart.map((item) =>
          item.id === id + color
            ? { ...item, amount: Math.min(item.amount + amount, item.max) }
            : item
        );
        return { ...state, cart: tempCart };
      }
      // aynı ürün sepette değilse
      else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          images: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    case REMOVE_CART_ITEM:
      const tempCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: tempCart };
    case CLEAR_CART:
      return { ...state, cart: [] };
    case TOGGLE_CART_ITEM_AMOUNT:
      const newAmount = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.value === "inc") {
            return { ...item, amount: Math.min(item.amount + 1, item.max) };
          }
          if (action.payload.value === "dec") {
            return { ...item, amount: Math.max(item.amount - 1, 1) };
          }
        } else {
          return item;
        }
      });
      return { ...state, cart: newAmount };
    case COUNT_CART_TOTALS:
      const { total_items, total_amount } = state.cart.reduce(
        (total, CartItem) => {
          const { amount, price } = CartItem;
          console.log(amount);
          total.total_items += amount;
          total.total_amount += price * amount;
          return total;
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      );
      return { ...state, total_items, total_amount };
    default:
      return state;
  }
};

export default cart_reducer;
