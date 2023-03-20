import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Time, IconReaded } from '../';

import './Message.scss';

const Message = ({
	avatar,
	user,
	text,
	date,
	isMe,
	isRead,
	attachments,
	isTyping,
}) => {
	return (
		<div
			className={classNames('message', {
				'message--isme': isMe,
				'message--is-typing': isTyping,
				'message--image': attachments && attachments.length === 1,
			})}
		>
			<div className='message__content'>
				<div className='message__avatar'>
					<img src={avatar} alt={`Avatar ${user.fullName}`} />
				</div>
				<div className='message__info'>
					{(text || isTyping) && (
						<div className='message__bubble'>
							{text && <p className='message__text'>{text}</p>}
							{isTyping && (
								<div className='message__typing'>
									<span />
									<span />
									<span />
								</div>
							)}
						</div>
					)}
					<div className='message__attachments'>
						{attachments &&
							attachments.map((item, index) => (
								<div key={index} className='message__attachments--item'>
									<img src={item.url} alt={item.fileName} />
								</div>
							))}
					</div>
					{date && (
						<span className='message__date'>
							<Time date={date} />
						</span>
					)}
				</div>
				<IconReaded isMe={isMe} isRead={isRead} />
			</div>
		</div>
	);
};

Message.defaultProps = {
	user: {},
};

Message.prototype = {
	avatar: PropTypes.string,
	user: PropTypes.object,
	text: PropTypes.string,
	date: PropTypes.string,
	attachments: PropTypes.array,
	isTyping: PropTypes.bool,
	isMe: PropTypes.bool,
	isRead: PropTypes.bool,
};

export default Message;
