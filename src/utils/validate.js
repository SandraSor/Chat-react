const validateFunc = ({ isAuth, errors, values }) => {
	const rules = {
		email: (value) => {
			if (!value) {
				errors.email = 'Введите e-mail';
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
				errors.email = 'Некорректный e-mail';
			}
		},
		password: (value) => {
			if (!value) {
				errors.password = 'Введите пароль';
			} else if (
				!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/i.test(
					value
				)
			) {
				errors.password = isAuth
					? 'Неверный пароль'
					: 'Пароль не содержит [a-z] [A-Z] [0-9] [!@#$%^&*]';
			}
		},
		confirm: (value) => {
			if (!value) {
				errors.confirm = 'Повторите пароль';
			} else if (
				!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/i.test(
					value
				)
			) {
				errors.confirm = isAuth
					? 'Неверный пароль'
					: 'Пароль не содержит [a-z] [A-Z] [0-9] [!@#$%^&*]';
			}
		},
	};

	Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};

export default validateFunc;
