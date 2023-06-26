import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action) => {
      return action.payload;
    },
    clearItems: () => initialState
  },
});

export const {
  setItems,
  clearItems
} = itemsSlice.actions;

export default itemsSlice.reducer;
