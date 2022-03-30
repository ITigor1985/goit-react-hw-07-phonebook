import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    add(state, action) {
      return [action.payload, ...state];
    },
    remove(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const selectItems = state => state.items;
export const { add, remove } = itemsSlice.actions;

// const myReducerItems = createReducer(initialState, {
//   [add]: (state, action) => [action.payload, ...state],
//   [remove]: (state, action) => {
//     return state.filter(contact => contact.id !== action.payload);
//   },
// });
