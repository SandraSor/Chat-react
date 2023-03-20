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
import { validateField } from '../../../utils/helpers';

const success = false;

const RegisterForm = (props) => {
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
				<h2>Регистрация</h2>
				<p>Для входа в чат, вам нужно зарегистрироваться</p>
			</div>
			<Block>
				{!success ? (
					<Form
						name='normal_login'
						className='login-form'
						onSubmit={handleSubmit}
						// onFinish={onFinish}
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
							name='username'
							// hasFeedback
							// validateStatus='success'
						>
							<Input
								prefix={<UserOutlined className='site-form-item-icon' />}
								placeholder='Ваше имя'
								size='large'
							/>
						</Form.Item>

						<Form.Item
							name='password'
							hasFeedback
							validateStatus={validateField('password', touched, errors)}
							help={!touched.password ? '' : errors.password}
						>
							<Input.Password
								id='password'
								prefix={<LockOutlined className='site-form-item-icon' />}
								// type='password'
								placeholder='Пароль'
								size='large'
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</Form.Item>

						<Form.Item
							name='confirm'
							hasFeedback
							validateStatus={validateField('confirm', touched, errors)}
							help={!touched.confirm ? '' : errors.confirm}
						>
							<Input.Password
								id='confirm'
								prefix={<LockOutlined className='site-form-item-icon' />}
								placeholder='Повторите пароль'
								size='large'
								value={values.confirm}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</Form.Item>

						<Form.Item>
							{isSubmitting && !isValid && <span>Error date</span>}
							<Button
								type='primary'
								htmlType='submit'
								onClick={handleSubmit}
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
