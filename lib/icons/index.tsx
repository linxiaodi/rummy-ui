import React from 'react';
import cs from 'classnames';
import { tuple } from '../_util/type'
import 'rummy-ui/icons/index.css'

export const iconList = ['caret-bottom', 'warning', 'caret-top', 'person', 'help-circled', 'circle-more', 'warning-circled', 'circle', 'clock', 'date', 'set', 'close', 'check', 'arrow-down', 'plus', 'circle-close', 'loading', 'edit', 'arrow-left', 'minus', 'arrow-right', 'picture', 'search', 'arrow-up', 'information', 'download', 'down', 'reload', 'pack-up', 'eye', 'unfold', 'd-arrow-left', 'd-arrow-right', 'star-on'];

const IconName = tuple(...iconList)

export type IconName = (typeof IconName)[number]

interface IconProps {
  name: IconName,
  className?: string,
  [propName: string]: any
}



const Index: React.FunctionComponent<IconProps> = (props) => {
  const { className, name, ...rest } = props;
  const classNames = cs('ru-icon', className, `ru-icon-${name}`);
  return (
    <i className={classNames} {...rest} />
  );
};

export default Index;
