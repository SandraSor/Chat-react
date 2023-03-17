import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from 'antd';
import {
	LockOutlined,
	UserOutlined,
	MailOutlined,
	ExclamationCircleTwoTone,
} from '@ant-design/icons';

import { Block, Button } from '../../../components';

const RegisterForm = () => {
	const success = true;

	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};

	return (
		<>
			<div className='auth__top'>
				<h2>Регистрация</h2>
				<p>Для входа в чат, вам нужно зарегистрироваться</p>
			</div>
			<Block>
				{!success ? (
					<Form
						name='normal_login'
						className='login-form'
						initialValues={{ remember: true }}
						onFinish={onFinish}
					>
						<Form.Item
							name='mail'
							rules={[
								{ required: true, message: 'Please input your Username!' },
							]}
							hasFeedback
							validateStatus='success'
						>
							<Input
								prefix={<MailOutlined className='site-form-item-icon' />}
								placeholder='E-mail'
								size='large'
							/>
						</Form.Item>
						<Form.Item
							name='username'
							rules={[
								{ required: true, message: 'Please input your Username!' },
							]}
							hasFeedback
							validateStatus='success'
						>
							<Input
								prefix={<UserOutlined className='site-form-item-icon' />}
								placeholder='Ваше имя'
								size='large'
							/>
						</Form.Item>

						<Form.Item
							name='password'
							rules={[
								{ required: true, message: 'Please input your Password!' },
							]}
							// hasFeedback
							// validateStatus='success'
						>
							<Input
								prefix={<LockOutlined className='site-form-item-icon' />}
								type='password'
								placeholder='Пароль'
								size='large'
							/>
						</Form.Item>
						<Form.Item
							name='password'
							rules={[
								{ required: true, message: 'Please input your Password!' },
							]}
							// hasFeedback
							// validateStatus='success'
						>
							<Input
								prefix={<LockOutlined className='site-form-item-icon' />}
								type='password'
								placeholder='Повторите пароль'
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
								Зарегистрироваться
							</Button>
						</Form.Item>
						<Link to='/' className='auth__register-link'>
							Войти в аккаунт
						</Link>
					</Form>
				) : (
					<div className='auth__success-block'>
						<div>
							<ExclamationCircleTwoTone style={{ fontSize: '48px' }} />
						</div>
						<h2>Подтвердите свой аккаунт</h2>
						<p>
							На вашу почту отправлено письмо с ссылкой на подтверждение
							аккаунта
						</p>
					</div>
				)}
			</Block>
		</>
	);
};

export default RegisterForm;
