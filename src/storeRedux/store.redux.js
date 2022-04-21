import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlise'
import todoReducer from './slices/todoSlise'
export const storeRedux = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer
    },
})