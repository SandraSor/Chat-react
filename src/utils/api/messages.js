import { axios } from '../../core';

const messages = {
	getAllByDialogId: (id) => axios.get('/messages?dialog=' + id),
};

export default messages;
