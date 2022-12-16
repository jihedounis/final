import { configureStore } from '@reduxjs/toolkit'
import orderSlice from './orderSlice'
import productSlice from './productSlice'
import userSlice from './userSlice/userSlice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    product:productSlice,
    order:orderSlice,
  },
})
