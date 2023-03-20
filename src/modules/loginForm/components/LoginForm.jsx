import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';

import { Block, Button } from '../../../components';
import { validateField } from '../../../utils/helpers';

const LoginForm = (props) => {
	const {
		values,
		touched,
		errors,
		isSubmitting,
		handleChange,
		handleBlur,
		handleSubmit,
		handleReset,
		dirty,
		isValid,
	} = props;

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
					onSubmit={handleSubmit}
				>
					<Form.Item
						name='email'
						hasFeedback
						validateStatus={validateField('email', touched, errors)}
						help={!touched.email ? '' : errors.email}
					>
						<Input
							id='email'
							prefix={<MailOutlined className='site-form-item-icon' />}
							placeholder='E-mail'
							size='large'
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</Form.Item>
					<Form.Item
						name='password'
						hasFeedback
						validateStatus={validateField('password', touched, errors)}
						help={!touched.password ? '' : errors.password}
					>
						<Input
							id='password'
							prefix={<LockOutlined className='site-form-item-icon' />}
							placeholder='Пароль'
							size='large'
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</Form.Item>

					<Form.Item>
						<Button
							type='primary'
							htmlType='submit'
							className='login-form-button'
							onClick={handleSubmit}
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
