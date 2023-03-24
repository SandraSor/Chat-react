import React from 'react';
import { Input, Empty } from 'antd';

import { DialogItem } from '..';
import './Dialogs.scss';
import orderBy from 'lodash/orderBy';

const Dialogs = ({ items, myId, onSearch, inputValue }) => {
	return (
		<>
			<div className='dialogs__search'>
				<Input.Search
					value={inputValue}
					placeholder='Поиск контактов'
					onChange={(e) => onSearch(e.target.value)}
					style={{
						width: 100 + '%',
					}}
				/>
			</div>
			<div className='dialogs'>
				{items.length ? (
					orderBy(items, (d) => Date.parse(d.created_at), 'desc').map(
						(item) => (
							<DialogItem
								key={item._id}
								unReaded={0}
								isMe={item.user._id === myId}
								{...item}
							/>
						)
					)
				) : (
					<Empty
						image={Empty.PRESENTED_IMAGE_SIMPLE}
						description='Ничего не найдено'
					/>
				)}
			</div>
		</>
	);
};

export default Dialogs;
//'created_at'
