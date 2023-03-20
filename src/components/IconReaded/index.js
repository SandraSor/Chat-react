import React from 'react';
import PropTypes from 'prop-types';

import noReadSvg from '../../assets/img/Check.svg';
import readSvg from '../../assets/img/checked.svg';

const IconReaded = ({ isMe, isRead }) => {
	return (
		<>
			{isMe && (
				<div className='message__check'>
					<img src={isRead ? readSvg : noReadSvg} alt='Check svg' />
				</div>
			)}
		</>
	);
};

IconReaded.prototype = {
	isMe: PropTypes.bool,
	isRead: PropTypes.bool,
};

export default IconReaded;
