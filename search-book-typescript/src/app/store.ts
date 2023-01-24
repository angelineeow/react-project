import { configureStore } from '@reduxjs/toolkit'
import booksReducer from '../reducers/booksSlice'
import wishlistReducer from '../reducers/wishlistSlice'

export const store = configureStore({
  reducer: {
    books: booksReducer,
    wishlist: wishlistReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch