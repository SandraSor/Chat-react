import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Status.scss';

const Status = ({ online }) => {
	return (
		<div className={classNames('status', { 'status--online': online })}>
			{online ? 'онлайн' : 'офлайн'}
		</div>
	);
};

Status.prototype = {
	online: PropTypes.bool,
};

export default Status;
