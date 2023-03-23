import React from 'react';
import { Dialogs as BaseDialogs } from '../components';

const Dialogs = ({ items, myId }) => {
	const [inputValue, setInputValue] = React.useState('');
	const [filtered, setFiltered] = React.useState(Array.from(items));
	// let filtered = Array.from(items);

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
			items={filtered}
			onSearch={onChangeInput}
			inputValue={inputValue}
		/>
	);
};

export default Dialogs;
