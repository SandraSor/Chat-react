import React from 'react';
import { Dialogs as BaseDialogs } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDialogs } from '../redux/reducers/dialogsSlice';

const Dialogs = ({ myId }) => {
	const dispatch = useDispatch();
	const { items, status, currentDialogId } = useSelector(
		(state) => state.dialogs
	);
	const [inputValue, setInputValue] = React.useState('');
	const [filtered, setFiltered] = React.useState([]);

	React.useEffect(() => {
		if (status === 'loading') {
			dispatch(fetchDialogs());
		}
		if (status === 'success') {
			setFiltered(items);
		}
	}, [status]);

	const onChangeInput = (value) => {
		setFiltered(
			items.filter(
				(dialog) =>
					dialog.user.fullName.toUpperCase().indexOf(value.toUpperCase()) >= 0
			)
		);
		setInputValue(value);
	};

	return (
		<BaseDialogs
			myId={myId}
			// items={items}
			items={filtered}
			onSearch={onChangeInput}
			inputValue={inputValue}
			currentDialogId={currentDialogId}
		/>
	);
};

export default Dialogs;
