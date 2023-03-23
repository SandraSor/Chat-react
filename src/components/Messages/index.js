import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

import { Message } from '../';

const Messages = ({ items }) => {
	return items ? (
		<div>
			<Message
				avatar='https://sun9-79.userapi.com/c4300/u134167906/d_65f3c1c4.jpg'
				text='Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝'
				date='Sat Mar 19 2023 18:20:10'
				attachments={[
					{
						fileName: 'image.jpg',
						url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
					},
					{
						fileName: 'image.jpg',
						url: 'https://source.unsplash.com/100x100/?random=2&nature,water',
					},
					{
						fileName: 'image.jpg',
						url: 'https://source.unsplash.com/100x100/?random=3&nature,water',
					},
				]}
			/>
			<Message
				avatar='https://sun9-46.userapi.com/s/v1/ig1/wasRnoyRaLqREhb11OU8R11sd8qjGgo6FjP6pe2aW9kZfJoSIBZLKNBCJoAu6oxreM0NYzbe.jpg?size=200x200&quality=96&crop=0,0,1077,1077&ava=1'
				text='Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥'
				date='Sat Mar 19 2023 18:27:10'
				isMe={true}
				isRead={true}
			/>
			<Message
				avatar='https://sun9-46.userapi.com/s/v1/ig1/wasRnoyRaLqREhb11OU8R11sd8qjGgo6FjP6pe2aW9kZfJoSIBZLKNBCJoAu6oxreM0NYzbe.jpg?size=200x200&quality=96&crop=0,0,1077,1077&ava=1'
				text='Да'
				date='Sat Mar 19 2023 22:01:10'
				isMe={true}
				isRead={false}
			/>
			<Message
				avatar='https://sun9-79.userapi.com/c4300/u134167906/d_65f3c1c4.jpg'
				date='Sat Mar 20 2023 18:20:10'
				attachments={[
					{
						fileName: 'image.jpg',
						url: 'https://source.unsplash.com/150x150/?random=4&nature,water',
					},
				]}
			/>
			<Message
				avatar='https://sun9-79.userapi.com/c4300/u134167906/d_65f3c1c4.jpg'
				date='Sat Mar 19 2023 18:20:10'
				// isTyping={true}
				audio='https://assets.mixkit.co/active_storage/sfx/937/937-preview.mp3'
			/>
			<Message
				avatar='https://sun9-79.userapi.com/c4300/u134167906/d_65f3c1c4.jpg'
				text='Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝'
				date='Sat Mar 19 2023 18:20:10'
			/>
			<Message
				avatar='https://sun9-79.userapi.com/c4300/u134167906/d_65f3c1c4.jpg'
				text='Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝'
				date='Sat Mar 19 2023 18:20:10'
			/>
			<Message
				avatar='https://sun9-79.userapi.com/c4300/u134167906/d_65f3c1c4.jpg'
				text='Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝'
				date='Sat Mar 19 2023 18:20:10'
			/>
			<Message
				avatar='https://sun9-79.userapi.com/c4300/u134167906/d_65f3c1c4.jpg'
				text='Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝'
				date='Sat Mar 19 2023 18:20:10'
			/>
			<Message
				avatar='https://sun9-79.userapi.com/c4300/u134167906/d_65f3c1c4.jpg'
				text='Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝'
				date='Sat Mar 19 2023 18:20:10'
			/>
			<Message
				avatar='https://sun9-79.userapi.com/c4300/u134167906/d_65f3c1c4.jpg'
				text='Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝'
				date='Sat Mar 19 2023 18:20:10'
			/>
		</div>
	) : (
		<Empty description='Сообщения не найдены' />
	);
};

Messages.prototype = {
	items: PropTypes.array,
};

export default Messages;
