import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterSlise'
export const storeRedux = configureStore({
    reducer: {
        counter: counterReducer,
    },
})