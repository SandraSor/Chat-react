import React from 'react';
import PropTypes from 'prop-types';
import { Empty, Spin } from 'antd';
import classNames from 'classnames';

import { Message } from '../';

import './Messages.scss';
const Messages = ({ blockRef, isLoading, items }) => {
	return (
		<div
			ref={blockRef}
			className={classNames('messages', {
				'messages--loading': isLoading === 'loading',
			})}
		>
			{isLoading === 'loading' && !items.length ? (
				<Spin tip='Загрузка сообщений...' size='large' />
			) : items ? (
				items.length ? (
					<div>
						{items.map((item) => (
							<Message key={item._id} {...item} />
						))}
					</div>
				) : (
					<Empty description='Диалог пуст' />
				)
			) : (
				<Empty description='Откройте диалог' />
			)}
		</div>
	);
};

Messages.prototype = {
	items: PropTypes.array,
};

export default Messages;
