import React from 'react';
import classNames from 'classnames';

import { Time, IconReaded } from '../';
import './DialogItem.scss';
import { format, isToday } from 'date-fns';

const getMessageTime = (created_at) => {
	const date = Date.parse(created_at);
	if (isToday(date)) {
		return format(date, 'HH:mm');
	} else {
		return format(date, 'dd.MM.yyyy');
	}
};

const getAvatar = (avatar) => {
	if (avatar) {
		return <img src={avatar} alt='avatar' />;
	} else {
		//make avatar
	}
};

const DialogItem = ({ user, text, created_at, unReaded, isMe }) => {
	return (
		<div
			className={classNames('dialogs__item', {
				'dialogs__item-online': user.isOnline,
			})}
		>
			<div className='dialogs__item-avatar'>
				{/* <img src={user.avatar} alt={`${user.fullName} avatar`} /> */}
				{getAvatar(user.avatar)}
			</div>
			<div className='dialogs__item-info'>
				<div className='dialogs__item-info-top'>
					<b>{user.fullName}</b>
					<span className='dialogs__item-info-top-date'>
						{getMessageTime(created_at)}
						{/* <Time date={message.created_at} /> */}
					</span>
				</div>
				<div className='dialogs__item-info-bottom'>
					{/* <p>text</p> */}
					<p>{text}</p>
					{isMe ? (
						<IconReaded isMe={true} isRead={true} />
					) : (
						unReaded > 0 && (
							<div className='dialogs__item-info-bottom-count'>
								{unReaded > 9 ? '+9' : unReaded}
							</div>
						)
					)}
					{/* {unReaded > 0 && (
						<div className='dialogs__item-info-bottom-count'>
							{unReaded > 9 ? '+9' : unReaded}
						</div>
					)} */}
				</div>
			</div>
		</div>
	);
};

export default DialogItem;
