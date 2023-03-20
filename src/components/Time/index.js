import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ru } from 'date-fns/locale';

const Time = ({ date }) => (
	<Fragment>
		{formatDistanceToNow(Date.parse(date), {
			addSuffix: true,
			locale: ru,
		})}
	</Fragment>
);

Time.prototype = {
	date: PropTypes.string,
};

export default Time;
