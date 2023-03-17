import React from 'react';
import classNames from 'classnames';

// import { Button as BaseButton } from 'antd';

import './Block.scss';

const Block = ({ children, className }) => {
	return <div className={classNames('block', className)}>{children}</div>;
};

export default Block;
