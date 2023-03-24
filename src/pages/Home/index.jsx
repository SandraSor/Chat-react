import React from 'react';
import { Status, ChatInput } from '../../components';
import { Messages, Dialogs } from '../../containers';
import { Button } from 'antd';
import {
	TeamOutlined,
	FormOutlined,
	EllipsisOutlined,
} from '@ant-design/icons';

// import dialogsJson from '../../dialogs.json';

import './Home.scss';

const Home = () => {
	return (
		<section className='home'>
			<div className='chat'>
				<div className='chat__sidebar'>
					<div className='chat__sidebar-header'>
						<div className='chat__sidebar-header-right'>
							<TeamOutlined
								className='chat__sidebar-header-right-img'
								style={{ fontSize: 18 }}
							/>
							<span>Список диалогов</span>
						</div>
						<Button icon={<FormOutlined />} />
					</div>
					<div className='chat__sidebar-dialogs'>
						<Dialogs myId={1} />
						{/* <Dialogs myId={1} items={dialogsJson} /> */}
					</div>
				</div>
				<div className='chat__dialog'>
					<div className='chat__dialog-header'>
						<div />
						<div className='chat__dialog-header-center'>
							<b className='chat__dialog-header-username'>Гай Юлий Цезарь</b>
							<Status online={true} />
						</div>
						<Button icon={<EllipsisOutlined style={{ fontSize: '20px' }} />} />
					</div>
					<div className='chat__dialog-messages'>
						<Messages />
					</div>
					<div className='chat__dialog-input'>
						<ChatInput />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
