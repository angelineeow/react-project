import {createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface IWaitlistBookState{
    id: string,
    title: string
}
  
// Define the initial state using that interface
const initialState: IWaitlistBookState[] = [];
  
export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<IWaitlistBookState>) => {
            return state.some((book) => book.id === action.payload.id) ? state : [...state, action.payload];
        },
        removeFromWishlist: (state, action: PayloadAction<string>) => {
            return state.filter((book) => book.id !== action.payload)
        }
    }
})
  
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions
    
export default wishlistSlice.reducer;