import React from 'react';
import classNames from 'classnames';

import { DialogItem } from '..';
import './Dialogs.scss';
import orderBy from 'lodash/orderBy';

const Dialogs = ({ items, myId }) => {
	return (
		<div className='dialogs'>
			{orderBy(items, 'created_at', 'desc').map((item) => (
				<DialogItem
					key={item._id}
					unReaded={1}
					isMe={item.user._id === myId}
					{...item}
				/>
			))}
		</div>
	);
};

export default Dialogs;
