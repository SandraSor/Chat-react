import React from 'react';
import { Messages as BaseMessages } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages } from '../redux/reducers/messagesSlice';

const Messages = ({ myId }) => {
	const dispatch = useDispatch();
	const { items, status } = useSelector((state) => state.messages);
	const { currentDialogId } = useSelector((state) => state.dialogs);

	React.useEffect(() => {
		if (currentDialogId) {
			dispatch(fetchMessages({ dialogId: currentDialogId }));
		}
	}, [currentDialogId]);

	return <BaseMessages items={items} />;
};

export default Messages;
