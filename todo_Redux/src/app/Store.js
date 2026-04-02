import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/TaskSlice'

export const store = configureStore({
    reducer: todoReducer
})