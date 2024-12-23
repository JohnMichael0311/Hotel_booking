// import { createSlice } from "@reduxjs/toolkit";

// export const hotelSlice = createSlice({
//   name: "hotel",
//   initialState: { selectedHotel: null },
//   reducers: {
//     selectHotel: (state, action) => {
//       state.selectedHotel = action.payload;
//     },
//   },
// });

// export const { selectHotel } = hotelSlice.actions;
// export default hotelSlice.reducer;

// src/redux/hotelSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotels: [
    {
      id: 1,
      name: "The Grand Plaza",
      location: "Downtown Business District",
      rating: 4.8,
      price: 299,
      // ... rest of the hotel data from the component
    },
    // ... other hotels
  ],
  selectedHotel: null,
  searchQuery: ''
};

const hotelSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    setSelectedHotel: (state, action) => {
      state.selectedHotel = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    }
  }
});

export const { setSelectedHotel, setSearchQuery } = hotelSlice.actions;
export default hotelSlice.reducer;