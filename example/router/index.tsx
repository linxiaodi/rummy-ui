import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom'
import routes from './routes'
// import NotFound from '../layout/not-found'
import Install from '../layout/install'

const Router = () => {
    return (
        <div className="main">
            <Switch>
                {
                    routes.map((route) => {
                        return <Route key={route.path} path={route.path} component={route.component}/>
                    })
                }
                <Route path="/intro" component={Install}/>
            </Switch>
        </div>
    );
};

export default withRouter(Router);
