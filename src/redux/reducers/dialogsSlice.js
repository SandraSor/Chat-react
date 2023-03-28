import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { dialogsApi } from '../../utils/api';

export const fetchDialogs = createAsyncThunk(
	'dialogs/fetchDialogsStatus',
	async (params) => {
		// const { sortBy, order, category, currentPage, searchValue } = params;
		const { data } = await dialogsApi.getAll();
		return data;
	}
);

const initialState = {
	items: [],
	status: 'loading', //loading, success, error
	currentDialogId: null,
};

export const dialogsSlice = createSlice({
	name: 'dialogs',
	initialState,
	reducers: {
		setDialogs(state, action) {
			state.items = action.payload;
		},
		setCurrentDialogId(state, action) {
			state.currentDialogId = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchDialogs.pending, (state) => {
			state.status = 'loading';
			state.items = [];
		});
		builder.addCase(fetchDialogs.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = 'success';
		});
		builder.addCase(fetchDialogs.rejected, (state) => {
			state.status = 'error';
			state.items = [];
		});
	},
});

export const { setDialogs, setCurrentDialogId } = dialogsSlice.actions;

export default dialogsSlice.reducer;
