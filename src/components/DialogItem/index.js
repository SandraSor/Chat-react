import React from 'react';
import classNames from 'classnames';

import { Time, IconReaded } from '../';
import './DialogItem.scss';

const getAvatar = (avatar) => {
	if (avatar) {
		return <img src={avatar} alt='avatar' />;
	} else {
		//make avatar
	}
};

const DialogItem = ({ user, message, unReaded }) => {
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
						{/* <Time date={new Date()} /> */}
						13:03
					</span>
				</div>
				<div className='dialogs__item-info-bottom'>
					{/* <p>Это официальный </p> */}
					<p>Это официальный интернет-магазин кофе и чая Tasty Coffee.</p>
					{!unReaded && <IconReaded isMe={true} isRead={true} />}
					{unReaded > 0 && (
						<div className='dialogs__item-info-bottom-count'>
							{unReaded > 9 ? '+9' : unReaded}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default DialogItem;
