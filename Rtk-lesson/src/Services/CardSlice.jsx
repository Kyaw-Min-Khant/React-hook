import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  Card: [],
  Quantity: 0,
  Price: 0,
};
const set = "GET";
const storedItems = Cookies.get(set);
if (storedItems) {
  initialState.Card = JSON.parse(storedItems);
  initialState.Quantity = calculateQuantity(initialState.Card);
  initialState.Price = calculateTotal(initialState.Card);
}
function calculateTotal(Card) {
  return Card.reduce((total, item) => total + item.price * item.Quantity, 0);
}
function calculateQuantity(Card) {
  return Card.reduce((total, item) => total + item.Quantity, 0);
}
export const CardSlice = createSlice({
  name: "CardSlice",
  initialState,
  reducers: {
    Add_to_Card: (state, { payload }) => {
      const isHave = state.Card.find((card) => card.id === payload.id);
      if (isHave) {
        return state;
      } else {
        state.Card = [...state.Card, { ...payload, Quantity: 1 }];
      }
      state.Price = calculateTotal(state.Card);
      state.Quantity = calculateQuantity(state.Card);
      Cookies.set("GET", JSON.stringify(state.Card));
    },
    RemoveCard: (state, { payload }) => {
      state.Card = state.Card.filter((card) => card.id !== payload.id);
      state.Price = calculateTotal(state.Card);
      state.Quantity = calculateQuantity(state.Card);
      Cookies.set("GET", JSON.stringify(state.Card));
    },
    ADDQuantity: (state, { payload }) => {
      state.Card = state.Card.map((item) => {
        if (item.id == payload.id) {
          return { ...item, Quantity: item.Quantity + 1 };
        } else {
          return item;
        }
      });
      state.Quantity = calculateQuantity(state.Card);
      state.Price = calculateTotal(state.Card);
      Cookies.set("GET", JSON.stringify(state.Card));
    },
    DesQuantity: (state, { payload }) => {
      state.Card = state.Card.map((item) => {
        if (item.id == payload.id) {
          return { ...item, Quantity: item.Quantity - 1 };
        } else {
          return item;
        }
      });
      state.Quantity = calculateQuantity(state.Card);
      state.Price = calculateTotal(state.Card);
      Cookies.set("GET", JSON.stringify(state.Quantity));
    },
  },
});
export const { Add_to_Card, RemoveCard, ADDQuantity, DesQuantity } =
  CardSlice.actions;
export default CardSlice.reducer;
