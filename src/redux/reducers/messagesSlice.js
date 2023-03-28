import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { messagesApi } from '../../utils/api';

export const fetchMessages = createAsyncThunk(
	'messages/fetchMessagesStatus',
	async (params) => {
		const { dialogId } = params;
		const { data } = await messagesApi.getAllByDialogId(dialogId);
		return data;
	}
);

const initialState = {
	items: null,
	status: 'success', //loading, success, error
};

export const messagesSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {
		setMessages(state, action) {
			state.items = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchMessages.pending, (state) => {
			state.status = 'loading';
			state.items = [];
		});
		builder.addCase(fetchMessages.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = 'success';
		});
		builder.addCase(fetchMessages.rejected, (state) => {
			state.status = 'error';
			state.items = [];
		});
	},
});

export const { setMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
