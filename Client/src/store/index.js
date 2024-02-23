import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Authentication/authenticationSlice';
import authorReducer from '../features/Author/authorSlice';

export const store = configureStore({
    reducer:{
        auth:authReducer,
        author:authorReducer
    }
})