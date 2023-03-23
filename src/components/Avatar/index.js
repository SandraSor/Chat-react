import React from 'react';
import PropTypes from 'prop-types';
import { generateAvatarFromHas, generateAvatar } from '../../utils/helpers';

import './Avatar.scss';

const Avatar = ({ user }) => {
	if (user.avatar) {
		return (
			<img
				className='avatar'
				src={user.avatar}
				alt={`Avatar ${user.fullName}`}
			/>
		);
	} else {
		// const { colorDarken, colorBrighten } = generateAvatarFromHas(user._id);
		const { color1, color2 } = generateAvatar(user.fullName);
		const firstCharFullName = user.fullName.at(0).toUpperCase(1);
		return (
			<div
				className='avatar avatar--symbol'
				style={{
					background: `linear-gradient(135deg, ${color1} 0%, ${color2} 96.52%)`,
				}}
			>
				{firstCharFullName}
			</div>
		);
	}
};

Avatar.propTypes = {
	className: PropTypes.string,
};

export default Avatar;
