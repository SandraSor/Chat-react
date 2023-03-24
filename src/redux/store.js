import { configureStore } from '@reduxjs/toolkit';
import dialogsReducer from './reducers/dialogsSlice';
import messagesReducer from './reducers/messagesSlice';

export const store = configureStore({
	reducer: {
		dialogs: dialogsReducer,
		messages: messagesReducer,
	},
});
