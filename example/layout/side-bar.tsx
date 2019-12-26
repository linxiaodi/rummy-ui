import React from 'react';
import { Link } from 'react-router-dom'
import routes from '../router/routes'

const SideBar = () => {
  return (
    <div>
      {
        routes.map((route) => {
          return <Link className="sider-link" key={route.path} to={route.path}>{route.sidebar}</Link>
        })
      }
    </div>
  );
};

export default SideBar;