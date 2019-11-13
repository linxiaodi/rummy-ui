import React from 'react';
import { Link } from 'react-router-dom'
import routes from '../router/routes'

const SideBar = () => {
  return (
    <div className="sidebar">
      {
        routes.map((route) => {
          return <Link key={route.path} to={route.path}>{route.sidebar}</Link>
        })
      }
    </div>
  );
};

export default SideBar;