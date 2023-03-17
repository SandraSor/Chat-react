import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { Block, Button } from '../../../components';

const LoginForm = () => {
	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};

	return (
		<>
			<div className='auth__top'>
				<h2>Войти в аккаунт</h2>
				<p>Пожалуйста, войдите в свой аккаунт</p>
			</div>
			<Block>
				<Form
					name='normal_login'
					className='login-form'
					initialValues={{ remember: true }}
					onFinish={onFinish}
				>
					<Form.Item
						name='username'
						rules={[{ required: true, message: 'Please input your Username!' }]}
						hasFeedback
						validateStatus='success'
					>
						<Input
							prefix={<UserOutlined className='site-form-item-icon' />}
							placeholder='Username'
							size='large'
						/>
					</Form.Item>
					<Form.Item
						name='password'
						rules={[{ required: true, message: 'Please input your Password!' }]}
						// hasFeedback
						// validateStatus='success'
					>
						<Input
							prefix={<LockOutlined className='site-form-item-icon' />}
							type='password'
							placeholder='Password'
							size='large'
						/>
					</Form.Item>

					<Form.Item>
						<Button
							type='primary'
							htmlType='submit'
							className='login-form-button'
							size='large'
						>
							Войти в аккаунт
						</Button>
					</Form.Item>
					<Link to='/register' className='auth__register-link'>
						Зарегистрироваться
					</Link>
				</Form>
			</Block>
		</>
	);
};

export default LoginForm;
