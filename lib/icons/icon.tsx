import React from 'react';
import cs from 'classnames';

interface IconProps {
	name: string,
	className?: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
	const { className, name, ...rest } = props;
	const classNames = cs('fisher-icon', className, `fisher-icon-${name}`);
	return (
		<i className={classNames} {...rest} />
	);
};

export default Icon;
