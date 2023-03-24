import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

import { Message } from '../';

const Messages = ({ items }) => {
	return items && items.length ? (
		<div>
			{items.map((item, index) => (
				<Message key={index} {...item} />
			))}
		</div>
	) : (
		<Empty description='Сообщения не найдены' />
	);
};

Messages.prototype = {
	items: PropTypes.array,
};

export default Messages;
