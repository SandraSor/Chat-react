import React from 'react';
import PropTypes from 'prop-types';
import {
	SmileOutlined,
	CameraOutlined,
	AudioOutlined,
	SendOutlined,
} from '@ant-design/icons';
import { Input, Button } from 'antd';

import classNames from 'classnames';

import './ChatInput.scss';

const ChatInput = (props) => {
	const [value, setValue] = React.useState('');

	return (
		<div className='chat-input'>
			<div className='chat-input__smile-btn'>
				<Button icon={<SmileOutlined />} />

				{/* <SmileOutlined /> */}
			</div>
			<Input
				onChange={(e) => setValue(e.target.value)}
				size='large'
				placeholder='Введите текст сообщения'
			/>
			<div className='chat-input__actions'>
				<Button icon={<CameraOutlined />} />
				<Button icon={<AudioOutlined />} />
				<Button icon={<SendOutlined />} />
				{/* <CameraOutlined />
				<AudioOutlined />
				<SendOutlined /> */}
			</div>
		</div>
	);
};

ChatInput.propTypes = {
	className: PropTypes.string,
};

export default ChatInput;
