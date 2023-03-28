import React from 'react';
import PropTypes from 'prop-types';
import {
	SmileOutlined,
	CameraOutlined,
	AudioOutlined,
	SendOutlined,
} from '@ant-design/icons';
import { Input, Button } from 'antd';
import Upload from 'rc-upload';
import Picker from '@emoji-mart/react';

import classNames from 'classnames';

import './ChatInput.scss';

const ChatInput = (props) => {
	const [value, setValue] = React.useState('');
	const [emojiPickerVisible, setEmojiPickerVisible] = React.useState(false);
	const inputRef = React.useRef(null);

	const toggleEmojiPicker = () => {
		setEmojiPickerVisible((prev) => !prev);
	};

	const onClickEmoji = (obj) => {
		setValue((prev) => prev + obj.native);
		console.log(obj);
	};

	return (
		<div className='chat-input'>
			<div className='chat-input__smile-btn'>
				{emojiPickerVisible && (
					<div className='chat-input__emoji-picker'>
						<Picker onEmojiSelect={onClickEmoji} />
					</div>
				)}
				<Button icon={<SmileOutlined />} onClick={toggleEmojiPicker} />
				{/* <SmileOutlined /> */}
			</div>
			<Input
				ref={inputRef}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				size='large'
				placeholder='Введите текст сообщения'
			/>
			<div className='chat-input__actions'>
				<Upload
					action='http://localhost:3001/upload.do'
					accept='.png, .jpg, .jpeg, .gif, .bmp'
					multiple={true}
					onStart={(file) => {
						console.log('onStart', file.name);
					}}
					onSuccess={(file) => {
						console.log('onSuccess', file);
					}}
					onProgress={(step, file) => {
						console.log('onProgress', Math.round(step.percent), file.name);
					}}
					onError={(err) => {
						console.log('onError', err);
					}}
				>
					<Button icon={<CameraOutlined />} />
				</Upload>
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
