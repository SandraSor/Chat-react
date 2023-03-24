import { axios } from '../../core';

const dialogs = {
	getAll: () => axios.get('/dialogs'),
};

export default dialogs;
