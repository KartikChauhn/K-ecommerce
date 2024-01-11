import { configureStore } from "@reduxjs/toolkit";


import { rootReducer } from './rootReducer';

const Store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production'
});

export {
	Store,
};
