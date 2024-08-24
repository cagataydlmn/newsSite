import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
  };

const newsItemsSlice = createSlice({
    name: 'newsItems',
    initialState,
    reducers: {
      setNewsItems: (state, action) => {
        state.items = action.payload;
      },
      addNewsItems: (state, action) => {
        state.items.push(action.payload);
      },
      removeNewsItems: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      },
    },
  });
  
  export const { setNewsItems, addNewsItems, removeNewsItems } = newsItemsSlice.actions;
  export default newsItemsSlice.reducer;