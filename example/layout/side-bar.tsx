import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import routes from '../router/routes';
import cs from 'classnames';

const SideBar: React.FunctionComponent<RouteComponentProps> = (props) => {
  return (
    <div>
      <Link
        className={cs('sider-link', { 'sider-link_active': props.location.pathname === '/intro'})}
        to='/intro'
      >介绍</Link>
      {
        routes.map((route) => {
          const cls = cs('sider-link', { 'sider-link_active': props.location.pathname === route.path })
          return <Link className={cls} key={route.path} to={route.path}>{route.sidebar}</Link>;
        })
      }
    </div>
  );
};

export default withRouter(SideBar);
