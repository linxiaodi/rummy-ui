import React, { ReactElement } from 'react';
import cs from 'classnames';
import './index.scss';

interface BasicProps extends React.HTMLAttributes<HTMLElement> {
  className?: string,
  children?: React.ReactNode | Array<React.ReactElement>
}

interface LayoutProps extends BasicProps{
}

interface GeneratorProps {
  suffixCls?: string,
  tagName: 'header' | 'footer' | 'main' | 'section' | 'aside'
}

interface LayoutProperty {
  Footer: React.FunctionComponent<BasicProps>,
  Header: React.FunctionComponent<BasicProps>,
  Sider: React.FunctionComponent<BasicProps>,
  Content: React.FunctionComponent<BasicProps>
}

const Layout: React.FunctionComponent<LayoutProps> & LayoutProperty = (props) => {
  const { className, children } = props;
  const hasSider = Array.isArray(children) && (children as Array<React.ReactElement>).find(node => node && (node.type === Layout.Sider));
  return <div className={cs('ru-layout', cs(className, { 'ru-layout_has-sider': !!hasSider }))}>{ children }</div>;
};

// 衍生器模板
const Basic: React.FunctionComponent<BasicProps & GeneratorProps> = (props) => {
  const { suffixCls, className: extraCls, children } = props;
  const className = cs(`ru-layout-${suffixCls}`, extraCls)
  return React.createElement(props.tagName, { className }, children)
}

// 衍生器
const generator = ({ suffixCls, tagName }: GeneratorProps) => {
  return (props: BasicProps) => {
    return <Basic suffixCls={suffixCls} tagName={tagName} {...props}/>
  }
}

Layout.Header = generator({ suffixCls: 'header', tagName: 'header' })
Layout.Footer = generator({ suffixCls: 'footer', tagName: 'footer' })
Layout.Sider = generator({ suffixCls: 'sider', tagName: 'aside' })
Layout.Content = generator({ suffixCls: 'content', tagName: 'section' })

export default Layout;
