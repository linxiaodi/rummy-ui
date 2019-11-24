import React from 'react';
import cs from 'classnames';
import { tuple } from '../_util/type'
import 'fisher-ui/icons/index.scss'

export const iconList = ['check-circle','close-circle', 'reload', 'edit-square', 'right', 'left', 'up', 'down', 'arrowright', 'arrowup', 'arrowleft', 'arrowdown', 'download', 'menu']

const IconName = tuple(...iconList)

export type IconName = (typeof IconName)[number]


interface IconProps {
  name: IconName,
  className?: string,
  [propName: string]: any
}



const Index: React.FunctionComponent<IconProps> = (props) => {
  const { className, name, ...rest } = props;
  const classNames = cs('fisher-icon', className, `fisher-icon-${name}`);
  return (
    <i className={classNames} {...rest} />
  );
};

export default Index;
