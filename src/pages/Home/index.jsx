import React from 'react';
import { Dialogs, Message, DialogItem } from '../../components';

import './Home.scss';

const Home = () => {
	return (
		<section className='home'>
			<Dialogs
				myId={1}
				items={[
					{
						_id: Math.random(),
						user: {
							_id: 1,
							fullName: 'Дядя Федя',
							avatar: null,
							isOnline: true,
						},
						text: 'Это официальный интернет-магазин кофе и чая Tasty Coffee.',
						// isRead: false,
						// created_at: 'Tue Mar 21 2023 14:26:42',
						created_at: 'Tue Feb 11 2014 12:33:18',
					},
					{
						_id: Math.random(),
						user: {
							_id: 2,
							fullName: 'Сергей Есенин',
							avatar:
								'https://cdn.culture.ru/images/86fc0c4f-2257-510d-a691-49a040f76e73/w_100,h_100,c_fill,g_attention/0.jpg',
							isOnline: false,
						},
						text: 'Не жалею, не зову, не плачу, все пройдет, как с белых яблонь дым.',
						// isRead: false,
						created_at: 'Tue Mar 21 2023 14:26:42',
						// created_at: 'Tue Feb 11 2014 12:33:18',
					},
				]}
			/>
			<Message
				avatar='https://sun9-79.userapi.com/c4300/u134167906/d_65f3c1c4.jpg'
				date='Sat Mar 19 2023 18:20:10'
				audio='https://assets.mixkit.co/active_storage/sfx/937/937-preview.mp3'
			/>
			{/* <div className='dialogs'>
				<DialogItem
					user={{
						fullName: 'Федор Достаевский',
						avatar:
							'https://sun9-79.userapi.com/c4300/u134167906/d_65f3c1c4.jpg',
					}}
					unReaded={0}
				/>
				<DialogItem
					user={{
						fullName: 'Федор Достаевский',
						avatar:
							'https://sun9-79.userapi.com/c4300/u134167906/d_65f3c1c4.jpg',
						isOnline: true,
					}}
					unReaded={1}
				/>
				<DialogItem
					user={{
						fullName: 'Федор Достаевский',
						avatar:
							'https://sun9-79.userapi.com/c4300/u134167906/d_65f3c1c4.jpg',
					}}
					unReaded={99}
				/>
			</div> */}

			{/* <Message
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
				isTyping
			/> */}
		</section>
	);
};

export default Home;

//1. https://sun9-46.userapi.com/s/v1/ig1/wasRnoyRaLqREhb11OU8R11sd8qjGgo6FjP6pe2aW9kZfJoSIBZLKNBCJoAu6oxreM0NYzbe.jpg?size=200x200&quality=96&crop=0,0,1077,1077&ava=1

//2.https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60

//3.	https://sun9-29.userapi.com/s/v1/if1/W4TSfP-FZtEBx…?size=100x100&quality=96&crop=60,60,480,480&ava=1

//4.https://sun9-29.userapi.com/s/v1/ig2/Nrich3FBDqBvI…?size=100x100&quality=95&crop=903,0,958,958&ava=1

//5.https://sun9-79.userapi.com/c4300/u134167906/d_65f3c1c4.jpg
